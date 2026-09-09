// WebGL replacement for the site's persistent canvas background + intro
// particle-formation sequence, using Three.js.
//
// Why: the original implementation used the 2D Canvas API (ctx.arc,
// ctx.fillRect, ctx.createRadialGradient) to draw hundreds to thousands of
// particles every frame, forever, via a JS for-loop doing the per-particle
// math on the CPU. That's the same category of cost the performance audit
// flagged for the whole page, just concentrated in one place — and it's
// exactly the architectural difference between this kind of site and a
// WebGL-native one (like lusion.co): a GPU shader can interpolate every
// particle's position in parallel, in one draw call, essentially for free,
// where a CPU loop has to do it one particle at a time, every frame.
//
// This keeps the same overall visual beats (chaotic particles assembling
// into the logo shape, a pulse, docking into the header, a persistent
// twinkling/drifting starfield with soft nebula glow behind everything)
// but moves the actual per-particle animation into vertex shaders, and
// batches the whole starfield + the whole intro formation into two draw
// calls total instead of hundreds of individual 2D canvas calls per frame.

import * as THREE from 'three';

const HERO_ASPECT = 1.8228;
const T = { void: 0, awaken: 300, chaos: 1250, formation: 3300, pulse: 3400, locked: 4050, hold: 4250, dock: 4900 };
const DOCK_MS = 950;

const easeOut = (t) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
// same easing the original used to drive "how assembled are the fragments"
const assembly = (t) => {
  if (t < T.chaos) return 0;
  if (t >= T.pulse) return 1;
  const p = (t - T.chaos) / (T.pulse - T.chaos);
  return p < 0 ? 0 : p > 1 ? 1 : p * p * (3 - p * 2);
};
const rnd = (a, b) => a + Math.random() * (b - a);
// same drifting-noise field the original uses to give assembling fragments
// their chaotic wander before they lock onto the target shape
const flow = (x, y, t) => {
  const s = 0.0016;
  return [
    Math.sin(x * s + t * 0.6) + Math.cos(y * s * 1.3 - t * 0.45),
    Math.cos(x * s * 1.1 - t * 0.5) + Math.sin(y * s - t * 0.7),
  ];
};

// Nebula/aurora glow blobs get stretched to a large fraction of the
// viewport, and the original drew them with ctx.createRadialGradient every
// frame — a true analytic gradient, sharp at any size since it's recomputed
// at native resolution rather than sampled from a fixed-size bitmap. A
// pre-rasterized CanvasTexture (the previous approach here) can't match
// that at large scale no matter how big you make the source bitmap. This
// shader computes the identical 3-stop gradient (0->1, .45->.38, 1->0,
// linear between stops, same as canvas gradient interpolation) per pixel
// instead, on a plain unit quad — resolution-independent, same draw cost.
const GLOW_VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const GLOW_FRAG = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    if (d > 1.0) discard;
    float a = d < 0.45 ? mix(1.0, 0.38, d / 0.45) : mix(0.38, 0.0, (d - 0.45) / 0.55);
    gl_FragColor = vec4(uColor, a * uOpacity);
  }
`;
function makeGlowMaterial(colorHex, opacity) {
  return new THREE.ShaderMaterial({
    vertexShader: GLOW_VERT, fragmentShader: GLOW_FRAG,
    uniforms: { uColor: { value: new THREE.Color(colorHex) }, uOpacity: { value: opacity } },
    transparent: true, depthTest: false, blending: THREE.AdditiveBlending,
  });
}

const DUST_VERT = `
  uniform float uTime;
  uniform float uScrollY;
  uniform vec2 uMouse;
  uniform float uMouseActive;
  uniform float uPR;
  attribute float aSize;
  attribute float aZ;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aAlpha;
  varying float vAlpha;
  void main() {
    float driftY = mod(position.y - uTime * (0.03 + aZ * 0.09) * 60.0, 1000.0 * 3.0) - 500.0;
    // keep particles wrapping within a tall band above/below the viewport
    float y = position.y - uTime * (8.0 + aZ * 22.0);
    y = mod(y, 2200.0);
    if (y < -100.0) y += 2200.0;
    float x = position.x + sin(uTime * 0.3 + aSeed) * 6.0;
    float py = y - uScrollY * 0.10 * aZ;

    vec2 p = vec2(x, py);
    float cb = 0.0;
    if (uMouseActive > 0.5) {
      vec2 d = p - uMouse;
      float dd = dot(d, d);
      if (dd < 28000.0) {
        float f = 1.0 - dd / 28000.0;
        cb = f * 0.5;
        float inv = f * 6.0 / max(40.0, sqrt(dd));
        p += d * inv;
      }
    }
    float tw = 0.55 + 0.45 * sin(uTime * 2.4 + aSeed * 6.0);
    vAlpha = aAlpha * tw + cb;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
    gl_PointSize = aSize * aZ * (1.0 + cb) * 2.0 * uPR;
  }
