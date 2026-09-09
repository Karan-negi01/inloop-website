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

function makeGlowTexture() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.45, 'rgba(255,255,255,.38)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

const DUST_VERT = `
  uniform float uTime;
  uniform float uScrollY;
  uniform vec2 uMouse;
  uniform float uMouseActive;
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
    gl_PointSize = aSize * aZ * (1.0 + cb) * 2.0;
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

const FRAG_VERT = `
  uniform float uTime;
  uniform float uAssembly;   // 0..1 chaos -> formed
  uniform float uDock;       // 0..1 dock progress (eased)
  uniform vec2 uCenter;
  uniform vec2 uNav;
  uniform float uScale;
  uniform float uNavScale;
  attribute vec2 aTarget;
  attribute float aOrbit;
  attribute float aAngSpeed;
  attribute float aSeed;
  attribute float aSize;
  attribute float aBlue;
  varying float vAlpha;
  varying float vBlue;
  void main() {
    float ang = aSeed * 6.283 + uTime * aAngSpeed * (1.0 - uAssembly * 0.6);
    float orbNow = mix(aOrbit, 0.04, uAssembly);
    vec2 orbitPos = uCenter + vec2(cos(ang), sin(ang)) * orbNow * uScale;
    vec2 targetPos = uCenter + aTarget * uScale;
    vec2 formedPos = mix(orbitPos, targetPos, uAssembly);
    // gentle organic wobble while still assembling
    float wob = (1.0 - uAssembly) * 6.0;
    formedPos += vec2(sin(uTime * 1.7 + aSeed * 11.0), cos(uTime * 1.4 + aSeed * 7.0)) * wob;

    vec2 dockedPos = mix(uCenter, uNav, uDock);
    float scaleNow = mix(uScale, uNavScale, uDock);
    vec2 fromCenter = formedPos - uCenter;
    // re-project relative to the (possibly shrinking) center as it docks
    vec2 pos = dockedPos + fromCenter * (scaleNow / uScale);

    vAlpha = 1.0 - smoothstep(0.75, 1.0, uDock);
    vBlue = aBlue;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 0.0, 1.0);
    gl_PointSize = aSize * (1.0 + uAssembly * 0.2) * (1.0 - uDock * 0.4) * 2.2;
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

export function initGalaxyBackground({ canvas, targets, heroTextureUrl }) {
  const lowTier = !!window.__lowTierDevice;
  // __lowTierDevice isn't known yet at this point (measured async from real
  // frame timing — see siteEffects.js), so it always reads false here and
  // this always renders at full native resolution to start; the tier-measured
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

  // ---------- nebula (a handful of soft additive sprites, JS-updated — cheap at this count) ----------
  const glowTex = makeGlowTexture();
  const nebulaDefs = [
    { x: 0.20, y: 0.22, r: 0.5, col: 0x969ca4, a: 0.085, ph: 0.0 },
    { x: 0.83, y: 0.30, r: 0.56, col: 0xaab0b8, a: 0.055, ph: 2.1 },
    { x: 0.66, y: 0.72, r: 0.6, col: 0x787e86, a: 0.065, ph: 4.0 },
    { x: 0.26, y: 0.82, r: 0.52, col: 0x8c929a, a: 0.065, ph: 1.2 },
    { x: 0.50, y: 0.50, r: 0.44, col: 0x828890, a: 0.04, ph: 3.3 },
  ];
  const nebulaSprites = nebulaDefs.map((nb) => {
    const mat = new THREE.SpriteMaterial({ map: glowTex, color: nb.col, transparent: true, opacity: nb.a, blending: THREE.AdditiveBlending, depthTest: false });
    const spr = new THREE.Sprite(mat);
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
    const mat = new THREE.SpriteMaterial({ map: glowTex, color: def.col, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthTest: false });
    const spr = new THREE.Sprite(mat);
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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1));
    }
  }, { once: true });

  // ---------- intro fragments (assemble into the logo shape, then dock) ----------
  const rawTargets = targets && targets.length ? targets : [[0, 0]];
  const N_FRAG = Math.min(Math.round((W * H < 600000 ? 900 : 1600) * (lowTier ? 0.5 : 1)), rawTargets.length * 4);
  const fragGeo = new THREE.BufferGeometry();
  const fragPos = new Float32Array(N_FRAG * 3);
  const fragTarget = new Float32Array(N_FRAG * 2);
  const fragOrbit = new Float32Array(N_FRAG);
  const fragAngSpeed = new Float32Array(N_FRAG);
  const fragSeed = new Float32Array(N_FRAG);
  const fragSize = new Float32Array(N_FRAG);
  const fragBlue = new Float32Array(N_FRAG);
  for (let i = 0; i < N_FRAG; i++) {
    const t = rawTargets[(i * 7919) % rawTargets.length];
    fragTarget[i * 2] = t[0];
    fragTarget[i * 2 + 1] = t[1];
    fragOrbit[i] = 0.9 + Math.random() * 1.5;
    fragAngSpeed[i] = 0.3 + Math.random() * 0.5;
    fragSeed[i] = Math.random();
    fragSize[i] = 0.7 + Math.random() * 1.4;
    fragBlue[i] = Math.random() < 0.13 ? 1 : 0;
  }
  fragGeo.setAttribute('position', new THREE.BufferAttribute(fragPos, 3));
  fragGeo.setAttribute('aTarget', new THREE.BufferAttribute(fragTarget, 2));
  fragGeo.setAttribute('aOrbit', new THREE.BufferAttribute(fragOrbit, 1));
  fragGeo.setAttribute('aAngSpeed', new THREE.BufferAttribute(fragAngSpeed, 1));
  fragGeo.setAttribute('aSeed', new THREE.BufferAttribute(fragSeed, 1));
  fragGeo.setAttribute('aSize', new THREE.BufferAttribute(fragSize, 1));
  fragGeo.setAttribute('aBlue', new THREE.BufferAttribute(fragBlue, 1));
  const fragUniforms = {
    uTime: { value: 0 }, uAssembly: { value: 0 }, uDock: { value: 0 },
    uCenter: { value: new THREE.Vector2(LCX, LCY) }, uNav: { value: new THREE.Vector2(LCX, LCY) },
    uScale: { value: S }, uNavScale: { value: S },
  };
  const fragMat = new THREE.ShaderMaterial({
    vertexShader: FRAG_VERT, fragmentShader: FRAG_FRAG, uniforms: fragUniforms,
    transparent: true, depthTest: false, blending: THREE.AdditiveBlending,
  });
  const fragPoints = new THREE.Points(fragGeo, fragMat);
  scene.add(fragPoints);

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

    // nebula drift (5 sprites — negligible JS cost)
    for (const spr of nebulaSprites) {
      const nb = spr.userData;
      const cx = (nb.x + Math.sin(tt * 0.05 + nb.ph) * 0.04) * W + Math.sin(scrollY * 0.0006 + nb.ph) * 34;
      const cy = (nb.y + Math.cos(tt * 0.045 + nb.ph) * 0.04) * H + Math.cos(scrollY * 0.0005 + nb.ph) * 30;
      const r = nb.r * Math.max(W, H) * 2;
      spr.position.set(cx, cy, 0);
      spr.scale.set(r, r, 1);
      spr.material.opacity = nb.a * (0.85 + 0.15 * Math.sin(tt * 0.2 + nb.ph));
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
        spr.material.opacity = targetOpacity;
      }
    }

    // dust: all per-particle motion happens in the shader
    dustUniforms.uTime.value = tt;
    dustUniforms.uScrollY.value = scrollY;
    if (mx > -9999) { dustUniforms.uMouse.value.set(mx, my); dustUniforms.uMouseActive.value = 1; }
    else dustUniforms.uMouseActive.value = 0;

    // fragments: assembly + dock, also shader-driven
    if (dpRaw < 1) {
      fragPoints.visible = true;
      fragUniforms.uTime.value = tt;
      fragUniforms.uAssembly.value = a;
      fragUniforms.uDock.value = de;
      fragUniforms.uCenter.value.set(LCX, LCY * 1 - 0); // keep in screen space (Y already canvas-style via camera)
      fragUniforms.uScale.value = S * zoom;
      if (navLogo) {
        const r = navLogo.getBoundingClientRect();
        if (r.width) {
          fragUniforms.uNav.value.set(r.left + r.width / 2, r.top + r.height / 2);
          fragUniforms.uNavScale.value = (r.width || 34) / 2;
        }
      }
    } else {
      fragPoints.visible = false;
    }

    // hero logo sprite: fades in once formed, flies into the nav slot while docking
    if (heroSprite && t >= T.pulse) {
      const heroFade = clamp((t - T.pulse) / (T.locked - T.pulse), 0, 1);
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