`;
const DUST_FRAG = `
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float edge = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(0.867, 0.871, 0.875, vAlpha * edge);
  }
`;

// The fragment swarm's motion is a real damped-spring + flow-field
// simulation in the original (stateful: velocity carries over frame to
// frame), not a pure function of time — so unlike dust/nebula this can't
// be reduced to a closed-form vertex-shader formula. It's computed on the
// CPU each frame (mirroring the original's own per-particle JS loop
// exactly) and written into these attributes; the shader just renders
// wherever it's told. Bounded to the ~5s intro window, same as the
// original paid this same CPU cost for, so it's not an ongoing cost.
const FRAG_VERT = `
  uniform float uPR;
  attribute float aAlpha;
  attribute float aPSize;
  attribute float aBlue;
  varying float vAlpha;
  varying float vBlue;
  void main() {
    vAlpha = aAlpha;
    vBlue = aBlue;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aPSize * uPR;
  }
`;
const FRAG_FRAG = `
  varying float vAlpha;
  varying float vBlue;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float edge = smoothstep(0.5, 0.0, d);
    vec3 col = mix(vec3(0.933, 0.937, 0.941), vec3(0.812, 0.820, 0.827), vBlue);
    gl_FragColor = vec4(col, vAlpha * edge);
  }
`;
// motion-trail streaks behind fast-moving fragments — the original strokes
// a short line from a particle's recent position to its current one
// whenever it's moving fast (sp > 1.3), which is what gives the chaos/
// formation phase its dense, spiky look. Rendered as plain additive line
// segments, two vertices per fragment (degenerate/zero-alpha when not
// streaking, cheaper than toggling draw range every frame).
const STREAK_VERT = `
  attribute float aAlpha;
  attribute float aBlue;
  varying float vAlpha;
  varying float vBlue;
  void main() {
    vAlpha = aAlpha;
    vBlue = aBlue;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const STREAK_FRAG = `
  varying float vAlpha;
  varying float vBlue;
  void main() {
    vec3 col = mix(vec3(0.878, 0.882, 0.886), vec3(0.812, 0.820, 0.827), vBlue);
    gl_FragColor = vec4(col, vAlpha);
  }
`;

export function initGalaxyBackground({ canvas, targets, heroTextureUrl }) {
  const lowTier = !!window.__lowTierDevice;
  // __lowTierDevice isn't known yet at this point (measured async from real
  // frame timing — see siteEffects.js), so it always reads false here and
  // this always renders at full native resolution to start (capped at 2x,
  // same ceiling the original 2D-canvas version used); the tier-measured
  // listener below drops it only once a device is actually confirmed slow.
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x080808, 1);

  const scene = new THREE.Scene();
  let W = window.innerWidth, H = window.innerHeight;
  const camera = new THREE.OrthographicCamera(0, W, 0, H, -10, 10);
  camera.position.z = 1;

  let LCX = W / 2, LCY = H * 0.44, S = Math.min(W * 0.235, H * 0.3);
  function layout() {
    const mob = W < 760;
    LCX = W / 2; LCY = H * (mob ? 0.4 : 0.44);
    S = mob ? Math.min(W * 0.34, H * 0.22) : Math.min(W * 0.235, H * 0.3);
  }
  layout();

  // ---------- nebula (a handful of soft additive glow quads, JS-updated — cheap at this count) ----------
  const glowGeo = new THREE.PlaneGeometry(1, 1);
  const nebulaDefs = [
    { x: 0.20, y: 0.22, r: 0.5, col: 0x969ca4, a: 0.085, ph: 0.0 },
    { x: 0.83, y: 0.30, r: 0.56, col: 0xaab0b8, a: 0.055, ph: 2.1 },
    { x: 0.66, y: 0.72, r: 0.6, col: 0x787e86, a: 0.065, ph: 4.0 },
    { x: 0.26, y: 0.82, r: 0.52, col: 0x8c929a, a: 0.065, ph: 1.2 },
    { x: 0.50, y: 0.50, r: 0.44, col: 0x828890, a: 0.04, ph: 3.3 },
  ];
  const nebulaSprites = nebulaDefs.map((nb) => {
    const mat = makeGlowMaterial(nb.col, nb.a);
    const spr = new THREE.Mesh(glowGeo, mat);
    spr.userData = nb;
    scene.add(spr);
    return spr;
  });

  // ---------- aurora wash (formerly a full-viewport DOM div with
  // filter:blur(72px) + a 24s CSS animation — the single most expensive
  // persistent blur+animation combo on the page, since it's part of the
  // chrome and present on every route. Same three soft blobs, drifting
  // together, but as GPU sprites instead of a blurred DOM element; opacity
  // still follows body[data-fx] like the original per-route variants did. ----------
  const auroraDefs = [
    { x: 0.22, y: 0.26, w: 0.30, col: 0xb5bac2 },
    { x: 0.78, y: 0.34, w: 0.28, col: 0xc0c4cb },
    { x: 0.55, y: 0.82, w: 0.34, col: 0xb5bac2 },
  ];
  const auroraOpacityByFx = { home: 0.3, about: 0.5, service: 0.16, work: 0.2 };
  const auroraSprites = auroraDefs.map((def) => {
    const mat = makeGlowMaterial(def.col, 0);
    const spr = new THREE.Mesh(glowGeo, mat);
    spr.userData = def;
    scene.add(spr);
    return spr;
  });

  // ---------- dust starfield (one draw call, all per-particle motion in the vertex shader) ----------
  const N_DUST = Math.round((W * H < 600000 ? 130 : 240) * (lowTier ? 0.5 : 1));
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(N_DUST * 3);
  const dustSize = new Float32Array(N_DUST);
  const dustZ = new Float32Array(N_DUST);
  const dustSeed = new Float32Array(N_DUST);
  const dustSpeed = new Float32Array(N_DUST);
  const dustAlpha = new Float32Array(N_DUST);
  for (let i = 0; i < N_DUST; i++) {
    dustPos[i * 3] = Math.random() * W;
    dustPos[i * 3 + 1] = Math.random() * H;
    dustSize[i] = 0.3 + Math.random() * 1.4;
    dustZ[i] = 0.2 + Math.random() * 0.8;
    dustSeed[i] = Math.random() * 1000;
    dustSpeed[i] = 0.0006 + Math.random() * 0.004;
    dustAlpha[i] = 0.035 + Math.random() * 0.30;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  dustGeo.setAttribute('aSize', new THREE.BufferAttribute(dustSize, 1));
  dustGeo.setAttribute('aZ', new THREE.BufferAttribute(dustZ, 1));
  dustGeo.setAttribute('aSeed', new THREE.BufferAttribute(dustSeed, 1));
  dustGeo.setAttribute('aSpeed', new THREE.BufferAttribute(dustSpeed, 1));
  dustGeo.setAttribute('aAlpha', new THREE.BufferAttribute(dustAlpha, 1));
  const dustUniforms = {
    uTime: { value: 0 }, uScrollY: { value: 0 }, uMouse: { value: new THREE.Vector2(-9999, -9999) }, uMouseActive: { value: 0 },
    uPR: { value: DPR },
  };
  const dustMat = new THREE.ShaderMaterial({
    vertexShader: DUST_VERT, fragmentShader: DUST_FRAG, uniforms: dustUniforms,
    transparent: true, depthTest: false, blending: THREE.AdditiveBlending,
  });
  const dustPoints = new THREE.Points(dustGeo, dustMat);
  scene.add(dustPoints);
  // __lowTierDevice isn't known yet at this point — it's measured async
  // from real frame timing (see siteEffects.js) — so react to it landing
  // late by thinning the already-built dust buffer instead of rebuilding it.
  window.addEventListener('inloop:tier-measured', () => {
    if (window.__lowTierDevice) {
      dustGeo.setDrawRange(0, Math.floor(N_DUST / 2));
      const newPR = Math.min(window.devicePixelRatio || 1, 1);
      renderer.setPixelRatio(newPR);
      dustUniforms.uPR.value = newPR;
      fragUniforms.uPR.value = newPR;
    }
  }, { once: true });

  // ---------- intro fragments (assemble into the logo shape from chaos) ----------
  const rawTargets = targets && targets.length ? targets : [[0, 0]];
  const N_FRAG = Math.min(Math.round((W * H < 600000 ? 900 : 1600) * (lowTier ? 0.5 : 1)), rawTargets.length * 4);
  const fragTarget = new Float32Array(N_FRAG * 2);
  const fragOrbit = new Float32Array(N_FRAG);
  const fragAsp = new Float32Array(N_FRAG);
  const fragSize = new Float32Array(N_FRAG);
  const fragBlue = new Float32Array(N_FRAG);
  // live physics state (JS-side, mirrors the original's damped-spring +
  // flow-field simulation exactly — see the frame() loop below)
  const fragX = new Float32Array(N_FRAG);
  const fragY = new Float32Array(N_FRAG);
  const fragVX = new Float32Array(N_FRAG);
  const fragVY = new Float32Array(N_FRAG);
  const fragAng = new Float32Array(N_FRAG);
  for (let i = 0; i < N_FRAG; i++) {
    const t = rawTargets[(i * 7919) % rawTargets.length];
    fragTarget[i * 2] = t[0];
    fragTarget[i * 2 + 1] = t[1];
    fragOrbit[i] = 0.9 + Math.random() * 1.5;
    fragAsp[i] = rnd(0.4, 1.6);
    fragSize[i] = 0.7 + Math.random() * 1.4;
    fragBlue[i] = Math.random() < 0.13 ? 1 : 0;
    const ang0 = rnd(0, 6.283);
    fragAng[i] = ang0;
    fragX[i] = LCX + Math.cos(ang0) * fragOrbit[i] * S;
    fragY[i] = LCY + Math.sin(ang0) * fragOrbit[i] * S;
  }

  const fragGeo = new THREE.BufferGeometry();
  const fragPos = new Float32Array(N_FRAG * 3);
  const fragAlpha = new Float32Array(N_FRAG);
  const fragPSize = new Float32Array(N_FRAG);
  fragGeo.setAttribute('position', new THREE.BufferAttribute(fragPos, 3));
  fragGeo.setAttribute('aAlpha', new THREE.BufferAttribute(fragAlpha, 1));
  fragGeo.setAttribute('aPSize', new THREE.BufferAttribute(fragPSize, 1));
  fragGeo.setAttribute('aBlue', new THREE.BufferAttribute(fragBlue, 1));
  const fragUniforms = { uPR: { value: DPR } };
  const fragMat = new THREE.ShaderMaterial({
    vertexShader: FRAG_VERT, fragmentShader: FRAG_FRAG, uniforms: fragUniforms,
    transparent: true, depthTest: false, blending: THREE.AdditiveBlending,
  });
  const fragPoints = new THREE.Points(fragGeo, fragMat);
  scene.add(fragPoints);

  // motion-trail streaks — two vertices (from -> to) per fragment, alpha 0
  // when not currently streaking (cheaper than resizing the draw range
  // every frame as the streaking subset changes).
  const streakGeo = new THREE.BufferGeometry();
  const streakPos = new Float32Array(N_FRAG * 2 * 3);
  const streakAlpha = new Float32Array(N_FRAG * 2);
  const streakBlue = new Float32Array(N_FRAG * 2);
  for (let i = 0; i < N_FRAG; i++) {
    streakBlue[i * 2] = fragBlue[i];
    streakBlue[i * 2 + 1] = fragBlue[i];
  }
  streakGeo.setAttribute('position', new THREE.BufferAttribute(streakPos, 3));
  streakGeo.setAttribute('aAlpha', new THREE.BufferAttribute(streakAlpha, 1));
  streakGeo.setAttribute('aBlue', new THREE.BufferAttribute(streakBlue, 1));
  const streakMat = new THREE.ShaderMaterial({
    vertexShader: STREAK_VERT, fragmentShader: STREAK_FRAG,
    transparent: true, depthTest: false, blending: THREE.AdditiveBlending,
  });
  const streakLines = new THREE.LineSegments(streakGeo, streakMat);
  scene.add(streakLines);

  // central formation glow — the original paints a soft radial wash behind
  // the assembling logo (ctx.createRadialGradient at LCX,LCY, radius S*2);
  // reuses the same analytic-gradient shader as the nebula/aurora blobs.
  const formationGlow = new THREE.Mesh(glowGeo, makeGlowMaterial(0xcfd1d3, 0));
  scene.add(formationGlow);

  // ---------- docking hero logo sprite (fades in as fragments assemble, flies into the nav slot) ----------
  let heroSprite = null;
  const texLoader = new THREE.TextureLoader();
  texLoader.load(heroTextureUrl, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthTest: false });
    heroSprite = new THREE.Sprite(mat);
    heroSprite.center.set(0.5, 0.5);
    scene.add(heroSprite);
  });

  // ---------- state ----------
  let start = 0, paused = false, docked = false;
  let mx = -1e4, my = -1e4;
  let scrollY = window.scrollY || 0;

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    renderer.setSize(W, H, false);
    camera.right = W; camera.bottom = H;
    camera.updateProjectionMatrix();
    layout();
  }
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', () => { scrollY = window.scrollY || window.pageYOffset || 0; }, { passive: true });
  window.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
  window.addEventListener('pointerleave', () => { mx = -1e4; my = -1e4; });
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  const navLogo = document.querySelector('.navlogo');

  function frame(now) {
    requestAnimationFrame(frame);
    if (paused) return;
    if (!start) start = now;
    if (window.__reportFrameSample) window.__reportFrameSample(now);
    const t = now - start;
    const tt = t * 0.001;

    const dpRaw = t >= T.dock ? clamp((t - T.dock) / DOCK_MS, 0, 1) : 0;
    const de = dpRaw * dpRaw * (3 - dpRaw * 2);
    const a = assembly(t);
    const zoom = 0.84 + easeOut(t / T.pulse) * 0.16;
    const heroFade = clamp((t - T.pulse) / (T.locked - T.pulse), 0, 1);

    // nebula drift (5 sprites — negligible JS cost)
    for (const spr of nebulaSprites) {
      const nb = spr.userData;
      const cx = (nb.x + Math.sin(tt * 0.05 + nb.ph) * 0.04) * W + Math.sin(scrollY * 0.0006 + nb.ph) * 34;
      const cy = (nb.y + Math.cos(tt * 0.045 + nb.ph) * 0.04) * H + Math.cos(scrollY * 0.0005 + nb.ph) * 30;
      const r = nb.r * Math.max(W, H) * 2;
      spr.position.set(cx, cy, 0);
      spr.scale.set(r, r, 1);
      spr.material.uniforms.uOpacity.value = nb.a * (0.85 + 0.15 * Math.sin(tt * 0.2 + nb.ph));
    }

    // aurora wash: the three blobs drift together as one unit — a smooth
    // back-and-forth (sin wave) approximating the original's 24s
    // ease-in-out alternate — with opacity following the current route
    // via body[data-fx], same as the CSS variants it replaces.
    {
      const ap = (Math.sin(tt * (Math.PI / 24)) + 1) / 2; // 0..1, ~48s round trip
      const driftX = lerp(-0.04, 0.04, ap) * W;
      const driftY = lerp(-0.02, 0.03, ap) * H;
      const fx = document.body.getAttribute('data-fx');
      const targetOpacity = auroraOpacityByFx[fx] != null ? auroraOpacityByFx[fx] : 0.3;
      for (const spr of auroraSprites) {
        const def = spr.userData;
        spr.position.set(def.x * W + driftX, def.y * H + driftY, 0);
        const r = def.w * Math.max(W, H) * 2.4;
        spr.scale.set(r, r, 1);
        spr.material.uniforms.uOpacity.value = targetOpacity;
      }
    }

    // dust: all per-particle motion happens in the shader
    dustUniforms.uTime.value = tt;
    dustUniforms.uScrollY.value = scrollY;
    if (mx > -9999) { dustUniforms.uMouse.value.set(mx, my); dustUniforms.uMouseActive.value = 1; }
    else dustUniforms.uMouseActive.value = 0;

    // fragments: real damped-spring + flow-field simulation, mirroring the
    // original's own per-particle physics exactly (see the flow()/rnd()
    // helpers above) — this is what produces the fast, chaotic motion that
    // the streak trails below react to. Fragments fade out in place as they
    // dock (de -> 1); only the hero logo sprite actually flies to the nav
    // slot, same as the original.
    if (dpRaw < 1) {
      fragPoints.visible = true;
      streakLines.visible = true;
      const stiff = lerp(0.012, 0.16, a) * (t >= T.pulse ? 1.4 : 1);
      const damp = lerp(0.90, 0.78, a);
      const fragDim = (1 - heroFade * 0.68) * (1 - de);
      for (let i = 0; i < N_FRAG; i++) {
        fragAng[i] += (0.004 + fragAsp[i] * 0.006) * (1 - a * 0.6);
        const orbNow = lerp(fragOrbit[i], 0.04, a);
        const rgx = LCX + Math.cos(fragAng[i]) * orbNow * S;
        const rgy = LCY + Math.sin(fragAng[i]) * orbNow * S;
        const txp = LCX + fragTarget[i * 2] * S;
        const typ = LCY + fragTarget[i * 2 + 1] * S;
        const gx = lerp(rgx, txp, a), gy = lerp(rgy, typ, a);
        fragVX[i] += (gx - fragX[i]) * stiff;
        fragVY[i] += (gy - fragY[i]) * stiff;
        if (a < 0.98) {
          const fl = flow(fragX[i], fragY[i], tt);
          const k = (1 - a) * 0.9;
          fragVX[i] += fl[0] * k;
          fragVY[i] += fl[1] * k;
        }
        fragVX[i] *= damp;
        fragVY[i] *= damp;
        fragX[i] += fragVX[i];
        fragY[i] += fragVY[i];
        const sp = Math.hypot(fragVX[i], fragVY[i]);
        const br = clamp(0.25 + sp * 0.05 + a * 0.35, 0.12, 1) * fragDim;

        fragPos[i * 3] = fragX[i];
        fragPos[i * 3 + 1] = fragY[i];
        fragAlpha[i] = br;
        fragPSize[i] = fragSize[i] * (1 + a * 0.2) * 2.2;

        const si = i * 6, ai = i * 2;
        if (sp > 1.3 && a < 0.96) {
          streakPos[si] = fragX[i] - fragVX[i] * 2.2;
          streakPos[si + 1] = fragY[i] - fragVY[i] * 2.2;
          streakPos[si + 3] = fragX[i];
          streakPos[si + 4] = fragY[i];
          streakAlpha[ai] = br * 0.5;
          streakAlpha[ai + 1] = br * 0.5;
        } else {
          streakAlpha[ai] = 0;
          streakAlpha[ai + 1] = 0;
        }
      }
      fragGeo.attributes.position.needsUpdate = true;
      fragGeo.attributes.aAlpha.needsUpdate = true;
      fragGeo.attributes.aPSize.needsUpdate = true;
      streakGeo.attributes.position.needsUpdate = true;
      streakGeo.attributes.aAlpha.needsUpdate = true;

      // soft central wash behind the assembling logo, fading in as
      // fragments lock and out again as the dock animation starts
      const glowAmt = clamp((t - 150) / (T.pulse - 150), 0, 1) * (1 - de);
      formationGlow.position.set(LCX, LCY, 0);
      formationGlow.scale.set(S * 4, S * 4, 1);
      formationGlow.material.uniforms.uOpacity.value = glowAmt * 0.5;
    } else {
      fragPoints.visible = false;
      streakLines.visible = false;
      formationGlow.material.uniforms.uOpacity.value = 0;
    }

    // hero logo sprite: fades in once formed, flies into the nav slot while docking
    if (heroSprite && t >= T.pulse) {
      const alpha = heroFade * (dpRaw < 0.88 ? 1 : clamp(1 - (dpRaw - 0.88) / 0.12, 0, 1));
      heroSprite.material.opacity = alpha;
      let cx = LCX, cy = LCY, sCur = S * zoom;
      if (navLogo && dpRaw > 0) {
        const r = navLogo.getBoundingClientRect();
        if (r.width) {
          cx = lerp(LCX, r.left + r.width / 2, de);
          cy = lerp(LCY, r.top + r.height / 2, de);
          sCur = lerp(S * zoom, (r.width || 34) / 2, de);
        }
      }
      heroSprite.position.set(cx, cy, 0);
      const hw = 2 * sCur, hh = hw / HERO_ASPECT;
      heroSprite.scale.set(hw, hh, 1);
    } else if (heroSprite) {
      heroSprite.material.opacity = 0;
    }

    if (t >= T.dock && !docked) {
      docked = true;
      document.body.classList.add('ready');
      document.body.classList.add('docked');
      document.body.classList.remove('intro');
    }

    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);

  return {
    skip() {
      start = performance.now() - (T.dock + DOCK_MS + 60);
      canvas.style.transition = 'opacity .4s ease';
      canvas.style.opacity = '0';
      setTimeout(() => { canvas.style.display = 'none'; }, 460);
      document.body.classList.add('ready');
      document.body.classList.add('docked');
      document.body.classList.remove('intro');
    },
  };
}
