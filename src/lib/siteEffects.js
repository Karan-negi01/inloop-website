// Ported from the original static site's vanilla-JS behavior layer.
// Runs once on client mount (see Layout.jsx). Guarded against React StrictMode's
// double-invoke in development so listeners/canvas/cursor elements aren't duplicated.
// This is a literal, unmodified port of the original's own canvas/JS — no
// WebGL rewrite, no device-tier detection, no perf-motivated caching. It's
// the exact same code (and exact same cost) as the source file.
import { HERO_TARGETS as TARGETS } from './heroTargets';

let hasInitialized = false;

export function initSiteEffects() {
  if (typeof window === 'undefined' || hasInitialized) return;
  hasInitialized = true;

const HERO_SRC = "/images/hero-logo.webp";
const HERO_ASPECT = 1.8228;
document.querySelector('.navlogo').src = HERO_SRC;

const heroEl = document.querySelector('.hero');
const cv = document.getElementById('c');
const ctx = cv.getContext('2d',{alpha:false});

let W=0,H=0,DPR=1,LCX=0,LCY=0,S=0;
let scrollY=0, mx=-1e4, my=-1e4, mvx=0, mvy=0;
const hero = new Image(); let heroReady=false;
hero.onload=()=>heroReady=true; hero.src=HERO_SRC;
const off=document.createElement('canvas'), offg=off.getContext('2d');

// drifting nebula clouds — give every section its own colour wash
let nebula=[];
function buildNebula(){
  nebula=[
    {x:.20,y:.22,r:.50,col:[150,156,164],a:.085,ph:0.0},
    {x:.83,y:.30,r:.56,col:[170,176,184],a:.055,ph:2.1},
    {x:.66,y:.72,r:.60,col:[120,126,134],a:.065,ph:4.0},
    {x:.26,y:.82,r:.52,col:[140,146,154],a:.065,ph:1.2},
    {x:.50,y:.50,r:.44,col:[130,136,144],a:.040,ph:3.3}
  ];
}

function resize(){
  DPR=Math.min(window.devicePixelRatio||1,2);
  W=window.innerWidth; H=window.innerHeight;
  cv.width=W*DPR; cv.height=H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
  const mob = W<760;
  LCX=W/2; LCY=H*(mob?0.40:0.44);
  S = mob ? Math.min(W*0.34,H*0.22) : Math.min(W*0.235,H*0.30);
}
window.addEventListener('resize',resize); resize(); buildNebula();
try{window.scrollTo(0,0);}catch(e){}
window.addEventListener('scroll',()=>{scrollY=window.scrollY||window.pageYOffset||0;},{passive:true});
window.addEventListener('pointermove',e=>{mvx=e.clientX-mx;mvy=e.clientY-my;mx=e.clientX;my=e.clientY;},{passive:true});
window.addEventListener('pointerleave',()=>{mx=-1e4;my=-1e4;});

const rnd=(a,b)=>a+Math.random()*(b-a);
const ease=t=>t<0?0:t>1?1:t*t*(3-2*t);
const easeOut=t=>1-Math.pow(1-Math.min(Math.max(t,0),1),3);
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const lerp=(a,b,t)=>a+(b-a)*t;

const T={void:0,awaken:300,chaos:1250,formation:3300,pulse:3400,locked:4050,hold:4250,dock:4900};
const DOCK_MS=950;
const navLogo=document.querySelector('.navlogo');
let start=0,paused=false,revealed=false,docked=false,pulseFired=false,ringT=-1;

let dust=[],frags=[];
const N_FRAG=(W*H<600000)?1300:2300, N_DUST=(W*H<600000)?200:380;
function build(){
  dust=[];for(let i=0;i<N_DUST;i++)dust.push({x:rnd(0,W),y:rnd(0,H),r:rnd(.3,1.7),z:rnd(.2,1),a:rnd(.035,.30),tw:rnd(0,6.28),sp:rnd(.0006,.004)*(Math.random()<.5?-1:1),vy:rnd(-.05,-.18),seed:rnd(0,1000)});
  frags=[];const n=Math.min(N_FRAG,TARGETS.length);
  for(let i=0;i<n;i++){const t=TARGETS[(i*7919)%TARGETS.length];const ang=rnd(0,6.28);const orb=rnd(.9,2.4);
    frags.push({tx:t[0],ty:t[1],x:LCX+Math.cos(ang)*orb*S,y:LCY+Math.sin(ang)*orb*S,vx:0,vy:0,ang,orb,asp:rnd(.4,1.6),size:rnd(.7,2.1),blue:Math.random()<.13,seed:rnd(0,1000)});}
}
build();
window.addEventListener('resize',build);

function flow(x,y,t){const s=.0016;return [Math.sin(x*s+t*.6)+Math.cos(y*s*1.3-t*.45),Math.cos(x*s*1.1-t*.5)+Math.sin(y*s-t*.7)];}
function assembly(t){if(t<T.chaos)return 0;if(t>=T.pulse)return 1;return ease((t-T.chaos)/(T.pulse-T.chaos));}
function pulse(){ringT=0;}

function frame(now){
  if(!start)start=now;
  let t=now-start;
  if(paused){requestAnimationFrame(frame);return;}

  const zoomBase=0.84+easeOut(t/T.pulse)*0.16;
  const breathe=(t>=T.hold)?Math.sin((t-T.hold)*0.0011)*0.01:0;
  const zoom=zoomBase+breathe;

  const tt=t*0.001;
  // dock progress (logo flies to header)
  const dp=(t>=T.dock)?clamp((t-T.dock)/DOCK_MS,0,1):0;
  const de=dp*dp*(3-2*dp);

  let clearA = t<T.awaken?0.30 : t<T.chaos?0.20 : t<T.pulse?0.14 : t<T.hold?0.30 : 0.52;
  ctx.globalCompositeOperation='source-over';
  ctx.fillStyle='rgba(8,8,8,'+clearA+')';ctx.fillRect(0,0,W,H);

  // nebula clouds — continuous cosmic wash, drifting + reacting to scroll
  ctx.globalCompositeOperation='lighter';
  for(const nb of nebula){
    const cx=(nb.x+Math.sin(tt*0.05+nb.ph)*0.04)*W + Math.sin(scrollY*0.0006+nb.ph)*34;
    const cy=(nb.y+Math.cos(tt*0.045+nb.ph)*0.04)*H + Math.cos(scrollY*0.0005+nb.ph)*30;
    const r=nb.r*Math.max(W,H);
    const c=nb.col, pulse=nb.a*(0.85+0.15*Math.sin(tt*0.2+nb.ph));
    const g=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
    g.addColorStop(0,'rgba('+c[0]+','+c[1]+','+c[2]+','+pulse+')');
    g.addColorStop(.45,'rgba('+c[0]+','+c[1]+','+c[2]+','+(pulse*.38)+')');
    g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,r,0,6.283);ctx.fill();
  }
  ctx.globalCompositeOperation='source-over';

  const glowAmt=clamp((t-150)/(T.pulse-150),0,1)*(1-de);
  if(glowAmt>0){ctx.globalCompositeOperation='lighter';
    const g=ctx.createRadialGradient(LCX,LCY,0,LCX,LCY,S*2.0);
    const ga=0.05*glowAmt+(t>=T.pulse?0.05*(1-de):0);
    g.addColorStop(0,'rgba(207,209,211,'+(ga*.9)+')');g.addColorStop(.4,'rgba(150,156,164,'+(ga*.4)+')');g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}

  ctx.save();ctx.translate(LCX,LCY);ctx.scale(zoom,zoom);ctx.translate(-LCX,-LCY);
  const a=assembly(t);

  // dust / starfield — parallax with scroll, reacts to cursor
  ctx.globalCompositeOperation='lighter';
  const par=scrollY*0.10;
  for(const d of dust){
    d.tw+=d.sp*16; d.y+=d.vy*d.z; d.x+=Math.sin(tt*.3+d.seed)*.04;
    if(d.y<-5)d.y=H+5;
    let px=d.x, py=((d.y - par*d.z)%H+H)%H;
    // cursor repulsion + glow
    let cb=0;
    if(mx>-9999){const dx=px-mx, dy=py-my, dd=dx*dx+dy*dy;
      if(dd<28000){const f=(1-dd/28000); cb=f*0.5; const inv=f*6/Math.max(40,Math.sqrt(dd)); px+=dx*inv; py+=dy*inv;}}
    const tw=.55+.45*Math.sin(d.tw);
    ctx.fillStyle='rgba(221,222,223,'+(d.a*tw+cb)+')';
    ctx.beginPath();ctx.arc(px,py,d.r*d.z*(1+cb),0,6.283);ctx.fill();
  }

  // fragments
  const heroFade=clamp((t-T.pulse)/(T.locked-T.pulse),0,1);
  const fragDim=(1-heroFade*0.68)*(1-de);
  const stiff=lerp(.012,.16,a)*(t>=T.pulse?1.4:1), damp=lerp(.90,.78,a);
  if(dp<1)for(const f of frags){
    const orbNow=lerp(f.orb,.04,a);
    f.ang+=(.004+f.asp*.006)*(1-a*.6);
    const rgx=LCX+Math.cos(f.ang)*orbNow*S, rgy=LCY+Math.sin(f.ang)*orbNow*S;
    const txp=LCX+f.tx*S, typ=LCY+f.ty*S;
    const gx=lerp(rgx,txp,a), gy=lerp(rgy,typ,a);
    f.vx+=(gx-f.x)*stiff; f.vy+=(gy-f.y)*stiff;
    if(a<.98){const fl=flow(f.x,f.y,tt);const k=(1-a)*.9;f.vx+=fl[0]*k;f.vy+=fl[1]*k;}
    f.vx*=damp;f.vy*=damp;f.x+=f.vx;f.y+=f.vy;
    const sp=Math.hypot(f.vx,f.vy);
    let br=clamp(.25+sp*.05+a*.35,.12,1)*fragDim;
    const col=f.blue?'rgba(207,209,211,'+br+')':'rgba(238,239,240,'+br+')';
    if(sp>1.3&&a<.96){ctx.strokeStyle=f.blue?'rgba(207,209,211,'+(br*.5)+')':'rgba(224,225,226,'+(br*.5)+')';
      ctx.lineWidth=f.size*.9;ctx.beginPath();ctx.moveTo(f.x-f.vx*2.2,f.y-f.vy*2.2);ctx.lineTo(f.x,f.y);ctx.stroke();}
    ctx.fillStyle=col;ctx.beginPath();ctx.arc(f.x,f.y,f.size*(1+a*.2),0,6.283);ctx.fill();
  }
  ctx.restore();

  // energy ring
  if(t>=T.pulse&&!pulseFired){pulseFired=true;pulse();}
  if(ringT>=0){ringT+=16;const p=ringT/520;
    if(p<=1){const rad=easeOut(p)*S*2.6,al=(1-p)*.6;ctx.globalCompositeOperation='lighter';
      ctx.lineWidth=lerp(10,1,p);ctx.strokeStyle='rgba(226,227,228,'+al+')';ctx.beginPath();ctx.arc(LCX,LCY,rad,0,6.283);ctx.stroke();
      ctx.lineWidth=lerp(4,.5,p);ctx.strokeStyle='rgba(255,255,255,'+(al*.8)+')';ctx.beginPath();ctx.arc(LCX,LCY,rad*.7,0,6.283);ctx.stroke();
    }else ringT=-1;}

  // chrome logo: forms in center, then docks into the header
  if(heroReady&&t>=T.pulse){
    // measure the header logo slot live so the landing is pixel-accurate
    const r=navLogo.getBoundingClientRect();
    const navX=r.left+r.width/2, navY=r.top+r.height/2, navS=(r.width||34)/2;
    const cx=lerp(LCX,navX,de), cy=lerp(LCY,navY,de), sCur=lerp(S,navS,de);
    const hb=(t>=T.hold&&dp<0.02)?1+Math.sin((t-T.hold)*0.0013)*0.012:1;
    const hw=2*sCur*(dp>0?1:zoom)*hb, hh=hw/HERO_ASPECT;
    const dw=hw,dh=hh,dx=cx-dw/2,dy=cy-dh/2;
    // visible through the flight, fades out in the last 12% as the crisp header logo appears
    const alpha=heroFade*(dp<0.88?1:clamp(1-(dp-0.88)/0.12,0,1));
    if(alpha>0.004){
      const ow=Math.max(2,Math.round(dw)),oh=Math.max(2,Math.round(dh));
      if(off.width!==ow||off.height!==oh){off.width=ow;off.height=oh;}
      offg.clearRect(0,0,ow,oh);offg.globalCompositeOperation='source-over';offg.drawImage(hero,0,0,ow,oh);
      offg.globalCompositeOperation='source-atop';
      const sweep=((t%2600)/2600),sx=-ow*.4+sweep*ow*1.8;
      const sg=offg.createLinearGradient(sx-ow*.3,0,sx+ow*.3,oh);
      sg.addColorStop(0,'rgba(255,255,255,0)');sg.addColorStop(.5,'rgba(255,255,255,'+(0.32*alpha)+')');sg.addColorStop(1,'rgba(255,255,255,0)');
      offg.fillStyle=sg;offg.fillRect(0,0,ow,oh);
      const rg=offg.createRadialGradient(ow/2,oh/2,oh*.1,ow/2,oh/2,ow*.6);
      rg.addColorStop(0,'rgba(255,255,255,0)');rg.addColorStop(1,'rgba(210,212,214,'+(0.10*alpha)+')');
      offg.fillStyle=rg;offg.fillRect(0,0,ow,oh);offg.globalCompositeOperation='source-over';
      if(de<0.4){ctx.globalCompositeOperation='lighter';ctx.globalAlpha=alpha*.5*(1-de*2.5);
        if('filter' in ctx)ctx.filter='blur('+Math.max(6,S*.05)+'px)';
        ctx.drawImage(off,dx,dy,dw,dh);ctx.filter='none';}
      ctx.globalCompositeOperation='source-over';ctx.globalAlpha=alpha;ctx.drawImage(off,dx,dy,dw,dh);ctx.globalAlpha=1;
    }
  }

  // splash ends -> reveal UI, dock the logo, lift the hero copy, unlock scroll
  if(t>=T.dock&&!docked){docked=true;document.body.classList.add('ready');document.body.classList.add('docked');document.body.classList.remove('intro');}
  // the canvas fades to opacity:0 once docked (see body.docked #c in globals.css) and
  // never shows again, but the loop kept rendering ~4000 particles/gradients forever
  // on every page — stop once the fade-out finishes instead of animating a hidden layer.
  if(t<T.dock+DOCK_MS+500){requestAnimationFrame(frame);}
  else{cv.style.display='none';}
}
requestAnimationFrame(frame);
document.addEventListener('visibilitychange',()=>{paused=document.hidden;});
const navEl=document.querySelector('.nav');
const onScroll=()=>navEl.classList.toggle('scrolled',window.scrollY>12);
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
const skipBtn=document.getElementById('skipIntro');
if(skipBtn)skipBtn.addEventListener('click',function(){
  start=performance.now()-(T.dock+DOCK_MS+60);var _sc=document.getElementById('c');if(_sc){_sc.style.transition='opacity .4s ease';_sc.style.opacity='0';setTimeout(function(){_sc.style.display='none';},460);}
  document.body.classList.add('ready');document.body.classList.add('docked');
  document.body.classList.remove('intro');
});
// ===== homepage interactions: reveals, counters, tilt, neural orb =====
(function(){
  // footer logo + year
  var nl=document.querySelector('.navlogo'), fl=document.querySelector('.footlogo');
  if(fl&&nl)fl.src=nl.src;
  var yr=document.getElementById('yr'); if(yr)yr.textContent=new Date().getFullYear();

  // mobile menu
  var nav=document.querySelector('.nav'), mb=document.querySelector('.menu-btn');
  if(mb)mb.addEventListener('click',function(){nav.classList.toggle('open');});
  document.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});

  // scroll reveals
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:0.16,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal-up').forEach(function(el){io.observe(el);});

  // count-up
  function animCount(el){
    var target=parseFloat(el.getAttribute('data-count'))||0, t0=null, dur=1300;
    function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1); var e=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*e).toString(); if(p<1)requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var cio=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ animCount(e.target); cio.unobserve(e.target); } });
  },{threshold:0.6});
  document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el);});

  // 3D tilt
  document.querySelectorAll('.tilt').forEach(function(card){
    var lift = card.classList.contains('case') ? 0 : -6;
    card.addEventListener('pointermove',function(e){
      var r=card.getBoundingClientRect();
      var rx=((e.clientY-r.top)/r.height-.5)*-9, ry=((e.clientX-r.left)/r.width-.5)*9;
      card.style.transform='perspective(760px) rotateX('+rx+'deg) rotateY('+ry+'deg) translateY('+lift+'px)';
    });
    card.addEventListener('pointerleave',function(){card.style.transform='';});
  });

  // ===== neural network orb =====
  var nc=document.getElementById('neural');
  if(nc){
    var g=nc.getContext('2d'), dpr=Math.min(window.devicePixelRatio||1,2), w=0,h=0, nodes=[], edges=[], pulses=[];
    function sizeN(){ var r=nc.getBoundingClientRect(); w=r.width; h=r.height;
      nc.width=w*dpr; nc.height=h*dpr; g.setTransform(dpr,0,0,dpr,0,0); buildN(); }
    function buildN(){
      nodes=[]; edges=[]; pulses=[];
      var N=14, cx=w/2, cy=h/2, R=Math.min(w,h)*0.40;
      for(var i=0;i<N;i++){ var a=(i/N)*6.283+Math.random()*0.3, rad=R*(0.35+Math.random()*0.65);
        nodes.push({x:cx+Math.cos(a)*rad, y:cy+Math.sin(a)*rad, r:1.6+Math.random()*2.2, ph:Math.random()*6.28}); }
      nodes.push({x:cx,y:cy,r:3.2,ph:0});
      for(var i=0;i<nodes.length;i++)for(var j=i+1;j<nodes.length;j++){
        var dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y, d=Math.hypot(dx,dy);
        if(d<R*0.95 && Math.random()<0.5) edges.push({a:i,b:j}); }
      for(var k=0;k<6;k++)spawn();
    }
    function spawn(){ if(!edges.length)return; var e=edges[(Math.random()*edges.length)|0];
      pulses.push({e:e,t:Math.random(),sp:0.004+Math.random()*0.006}); }
    var t=0, runningN=false, rafN=null;
    function frameN(){
      if(!w){rafN=requestAnimationFrame(frameN);return;}
      g.clearRect(0,0,w,h); t+=0.016;
      // edges
      g.lineWidth=1;
      for(var i=0;i<edges.length;i++){ var A=nodes[edges[i].a], B=nodes[edges[i].b];
        g.strokeStyle='rgba(175,181,189,0.16)'; g.beginPath(); g.moveTo(A.x,A.y); g.lineTo(B.x,B.y); g.stroke(); }
      // pulses
      for(var p=pulses.length-1;p>=0;p--){ var pu=pulses[p], A=nodes[pu.e.a], B=nodes[pu.e.b];
        pu.t+=pu.sp; if(pu.t>=1){ pulses.splice(p,1); spawn(); continue; }
        var x=A.x+(B.x-A.x)*pu.t, y=A.y+(B.y-A.y)*pu.t;
        g.fillStyle='rgba(238,238,239,0.9)'; g.beginPath(); g.arc(x,y,2.2,0,6.283); g.fill();
        g.fillStyle='rgba(238,238,239,0.25)'; g.beginPath(); g.arc(x,y,5,0,6.283); g.fill(); }
      // nodes
      for(var n=0;n<nodes.length;n++){ var nd=nodes[n], tw=0.6+0.4*Math.sin(t*2+nd.ph);
        g.fillStyle='rgba(215,217,219,'+(0.5+tw*0.4)+')'; g.beginPath(); g.arc(nd.x,nd.y,nd.r,0,6.283); g.fill();
        g.fillStyle='rgba(150,156,164,'+(0.18*tw)+')'; g.beginPath(); g.arc(nd.x,nd.y,nd.r*3,0,6.283); g.fill(); }
      if(runningN)rafN=requestAnimationFrame(frameN);
    }
    // pause/resume with visibility instead of running forever once first seen —
    // same animation while on screen, no cost while scrolled away or on another page.
    var builtN=false;
    var nio=new IntersectionObserver(function(es){ es.forEach(function(e){
      if(e.isIntersecting){
        if(!builtN){builtN=true;sizeN();}
        if(!runningN){runningN=true;rafN=requestAnimationFrame(frameN);}
      }else if(runningN){runningN=false;if(rafN)cancelAnimationFrame(rafN);}
    }); });
    nio.observe(nc);
    window.addEventListener('resize',function(){ if(w)sizeN(); });
  }

  // ===== AI agent orbs: eyes track the cursor =====
  var irises=document.querySelectorAll('.orb-iris');
  if(irises.length){
    window.addEventListener('pointermove',function(e){
      for(var i=0;i<irises.length;i++){
        var orb=irises[i].closest('.ai-orb'); if(!orb)continue;
        var r=orb.getBoundingClientRect();
        var dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2);
        var dist=Math.hypot(dx,dy)||1, max=r.width*0.11, f=Math.min(dist,320)/320;
        var ox=(dx/dist)*max*f, oy=(dy/dist)*max*f;
        irises[i].style.transform='translate(calc(-50% + '+ox.toFixed(1)+'px), calc(-50% + '+oy.toFixed(1)+'px))';
      }
    },{passive:true});
  }
})();

// ============ IMMERSIVE FX: meteors + per-page visuals + star cursor ============
(function(){
  function bind(){
    var ring = document.querySelector('.cursor-ring'), dot = document.querySelector('.cursor-dot');
    if(!ring) return;
    var SEL = 'img,.mz-tile,.wrk-gal,.wrk-reel,.fc-visual,.st-visual,video,.lc-item,.av-frame,.member';
    document.addEventListener('mouseover', function(e){
      if(e.target.closest && e.target.closest(SEL)){ ring.classList.add('view'); dot && dot.classList.add('view'); }
    });
    document.addEventListener('mouseout', function(e){
      if(e.target.closest && e.target.closest(SEL)){ ring.classList.remove('view'); dot && dot.classList.remove('view'); }
    });
  }
  if(document.readyState === 'loading') addEventListener('DOMContentLoaded', function(){ setTimeout(bind, 400); });
  else setTimeout(bind, 400);
})();

(function(){
  var RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
  var TOUCH = matchMedia('(hover:none)').matches;
  var SMALL = innerWidth < 760;

  function meteors(){
    var box = document.querySelector('.pf-meteors'); if(!box || box.__m) return; box.__m = 1;
    var n = SMALL ? 12 : 22;
    for(var i=0;i<n;i++){
      var m = document.createElement('span'); m.className = 'mote';
      var depth = Math.random();                          // 0 far .. 1 near (3D depth)
      var sz = (9 + depth*24).toFixed(1);                  // 2–8px
      m.style.width = sz + 'px'; m.style.height = sz + 'px';
      m.style.top  = (Math.random()*100) + '%';
      m.style.left = (Math.random()*100) + '%';
      m.style.setProperty('--bl', (1.8 - depth*1.3).toFixed(2) + 'px');  // far = blurrier
      m.style.setProperty('--o',  (0.25 + depth*0.55).toFixed(2));       // near = brighter
      m.style.setProperty('--dx', ((Math.random()-0.5)*26).toFixed(1) + 'px');
      m.style.setProperty('--dy', (-14 - depth*34).toFixed(1) + 'px');   // near drifts more
      m.style.setProperty('--d', (7 + Math.random()*7) + 's');
      m.style.setProperty('--delay', (-Math.random()*8) + 's');
      box.appendChild(m);
    }
  }
  function stars(){
    var box = document.querySelector('.pf-stars'); if(!box || box.__s) return; box.__s = 1;
    var n = SMALL ? 44 : 92;
    for(var i=0;i<n;i++){
      var s = document.createElement('i');
      if(Math.random() < 0.16) s.className = 'big';
      s.style.top  = (Math.random()*100) + '%';
      s.style.left = (Math.random()*100) + '%';
      s.style.setProperty('--d', (2 + Math.random()*4) + 's');
      s.style.setProperty('--delay', (Math.random()*5) + 's');
      box.appendChild(s);
    }
  }
  function buildVisuals(){ if(RM) return; meteors(); stars(); }
  window.__buildVisuals = buildVisuals;

  function trail(){
    if(RM || TOUCH) return;
    var glyphs = ['✦','✧','⋆','✦','✧','⋆','✦','✧','·'];
    var pts = [];
    for(var i=0;i<glyphs.length;i++){
      var el = document.createElement('span'); el.className = 'star-trail'; el.textContent = glyphs[i];
      el.style.fontSize = Math.max(6, 16 - i*1.3) + 'px';
      document.body.appendChild(el);
      pts.push({el:el, x:innerWidth/2, y:innerHeight/2});
    }
    var mx = innerWidth/2, my = innerHeight/2, active = false;
    addEventListener('pointermove', function(e){ mx = e.clientX; my = e.clientY; active = true; }, {passive:true});
    function loop(){
      requestAnimationFrame(loop);
      var px = mx, py = my;
      for(var i=0;i<pts.length;i++){
        var st = pts[i], ease = 0.34 - i*0.02;
        st.x += (px - st.x) * ease; st.y += (py - st.y) * ease;
        st.el.style.transform = 'translate(' + st.x + 'px,' + st.y + 'px) translate(-50%,-50%)';
        st.el.style.opacity = active ? String(Math.max(0, 0.9 - i*0.1)) : '0';
        px = st.x; py = st.y;
      }
    }
    loop();
  }

  function parallax(){
    if(RM) return;
    var mtr = document.querySelector('.pf-meteors'), str = document.querySelector('.pf-stars');
    var sy = 0, tick = false;
    function apply(){ tick = false;
      if(mtr) mtr.style.transform = 'translate3d(0,' + (sy*0.62) + 'px,0)';
      if(str) str.style.transform = 'translate3d(0,' + (sy*0.05) + 'px,0)';
    }
    addEventListener('scroll', function(){ sy = window.pageYOffset || 0; if(!tick){ requestAnimationFrame(apply); tick = true; } }, {passive:true});
    apply();
  }

  function boot(){ buildVisuals(); trail(); parallax(); }
  if(document.readyState === 'loading') addEventListener('DOMContentLoaded', boot);
  else boot();
})();

// ===== contact modal: every CTA that points at #contact opens this instead of scrolling =====
(function(){
  var modal = document.getElementById('contactModal');
  if(!modal) return;
  var lastFocus = null;

  function openModal(){
    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cmodal-lock');
    var first = modal.querySelector('input[name="name"]');
    if(first) setTimeout(function(){ first.focus(); }, 60);
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cmodal-lock');
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }
  window.__openContactModal = openModal;
  window.__closeContactModalDelayed = function(){ setTimeout(closeModal, 2400); };

  modal.querySelectorAll('[data-cmodal-close]').forEach(function(el){
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
  // every "Book a Free Call" / service CTA in the app is a <Link to="/#contact">,
  // which renders as <a href="/#contact">. React Router's own click handler is
  // bound in the bubble phase, so a bubble-phase listener here would fire too
  // late to stop it — capture the click first, in the capture phase, and stop
  // it from ever reaching the router.
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href="/#contact"], a[href="#contact"]');
    if(!a) return;
    e.preventDefault();
    e.stopPropagation();
    openModal();
  }, true);

  // footer email pill: carry the typed email into the lead form, then open the modal
  document.addEventListener('submit', function(e){
    var f = e.target.closest && e.target.closest('#footSub');
    if(!f) return;
    e.preventDefault();
    var v = f.elements['footEmail'].value.trim();
    if(v && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ f.classList.add('invalid'); return; }
    f.classList.remove('invalid');
    var lead = document.getElementById('leadForm');
    if(lead && v) lead.elements['email'].value = v;
    openModal();
  });
})();

(function(){
  function bind(){
    var f = document.getElementById('leadForm'); if(!f) return;
    var note = document.getElementById('cformNote');
    var mobileEl = f.elements['mobile'];
    if(mobileEl) mobileEl.addEventListener('input', function(){
      mobileEl.value = mobileEl.value.replace(/\D/g,'').slice(0,10);
    });
    f.addEventListener('submit', function(e){
      e.preventDefault(); var ok = true;
      ['name','email','mobile','message'].forEach(function(k){
        var el = f.elements[k], field = el.closest('.cfield');
        if(!el.value.trim()){ field.classList.add('invalid'); ok = false; } else field.classList.remove('invalid');
      });
      var email = f.elements['email'];
      if(email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){ email.closest('.cfield').classList.add('invalid'); ok = false; }
      var mobile = f.elements['mobile'];
      if(mobile.value && !/^\d{10}$/.test(mobile.value)){ mobile.closest('.cfield').classList.add('invalid'); ok = false; }
      if(!ok){ note.textContent = 'Please fill the required fields — mobile number needs exactly 10 digits.'; note.classList.remove('ok'); return; }

      var submitBtn = f.querySelector('button[type="submit"]');
      var oldTxt = submitBtn.textContent;
      submitBtn.disabled = true; submitBtn.textContent = 'Sending…';
      note.textContent = ''; note.classList.remove('ok');

      var dial = f.elements['countryDial'] ? f.elements['countryDial'].value : '';

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Contact Form',
          nameOrBrand: f.elements['name'].value,
          email: f.elements['email'].value,
          phone: (dial ? dial + ' ' : '') + f.elements['mobile'].value,
          brandOrWebsite: f.elements['brand'].value,
          message: f.elements['message'].value,
          pageUrl: window.location.href
        })
      }).then(function(res){
        if(!res.ok) throw new Error('request failed');
        f.reset();
        note.textContent = "Thanks — we've got your details and will be in touch shortly.";
        note.classList.add('ok');
        if(window.__closeContactModalDelayed) window.__closeContactModalDelayed();
      }).catch(function(){
        note.textContent = 'Something went wrong sending that — please try again.';
        note.classList.remove('ok');
      }).finally(function(){
        submitBtn.disabled = false; submitBtn.textContent = oldTxt;
      });
    });
  }
  if(document.readyState === 'loading') addEventListener('DOMContentLoaded', bind);
  else bind();
})();

(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var started = false;
  var evs = ['pointerdown','pointermove','keydown','touchstart','click','wheel','scroll'];
  function cleanup(){ evs.forEach(function(ev){ removeEventListener(ev, onGesture, true); }); }
  function play(){
    if(started) return;
    var intro = document.body.classList.contains('intro') || performance.now() < 9000;
    if(!intro){ cleanup(); return; }
    started = true; cleanup();
    var AC = window.AudioContext || window.webkitAudioContext; if(!AC) return;
    var ctx; try{ ctx = new AC(); }catch(e){ return; }
    if(ctx.state === 'suspended' && ctx.resume) ctx.resume();
    var t = ctx.currentTime;
    var master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 0.7; lp.connect(master);
    lp.frequency.setValueAtTime(500, t); lp.frequency.exponentialRampToValueAtTime(3200, t+4.5);
    // deep cosmic drone (detuned harmonics)
    [55, 110, 164.81, 220].forEach(function(f, i){
      var o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      o.detune.value = (Math.random()-0.5) * 9;
      var g = ctx.createGain(); g.gain.value = [0.5,0.32,0.2,0.12][i];
      o.connect(g); g.connect(lp); o.start(t); o.stop(t+7.6);
    });
    // rising shimmer ("universe" swell)
    var sh = ctx.createOscillator(); sh.type = 'triangle';
    sh.frequency.setValueAtTime(440, t); sh.frequency.exponentialRampToValueAtTime(1320, t+5);
    var sg = ctx.createGain(); sg.gain.value = 0.05; sh.connect(sg); sg.connect(lp); sh.start(t); sh.stop(t+6.5);
    // master envelope: swell → sustain → fade
    master.gain.setValueAtTime(0, t);
    master.gain.linearRampToValueAtTime(0.3, t+1.4);
    master.gain.setValueAtTime(0.3, t+4);
    master.gain.linearRampToValueAtTime(0.0001, t+7.5);
    setTimeout(function(){ try{ ctx.close(); }catch(e){} }, 8300);
  }
  function onGesture(){ play(); }
  evs.forEach(function(ev){ addEventListener(ev, onGesture, {capture:true, passive:true}); });
  addEventListener('load', function(){ setTimeout(function(){
    if(started) return;
    var AC = window.AudioContext || window.webkitAudioContext; if(!AC) return;
    try{ var c = new AC(); if(c.state === 'running'){ c.close(); play(); } else { c.close(); } }catch(e){}
  }, 300); });
})();

/* ============================================================
   INLOOP — UPGRADE LAYER JS  (shared by home + service pages)
   Self-contained, dependency-light. GSAP optional (degrades gracefully).
   ============================================================ */
(function(){
  "use strict";
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TOUCH = window.matchMedia && window.matchMedia('(hover: none)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';
  var ST = hasGSAP && window.ScrollTrigger;
  if (hasGSAP && ST) { try { gsap.registerPlugin(ScrollTrigger); } catch(e){} }

  /* ---------------------------------------------------------
     1. SERVICES MEGA DROPDOWN  (hover desktop · click everywhere)
  --------------------------------------------------------- */
  function initDropdown(){
    var item = document.querySelector('.nav-item');
    if(!item) return;
    var trigger = item.querySelector('a.has');
    var mega = item.querySelector('.mega');
    if(!trigger || !mega) return;
    var links = mega.querySelectorAll('.mega-link');
    var openTL = null, closeTimer = null;

    function buildOpenTL(){
      if(!hasGSAP) return null;
      var tl = gsap.timeline({paused:true});
      tl.fromTo(mega,{y:14,opacity:0,scale:.98},
        {y:0,opacity:1,scale:1,duration:.42,ease:'power3.out'});
      tl.fromTo(links,{y:12,opacity:0,filter:'blur(6px)'},
        {y:0,opacity:1,filter:'blur(0px)',duration:.45,stagger:.045,ease:'power3.out'},'-=0.26');
      return tl;
    }

    function open(){
      if(closeTimer){clearTimeout(closeTimer);closeTimer=null;}
      if(item.classList.contains('open')) return;
      item.classList.add('open');
      trigger.setAttribute('aria-expanded','true');
      if(RM || window.innerWidth<=760) return;          // CSS handles static reveal
      if(!openTL) openTL = buildOpenTL();
      if(openTL){ openTL.timeScale(1).play(0); }
    }
    function close(){
      if(!item.classList.contains('open')) return;
      var finish=function(){ item.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); };
      if(RM || window.innerWidth<=760 || !openTL){ finish(); return; }
      gsap.to(mega,{y:10,opacity:0,duration:.22,ease:'power2.in',onComplete:finish});
    }

    // desktop hover
    if(!TOUCH){
      item.addEventListener('mouseenter',function(){ if(window.innerWidth>760) open(); });
      item.addEventListener('mouseleave',function(){ if(window.innerWidth>760){ closeTimer=setTimeout(close,140);} });
    }
    // click / tap toggles (and is the only behaviour on mobile)
    trigger.addEventListener('click',function(e){
      e.preventDefault();
      item.classList.contains('open') ? close() : open();
    });
    // close on outside click / Esc
    document.addEventListener('click',function(e){ if(!item.contains(e.target)) close(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });

    // per-link glow that follows the cursor
    links.forEach(function(l){
      l.addEventListener('pointermove',function(e){
        var r=l.getBoundingClientRect();
        l.style.setProperty('--mx',(e.clientX-r.left)+'px');
        l.style.setProperty('--my',(e.clientY-r.top)+'px');
      });
    });
    trigger.setAttribute('aria-haspopup','true');
    trigger.setAttribute('aria-expanded','false');
  }

  /* ---------------------------------------------------------
     2. PAGE TRANSITIONS  (wipe out → navigate → wipe in)
  --------------------------------------------------------- */
  function initTransitions(){
    if(RM) return; // respect reduced motion — just navigate normally
    var ov = document.querySelector('.pt-overlay');
    if(!ov) return;
    var mark = ov.querySelector('.pt-mark');
    var bar  = ov.querySelector('.pt-bar');

    // --- arrival: if we came through a transition, reveal from cover ---
    if(sessionStorage.getItem('pt-go')==='1'){
      sessionStorage.removeItem('pt-go');
      if(hasGSAP){
        gsap.set(ov,{clipPath:'inset(0 0 0% 0)'});         // fully covering
        gsap.set(mark,{opacity:1,y:0});
        var tl=gsap.timeline({delay:.05});
        tl.to(bar,{width:'100%',duration:.5,ease:'power2.inOut'},0);
        tl.to(mark,{opacity:0,y:-6,duration:.3,ease:'power2.in'},.35);
        tl.to(ov,{clipPath:'inset(0 0 100% 0)',duration:.6,ease:'power4.inOut'},.45);
        tl.set(ov,{pointerEvents:'none'});
        // content fade-in
        gsap.fromTo('.pt-fade',{y:18,opacity:0,filter:'blur(6px)'},
          {y:0,opacity:1,filter:'blur(0px)',duration:.7,stagger:.07,ease:'power3.out',delay:.5});
      }
    }

    function leave(href){
      sessionStorage.setItem('pt-go','1');
      if(!hasGSAP){ window.location.href=href; return; }
      ov.classList.add('show');
      var tl=gsap.timeline({onComplete:function(){ window.location.href=href; }});
      gsap.set(ov,{clipPath:'inset(100% 0 0 0)'});         // start collapsed at bottom
      tl.to(ov,{clipPath:'inset(0% 0 0 0)',duration:.5,ease:'power4.inOut'},0);
      tl.fromTo(mark,{opacity:0,y:8},{opacity:1,y:0,duration:.3,ease:'power2.out'},.18);
      tl.fromTo(bar,{width:'0%'},{width:'70%',duration:.5,ease:'power1.inOut'},0);
    }

    // intercept same-site navigations to .html pages
    document.addEventListener('click',function(e){
      var a=e.target.closest('a');
      if(!a) return;
      var href=a.getAttribute('href');
      if(!href) return;
      if(a.target==='_blank' || a.hasAttribute('download')) return;
      if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0) return;
      if(/^(https?:)?\/\//i.test(href) && a.host!==location.host) return; // external
      if(href.charAt(0)==='#' || href.indexOf('mailto:')===0 || href.indexOf('tel:')===0) return;
      if(href.indexOf('.html')===-1 && href!=='/' ) return;               // only page nav
      e.preventDefault();
      leave(href);
    });
  }

  /* ---------------------------------------------------------
     3. MAGNETIC ELEMENTS
  --------------------------------------------------------- */
  function initMagnetic(){
    if(RM||TOUCH) return;
    var els=document.querySelectorAll('.magnetic');
    els.forEach(function(el){
      var strength=parseFloat(el.getAttribute('data-mag'))||0.35;
      el.addEventListener('pointermove',function(e){
        var r=el.getBoundingClientRect();
        var x=(e.clientX-(r.left+r.width/2))*strength;
        var y=(e.clientY-(r.top+r.height/2))*strength;
        if(hasGSAP) gsap.to(el,{x:x,y:y,duration:.4,ease:'power3.out'});
        else el.style.transform='translate('+x+'px,'+y+'px)';
      });
      el.addEventListener('pointerleave',function(){
        if(hasGSAP) gsap.to(el,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'});
        else el.style.transform='';
      });
    });
  }

  /* ---------------------------------------------------------
     4. CUSTOM CURSOR
  --------------------------------------------------------- */
  function initCursor(){
    if(RM||TOUCH) return;
    var dot=document.createElement('div'); dot.className='cursor-dot';
    var ring=document.createElement('div'); ring.className='cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.body.classList.add('has-cursor');
    var mx=window.innerWidth/2,my=window.innerHeight/2,rx=mx,ry=my;
    var pmx=mx,pmy=my;
    window.addEventListener('pointermove',function(e){
      mx=e.clientX;my=e.clientY;
      dot.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)';
    },{passive:true});

    /* press feedback + click pulse ring */
    window.addEventListener('pointerdown',function(e){
      document.body.classList.add('cursor-press');
      var p=document.createElement('div'); p.className='cursor-pulse';
      p.style.left=e.clientX+'px'; p.style.top=e.clientY+'px';
      document.body.appendChild(p);
      setTimeout(function(){ if(p.parentNode) p.parentNode.removeChild(p); },600);
    },{passive:true});
    window.addEventListener('pointerup',function(){ document.body.classList.remove('cursor-press'); },{passive:true});
    window.addEventListener('blur',function(){ document.body.classList.remove('cursor-press'); });

    /* hide cursor when pointer leaves the window */
    document.addEventListener('mouseleave',function(){ dot.style.opacity='0'; ring.style.opacity='0'; });
    document.addEventListener('mouseenter',function(){ if(!activeEl) dot.style.opacity='1'; ring.style.opacity='1'; });

    /* magnet targets */
    var SMALL='a,button,.btn,.wk-chip2,.mega-link,.tool,.chip,[data-cursor]';       // snap + wrap
    var BIG='.wk-cr-card,.wk-shot,.svc,.member,.st-visual,.fc-visual';               // just enlarge, follow
    var HOT=SMALL+','+BIG;
    var activeEl=null, mode=null;   // mode: 'lock' (wrap small) | 'big' (enlarge)

    function enter(el){
      if(el===activeEl) return;
      var r=el.getBoundingClientRect();
      /* yellow-outline lock removed: small interactive elements keep the normal cursor */
      if(el.matches(SMALL) && r.width<=320 && r.height<=120){
        activeEl=null; mode=null;
        ring.classList.remove('lock'); ring.classList.remove('big');
        ring.style.width=''; ring.style.height=''; ring.style.borderRadius='';
        dot.style.opacity='';
        return;
      }
      activeEl=el;
      mode='big';
      ring.classList.add('big'); ring.classList.remove('lock');
      ring.style.width=''; ring.style.height=''; ring.style.borderRadius='';
      dot.style.opacity='0';
    }
    function clear(){
      activeEl=null; mode=null;
      ring.classList.remove('lock'); ring.classList.remove('big');
      ring.style.width=''; ring.style.height=''; ring.style.borderRadius='';
      dot.style.opacity='1';
    }
    document.addEventListener('pointerover',function(e){
      var el=e.target.closest && e.target.closest(HOT);
      if(el) enter(el);
    });

    function loop(){
      var tx=mx, ty=my;
      if(activeEl){
        if(!document.body.contains(activeEl)){ clear(); }
        else {
          var r=activeEl.getBoundingClientRect(), m=16;
          var inside = mx>=r.left-m && mx<=r.right+m && my>=r.top-m && my<=r.bottom+m;
          if(!inside){ clear(); }
          else if(mode==='lock'){ tx=r.left+r.width/2; ty=r.top+r.height/2; }
        }
      }
      rx+=(tx-rx)*.24; ry+=(ty-ry)*.24;
      /* velocity-based liquid squash — ring stretches along movement direction */
      var vx=mx-pmx, vy=my-pmy; pmx=mx; pmy=my;
      var sp=Math.min(Math.sqrt(vx*vx+vy*vy),40);
      var st=1+sp*0.006, sq=1-sp*0.004;
      var ang=(sp>2)?Math.atan2(vy,vx)*180/Math.PI:0;
      ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%) rotate('+ang+'deg) scale('+st+','+sq+') rotate('+(-ang)+'deg)';
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  /* ---------------------------------------------------------
     5. SCROLL PROGRESS RAIL
  --------------------------------------------------------- */
  function initProgress(){
    var bar=document.querySelector('.scroll-prog');
    if(!bar) return;
    function upd(){
      var h=document.documentElement;
      var p=h.scrollTop/((h.scrollHeight-h.clientHeight)||1);
      bar.style.transform='scaleX('+Math.min(Math.max(p,0),1)+')';
    }
    window.addEventListener('scroll',upd,{passive:true});
    window.addEventListener('resize',upd); upd();
  }

  /* ---------------------------------------------------------
     6. FLOATING PARTICLES
  --------------------------------------------------------- */
  function initParticles(){
    if(RM) return;
    document.querySelectorAll('.float-particles').forEach(function(box){
      var n=parseInt(box.getAttribute('data-n'),10)|| (window.innerWidth<700?12:22);
      for(var i=0;i<n;i++){
        var s=document.createElement('i');
        var size=(Math.random()*2.5+1.2).toFixed(1);
        s.style.left=(Math.random()*100)+'%';
        s.style.top=(Math.random()*100)+'%';
        s.style.width=size+'px'; s.style.height=size+'px';
        s.style.animationDuration=(Math.random()*9+8).toFixed(1)+'s';
        s.style.animationDelay=(-Math.random()*12).toFixed(1)+'s';
        box.appendChild(s);
      }
    });
  }

  /* ---------------------------------------------------------
     7. GSAP SCROLLTRIGGER  (parallax + optional reveal)
        - [data-gs]        : reveal on scroll (service pages)
        - [data-parallax]  : subtle parallax drift (value = strength)
  --------------------------------------------------------- */
  function initScroll(){
    if(!hasGSAP||!ST) return;
    if(!RM){
      gsap.utils.toArray('[data-gs]').forEach(function(el){
        var d=parseFloat(el.getAttribute('data-gs'))||0;
        gsap.fromTo(el,{y:34,opacity:0,filter:'blur(8px)'},{
          y:0,opacity:1,filter:'blur(0px)',duration:.9,delay:d,ease:'power3.out',
          scrollTrigger:{trigger:el,start:'top 86%',toggleActions:'play none none none'}
        });
      });
      gsap.utils.toArray('[data-gs-stagger]').forEach(function(group){
        var kids=group.children;
        gsap.fromTo(kids,{y:30,opacity:0,filter:'blur(6px)'},{
          y:0,opacity:1,filter:'blur(0px)',duration:.8,stagger:.09,ease:'power3.out',
          scrollTrigger:{trigger:group,start:'top 84%'}
        });
      });
      gsap.utils.toArray('[data-parallax]').forEach(function(el){
        var amt=parseFloat(el.getAttribute('data-parallax'))||20;
        gsap.to(el,{yPercent:amt,ease:'none',
          scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}});
      });
    } else {
      // reduced motion: reveal instantly
      document.querySelectorAll('[data-gs]').forEach(function(el){el.style.opacity=1;el.style.filter='none';el.style.transform='none';});
      document.querySelectorAll('[data-gs-stagger] > *').forEach(function(el){el.style.opacity=1;});
    }
  }

  /* ---------- boot ---------- */
  function boot(){
    initDropdown();
    // initTransitions(); // removed: full-page GSAP wipe replaced by the React Router transition bridge in Layout.jsx
    initMagnetic();
    initCursor();
    initProgress();
    initParticles();
    initScroll();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();

(function(){
  var RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(RM || !('IntersectionObserver' in window)){
    document.querySelectorAll('.anim-rise').forEach(function(el){ el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(en){
      if(!en.isIntersecting) return;
      var el = en.target, p = el.parentNode, i = 0;
      if(p){ var sib = p.children, k = 0;
        for(var j=0;j<sib.length;j++){ if(sib[j].classList && sib[j].classList.contains('anim-rise')){ if(sib[j]===el){ i=k; break; } k++; } } }
      el.style.transitionDelay = Math.min(i,10)*55 + 'ms';
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, {threshold:0.05, rootMargin:'0px 0px -5% 0px'});
  function bind(){ document.querySelectorAll('.anim-rise:not(.is-in)').forEach(function(el){ io.observe(el); }); }
  window.__animBind = bind;
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();

(function(){
  var RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
  // ---- count up ----
  function countUp(el){
    var raw = el.getAttribute('data-count'); var target = parseFloat(raw);
    var pre = el.getAttribute('data-pre')||''; var suf = el.getAttribute('data-suf')||'';
    var dec = raw.indexOf('.')>=0 ? 1 : 0;
    if(RM){ el.textContent = pre + (dec?target.toFixed(1):target) + suf; return; }
    var dur = 1500, t0 = null;
    function step(ts){ if(!t0) t0 = ts; var p = Math.min((ts-t0)/dur,1); var ev = 1-Math.pow(1-p,3);
      el.textContent = pre + (target*ev).toFixed(dec) + suf;
      if(p<1) requestAnimationFrame(step); else el.textContent = pre + (dec?target.toFixed(1):target) + suf; }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window){
    var cio = new IntersectionObserver(function(es){ es.forEach(function(en){
      if(en.isIntersecting){ countUp(en.target); cio.unobserve(en.target); } }); }, {threshold:.4});
    window.__countBind = function(){ document.querySelectorAll('[data-count]').forEach(function(el){
      if(!el.__c){ el.__c = 1; cio.observe(el); } }); };
    window.__countBind();
  } else {
    document.querySelectorAll('[data-count]').forEach(function(el){ countUp(el); });
  }
  // ---- portfolio filter ----
  document.addEventListener('click', function(e){
    var b = e.target.closest('.wrk2-filter button[data-f]'); if(!b) return;
    var bar = b.parentNode; bar.querySelectorAll('button').forEach(function(x){ x.classList.remove('on'); });
    b.classList.add('on'); var f = b.getAttribute('data-f');
    document.querySelectorAll('.mz-tile').forEach(function(t){
      var show = (f==='all' || t.getAttribute('data-cat')===f);
      t.classList.toggle('mz-hide', !show);
    });
  });
  // ---- before/after slider ----
  function initBA(){
    document.querySelectorAll('.ba').forEach(function(ba){
      if(ba.__init) return; ba.__init = 1;
      var top = ba.querySelector('.ba-top'), h = ba.querySelector('.ba-handle'), drag = false;
      function setP(clientX){ var r = ba.getBoundingClientRect(); if(!r.width) return;
        var p = Math.max(0, Math.min(1, (clientX - r.left)/r.width));
        top.style.clipPath = 'inset(0 ' + ((1-p)*100) + '% 0 0)'; h.style.left = (p*100)+'%'; }
      ba.addEventListener('pointerdown', function(e){ drag = true; ba.setPointerCapture(e.pointerId); setP(e.clientX); });
      ba.addEventListener('pointermove', function(e){ if(drag) setP(e.clientX); });
      ba.addEventListener('pointerup', function(){ drag = false; });
      ba.addEventListener('pointercancel', function(){ drag = false; });
      top.style.clipPath = 'inset(0 50% 0 0)'; h.style.left = '50%';
    });
  }
  initBA(); window.__baInit = initBA;
})();


(function(){
  var sec=document.getElementById('ads'); if(sec){
    var chips=sec.querySelectorAll('.adx-chip'), cards=sec.querySelectorAll('.adx-card');
    chips.forEach(function(c){ c.addEventListener('click',function(){
      chips.forEach(function(x){x.classList.remove('active')}); c.classList.add('active');
      var f=c.getAttribute('data-f');
      cards.forEach(function(card){ card.style.display=(f==='all'||card.getAttribute('data-p')===f)?'':'none'; });
    }); });
  }
  var pl=document.getElementById('aivPlayer'); if(pl){
    pl.addEventListener('click',function(){ var b=pl.querySelector('.aiv-play'); if(b){ b.style.transform='scale(.9)'; setTimeout(function(){b.style.transform='';},160);} });
  }
})();
(function(){
  var SERVICES=[
    {slug:'all',name:'All',desc:'A cross-section of our best work \u2014 across brand, social, web, content, creators and performance.',deliv:['Strategy','Creative','Growth']},
    {slug:'branding',name:'Branding',desc:'We shape how your brand looks, feels, and stays remembered.',deliv:['Brand strategy','Visual identity','Packaging & positioning']},
    {slug:'design',name:'Design',desc:'Design that earns attention and carries the message in a single glance.',deliv:['Key visuals','Campaign creative','Design systems']},
    {slug:'social',name:'Social Media',desc:'Feeds engineered to compound attention into community and sales.',deliv:['Content engine','Grid & stories','Community growth']},
    {slug:'web',name:'Web Development',desc:'Fast, conversion-first sites and stores that practically book themselves.',deliv:['Website & UX','D2C storefronts','Landing systems']},
    {slug:'content',name:'Content Production',desc:'Scroll-stopping reels, films and product content, produced at scale.',deliv:['Reels & films','Product shoots','Post production']},
    {slug:'influencer',name:'Influencer Marketing',desc:'Creators matched to your brand for reach that actually converts.',deliv:['Creator sourcing','UGC campaigns','Collab management']},
    {slug:'performance',name:'Performance Marketing',desc:'Spend that compounds \u2014 creative testing and media that scales ROAS.',deliv:['Paid media','Creative testing','CRO & scaling']}
  ];
  // image: set to a real URL later to replace the placeholder. logo/img/g are built-in visuals.
  var CREATIVES=[
    {category:'branding',title:'Garnier Brand System',type:'Brand Identity',logo:'cl-garnier',image:''},
    {category:'branding',title:'Da Luxera Identity',type:'Visual Identity',logo:'cl-daluxera',image:''},
    {category:'branding',title:'Skin Lattice Rebrand',type:'Brand System',logo:'cl-skinlattice',image:''},
    {category:'branding',title:'Vivel Packaging',type:'Packaging',logo:'cl-vivel',image:''},
    {category:'design',title:'Campaign Key Visual',type:'Key Visual',g:1,image:''},
    {category:'design',title:'Poster Series',type:'Campaign Creative',g:2,image:''},
    {category:'design',title:'Festive Creative',type:'Social Creative',g:3,image:''},
    {category:'social',title:'Instagram Grid',type:'Social Post',img:'ad-9',image:''},
    {category:'social',title:'Story Set',type:'Social Media',img:'ad-4',image:''},
    {category:'social',title:'Reel Covers',type:'Social Post',g:4,image:''},
    {category:'web',title:'D2C Storefront',type:'Web Design',g:5,image:''},
    {category:'web',title:'Landing System',type:'Website UI',g:6,image:''},
    {category:'web',title:'Booking App UI',type:'Web Design',g:7,image:''},
    {category:'content',title:'Product Reel',type:'Content Production',g:8,image:''},
    {category:'content',title:'Brand Film',type:'Content Production',g:1,image:''},
    {category:'content',title:'Motion Set',type:'Content Production',g:2,image:''},
    {category:'influencer',title:'Creator Campaign',type:'Influencer Campaign',g:3,image:''},
    {category:'influencer',title:'UGC Set',type:'UGC Campaign',g:4,image:''},
    {category:'influencer',title:'Collab Reel',type:'Influencer Campaign',g:5,image:''},
    {category:'performance',title:'Google Ads Creative',type:'Performance Ad',img:'ad-1',image:''},
    {category:'performance',title:'Search Campaign',type:'Performance Ad',img:'ad-2',image:''},
    {category:'performance',title:'Meta Conversion Set',type:'Ad Creative',img:'ad-5',image:''},
    {category:'performance',title:'Display Ad',type:'Performance Ad',img:'ad-7',image:''},
    {category:'performance',title:'Native Ad',type:'Ad Creative',img:'ad-8',image:''}
  ];
  function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  function inner(c){
    if(c.image) return '<div class="wk-cr-shot" style="background-image:url('+c.image+')"></div>';
    return '<div class="wk-cr-blank"><span class="cm cm1"></span><span class="cm cm2"></span><span class="cm cm3"></span><span class="cm cm4"></span><span class="wk-cr-wm">\u221e</span></div>';
  }
  function card(c){
    return '<article class="wk-cr-card" data-cat="'+c.category+'"><div class="wk-cr-frame">'+
      inner(c)+'<span class="wk-cr-grid"></span><span class="wk-cr-sheen"></span>'+
      '<span class="wk-cr-tag">'+esc(c.type)+'</span>'+
      '<div class="wk-cr-meta"><b>'+esc(c.title)+'</b></div></div></article>';
  }
  function init(){
    var chips=document.getElementById('wkChips'), intro=document.getElementById('wkIntro'),
        cr=document.getElementById('wkCr'), track=document.getElementById('wkCrTrack');
    if(!chips||!track) return;
    chips.innerHTML=SERVICES.map(function(s){return '<button class="wk-chip2'+(s.slug==='all'?' on':'')+'" data-slug="'+s.slug+'">'+s.name+'</button>';}).join('');
    function build(slug){
      var list=CREATIVES.filter(function(c){return slug==='all'||c.category===slug;});
      var html=list.map(card).join('');
      track.innerHTML=html+html; cr.scrollLeft=0;
    }
    function setS(slug){
      [].forEach.call(chips.children,function(b){b.classList.toggle('on',b.getAttribute('data-slug')===slug);});
      var s=SERVICES.filter(function(x){return x.slug===slug;})[0]||SERVICES[0];
      intro.innerHTML='<div class="wk-intro-l"><span class="wk-intro-tag">'+s.name+'</span><p>'+s.desc+'</p>'+
        '<div class="wk-deliv">'+s.deliv.map(function(d){return '<span><i></i>'+d+'</span>';}).join('')+'</div></div>'+
        '<a class="wk-explore" href="#/portfolio">Explore work <em>&#8599;</em></a>';
      build(slug);
    }
    chips.addEventListener('click',function(e){var b=e.target.closest('.wk-chip2');if(b)setS(b.getAttribute('data-slug'));});
    setS('all');
    // auto-scroll + drag + pause
    var paused=false,dragging=false,sx=0,sl=0;
    function speed(){return window.innerWidth<760?0.42:0.85;}
    function tick(){
      var half=track.scrollWidth/2;
      if(!paused&&!dragging&&half>0) cr.scrollLeft+=speed();
      if(half>0){ if(cr.scrollLeft>=half) cr.scrollLeft-=half; else if(cr.scrollLeft<0) cr.scrollLeft+=half; }
      requestAnimationFrame(tick);
    }
    cr.addEventListener('pointerenter',function(){paused=true;});
    cr.addEventListener('pointerleave',function(){paused=false;dragging=false;cr.classList.remove('grabbing');});
    cr.addEventListener('pointerdown',function(e){dragging=true;sx=e.clientX;sl=cr.scrollLeft;cr.classList.add('grabbing');try{cr.setPointerCapture(e.pointerId);}catch(_){}}); 
    cr.addEventListener('pointermove',function(e){if(!dragging)return;cr.scrollLeft=sl-(e.clientX-sx);});
    function endDrag(){dragging=false;cr.classList.remove('grabbing');}
    cr.addEventListener('pointerup',endDrag); cr.addEventListener('pointercancel',endDrag);
    requestAnimationFrame(tick);
  }
  if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded',init);
})();
(function(){
  function init(){
    var list=document.getElementById('csList'); if(!list) return;
    var rows=[].slice.call(list.querySelectorAll('.cs-row'));
    if(!rows.length) return;
    var RM=window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    var TOUCH=window.matchMedia && window.matchMedia('(hover:none)').matches;

    /* ---- reveal on scroll, staggered ---- */
    function reveal(el){ if(el.classList.contains('in'))return; var i=rows.indexOf(el); el.style.transitionDelay=(Math.max(0,i)*85)+'ms'; el.classList.add('in'); }
    if('IntersectionObserver' in window && !RM){
      var io=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ reveal(e.target); io.unobserve(e.target);} });
      },{threshold:.18, rootMargin:'0px 0px -6% 0px'});
      rows.forEach(function(r){ io.observe(r); });
      // safety fallback: ensure visible even if IO never fires (hidden route etc.)
      setTimeout(function(){ rows.forEach(function(r){ if(!r.classList.contains('in')){ r.classList.add('in'); } }); }, 2600);
    } else { rows.forEach(function(r){ r.classList.add('in'); }); }

    /* ---- click nav (desktop) / accordion (mobile) + keyboard ---- */
    function go(r){ var href=r.getAttribute('data-href'); if(href) location.hash=href; }
    function isMobile(){ return window.innerWidth<=600; }
    rows.forEach(function(r){
      r.addEventListener('click',function(){
        if(isMobile()){
          if(r.classList.contains('open')){ go(r); }
          else { rows.forEach(function(x){ x.classList.remove('open'); }); r.classList.add('open'); }
        } else { go(r); }
      });
      r.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); r.click(); } });
    });

    /* ---- desktop floating preview that follows the cursor ---- */
    var prev=document.getElementById('csPreview');
    if(prev && !RM && !TOUCH){
      var tag=prev.querySelector('.cs-prev-tag');
      var px=window.innerWidth*0.7, py=window.innerHeight*0.5, tx=px, ty=py, raf=0;
      function follow(){ px+=(tx-px)*.16; py+=(ty-py)*.16; prev.style.left=px+'px'; prev.style.top=py+'px'; raf=requestAnimationFrame(follow); }
      list.addEventListener('pointermove',function(e){ tx=e.clientX+ Math.min(window.innerWidth*0.18,220); ty=e.clientY; });
      rows.forEach(function(r){
        r.addEventListener('pointerenter',function(){
          if(tag) tag.textContent=r.getAttribute('data-label')||'';
          prev.classList.add('show'); if(!raf) follow();
        });
      });
      list.addEventListener('pointerleave',function(){ prev.classList.remove('show'); if(raf){ cancelAnimationFrame(raf); raf=0; } });
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

(function(){
  var RM=window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(RM) return;
  function init(){
    var layer=document.querySelector('.pf-stars');
    var stars=layer? [].slice.call(layer.querySelectorAll('i')) : [];
    if(!stars.length){ setTimeout(init,500); return; }

    /* soft cursor glow that rides over the starfield */
    var glow=document.createElement('div'); glow.className='cursor-glow'; document.body.appendChild(glow);

    var base=[];
    function measure(){ base=stars.map(function(s){ var r=s.getBoundingClientRect(); return [r.left+r.width/2, r.top+r.height/2]; }); }
    measure(); window.addEventListener('resize',measure,{passive:true});

    var mx=-9999,my=-9999,gx=-9999,gy=-9999,moved=false;
    window.addEventListener('pointermove',function(e){ mx=e.clientX; my=e.clientY; if(gx<-9000){gx=mx;gy=my;} moved=true; },{passive:true});
    var R=180, R2=R*R, lit=[];
    function loop(){
      if(moved){
        gx+=(mx-gx)*.2; gy+=(my-gy)*.2;
        glow.style.transform='translate('+gx+'px,'+gy+'px) translate(-50%,-50%)';
        glow.style.opacity='1';
        var par=(window.scrollY||window.pageYOffset||0)*0.05;   // .pf-stars parallax offset
        /* clear previously lit stars first */
        for(var k=0;k<lit.length;k++){ var s0=stars[lit[k]]; if(s0){ s0.style.transform=''; s0.style.boxShadow=''; s0.style.background=''; } }
        lit.length=0;
        for(var i=0;i<stars.length;i++){
          var b=base[i]; var dx=b[0]-mx, dy=(b[1]+par)-my; var d2=dx*dx+dy*dy;
          if(d2<R2){
            var t=1-Math.sqrt(d2)/R;                 // 0..1 closeness
            var st=stars[i];
            st.style.transform='scale('+(1+t*2.6)+')';
            st.style.boxShadow='0 0 '+(6+t*16)+'px '+(1+t*4)+'px rgba(210,213,218,'+(0.55*t)+')';
            st.style.background = t>0.45 ? 'rgb(238,239,241)' : '';
            lit.push(i);
          }
        }
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){setTimeout(init,650);}); else setTimeout(init,650);
})();

(function(){
  function init(){
    /* ---- animated count-up statistics ---- */
    var stats=[].slice.call(document.querySelectorAll('.count'));
    if(stats.length){
      var RM=window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
      function run(el){
        if(el.__ran) return; el.__ran=1;
        var to=parseFloat(el.getAttribute('data-to'))||0,
            dec=parseInt(el.getAttribute('data-dec')||'0',10),
            suf=el.getAttribute('data-suf')||'';
        if(RM){ el.textContent=(dec?to.toFixed(dec):Math.round(to))+suf; return; }
        var t0=null,dur=1650;
        function frame(ts){ if(t0===null)t0=ts; var p=Math.min((ts-t0)/dur,1); var e=1-Math.pow(1-p,3); var v=to*e;
          el.textContent=(dec?v.toFixed(dec):Math.round(v))+suf; if(p<1) requestAnimationFrame(frame); }
        requestAnimationFrame(frame);
      }
      if('IntersectionObserver' in window){
        var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } }); },{threshold:.45});
        stats.forEach(function(s){ io.observe(s); });
        setTimeout(function(){ stats.forEach(function(s){ if(s.textContent==='0'){ run(s); } }); }, 3000);
      } else stats.forEach(run);
    }

    /* ---- before / after drag comparison ---- */
    var stage=document.getElementById('baStage');
    if(stage){
      var dragging=false;
      stage.style.setProperty('--split','50%');
      function set(clientX){
        var r=stage.getBoundingClientRect();
        var pct=Math.max(2,Math.min(98,((clientX-r.left)/r.width)*100));
        stage.style.setProperty('--split',pct+'%');
        stage.setAttribute('aria-valuenow',Math.round(pct));
      }
      stage.addEventListener('pointerdown',function(e){ dragging=true; set(e.clientX); try{stage.setPointerCapture(e.pointerId);}catch(_){} });
      window.addEventListener('pointermove',function(e){ if(dragging) set(e.clientX); },{passive:true});
      window.addEventListener('pointerup',function(){ dragging=false; });
      /* gentle hover-follow on desktop when not dragging */
      if(!(window.matchMedia && window.matchMedia('(hover:none)').matches)){
        stage.addEventListener('pointermove',function(e){ if(!dragging && e.pointerType==='mouse') set(e.clientX); },{passive:true});
      }
      stage.addEventListener('keydown',function(e){
        var cur=parseFloat(stage.style.getPropertyValue('--split'))||50;
        if(e.key==='ArrowLeft'){ e.preventDefault(); stage.style.setProperty('--split',Math.max(2,cur-4)+'%'); stage.setAttribute('aria-valuenow',Math.round(Math.max(2,cur-4))); }
        if(e.key==='ArrowRight'){ e.preventDefault(); stage.style.setProperty('--split',Math.min(98,cur+4)+'%'); stage.setAttribute('aria-valuenow',Math.round(Math.min(98,cur+4))); }
      });
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

(function(){
  /* Each portfolio category now behaves as its own page:
     #/portfolio/branding, #/portfolio/design, #/portfolio/social-media,
     #/portfolio/web-app, #/portfolio/influencer-marketing,
     #/portfolio/content-production, #/portfolio/performance-marketing */
  var CATS = {
    'branding':              {sec:'pfBranding', name:'Branding'},
    'design':                {sec:'pfDesign',   name:'Design'},
    'social-media':          {sec:'pfSocial',   name:'Social Media'},
    'web-app':               {sec:'pfWeb',      name:'Web & App'},
    'influencer-marketing':  {sec:'pfInf',      name:'Influencer Marketing'},
    'content-production':    {sec:'pfContent',  name:'Content Production'},
    'performance-marketing': {sec:'pfPerf',     name:'Performance Marketing'}
  };
  var DEFAULT = 'branding';

  function wakeAnims(scope){
    if(!scope) return;
    scope.querySelectorAll('.reveal-up').forEach(function(el){ el.classList.add('in'); });
    scope.querySelectorAll('.anim-rise').forEach(function(el){ el.classList.add('is-in'); });
    scope.querySelectorAll('.reveal, .pt-fade').forEach(function(el){
      el.style.opacity='1'; el.style.transform='none'; el.style.filter='none';
    });
  }

  window.__pfShow = function(slug){
    slug = (slug || '').toLowerCase();
    if(!CATS[slug]) slug = DEFAULT;
    var cat = CATS[slug];

    /* show only the selected category's work section */
    Object.keys(CATS).forEach(function(k){
      var s = document.getElementById(CATS[k].sec);
      if(s) s.hidden = (k !== slug);
    });

    /* active tab */
    var tabs = document.getElementById('pfTabs');
    if(tabs){
      [].slice.call(tabs.querySelectorAll('a')).forEach(function(a){
        a.classList.toggle('on', a.getAttribute('data-pfcat') === slug);
      });
    }

    /* hero heading reflects the current category page */
    var pf = document.querySelector('.route.pf2');
    if(pf){
      var h1 = pf.querySelector('.pf2-h1');
      if(h1) h1.innerHTML = cat.name + ' <span class="grad">Portfolio</span>';
    }
    document.title = cat.name + ' Portfolio — Inloop Media';

    /* make sure the freshly shown section is visible/animated */
    var sec = document.getElementById(cat.sec);
    wakeAnims(sec);
    if(window.ScrollTrigger){ try{ ScrollTrigger.refresh(); }catch(e){} }
  };

  /* legacy in-page jump links (if any remain) */
  function init(){
    document.querySelectorAll('[data-pfjump]').forEach(function(a){
      a.addEventListener('click',function(e){
        var id=(a.getAttribute('href')||'').slice(1); var t=document.getElementById(id);
        if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
      });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
(function(){
  function init(){
    var chips = document.querySelectorAll('.blog-chip');
    if(!chips.length) return;
    var cards = document.querySelectorAll('.blog-grid .blog-card');
    chips.forEach(function(chip){
      chip.addEventListener('click', function(){
        chips.forEach(function(c){ c.classList.remove('on'); });
        chip.classList.add('on');
        var cat = chip.textContent.trim().toLowerCase();
        cards.forEach(function(card){
          var el = card.querySelector('.blog-card-cat');
          var cc = el ? el.textContent.trim().toLowerCase() : '';
          var show = (cat === 'all') || (cc === cat);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function(){
  function init(){
    var form = document.getElementById('agsForm');
    if(!form) return;
    var result = document.getElementById('agsResult');
    var submitBtn = document.getElementById('agsSubmit');

    var RECO = {
      brand:   'Improve website messaging and landing page structure',
      content: 'Build a monthly AI-assisted content calendar',
      ad:      'Create multiple ad creative variations for testing',
      automation: 'Set up WhatsApp or email lead follow-up automation',
      growth:  'Connect content, ads and website into one growth system',
      book:    'Book a detailed AI growth audit with Inloop'
    };

    var LABELS = {
      brand:'Brand Clarity Score', content:'Content Consistency Score',
      ad:'Ad Readiness Score', automation:'Automation Opportunity Score', growth:'Growth Loop Score'
    };

    function clamp(n){ return Math.max(0, Math.min(100, Math.round(n))); }

    function readForm(){
      var d = {};
      ['brandName','website','instagram','industry','focus','postingFrequency',
       'paidAdsStatus','automationUsage','biggestChallenge','email'].forEach(function(k){
        var el = form.querySelector('[name="'+k+'"]');
        d[k] = el ? el.value.trim() : '';
      });
      return d;
    }

    function setErr(name, msg){
      var span = form.querySelector('.ags-err[data-for="'+name+'"]');
      if(span) span.textContent = msg || '';
      if(name==='brandName' || name==='email'){
        var field = form.querySelector('[name="'+name+'"]');
        if(field) field.closest('.ags-field').classList.toggle('err', !!msg);
      }
    }

    function validateForm(d){
      var ok = true;
      setErr('brandName',''); setErr('email',''); setErr('channel','');
      if(!d.brandName){ setErr('brandName','Brand name is required.'); ok=false; }
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!d.email){ setErr('email','Email address is required.'); ok=false; }
      else if(!emailRe.test(d.email)){ setErr('email','Enter a valid email address.'); ok=false; }
      if(!d.website && !d.instagram){ setErr('channel','Add at least a website URL or Instagram handle.'); ok=false; }
      return ok;
    }

    function calculateScores(d){
      var hasWeb = !!d.website, hasIg = !!d.instagram, ch = d.biggestChallenge, focus = d.focus;

      // Brand Clarity
      var brand = 30;
      if(hasWeb) brand += 22;
      if(hasIg) brand += 18;
      if(d.industry) brand += 12;
      if(hasWeb && hasIg) brand += 14;
      if(ch === 'No clear marketing strategy') brand -= 22;
      brand = clamp(brand);

      // Content Consistency
      var freqMap = {'Rarely':28,'1-2 times a week':52,'3-4 times a week':70,'Daily':88,'Multiple times a day':92};
      var content = freqMap[d.postingFrequency] != null ? freqMap[d.postingFrequency] : 40;
      if(ch === 'Weak content consistency') content -= 20;
      content = clamp(content);

      // Ad Readiness
      var adMap = {'Not running ads':38,'Tried ads but no strong results':55,'Running ads currently':74,'Scaling paid campaigns':90};
      var ad = adMap[d.paidAdsStatus] != null ? adMap[d.paidAdsStatus] : 45;
      if(hasWeb) ad += 8;
      if(ch === 'Poor ad performance' || ch === 'Low website conversions') ad -= 18;
      ad = clamp(ad);

      // Automation Opportunity (higher = more opportunity)
      var autoMap = {'No automation':90,'Basic WhatsApp / email replies':72,'CRM or lead tracking':55,'Advanced automation workflows':38};
      var automation = autoMap[d.automationUsage] != null ? autoMap[d.automationUsage] : 70;
      if(ch === 'Manual repetitive work' || ch === 'Not getting quality leads' || ch === 'Scaling is difficult') automation += 10;
      automation = clamp(automation);

      // Growth Loop
      var channels = 0;
      if(hasWeb) channels++;
      if(hasIg) channels++;
      if(d.postingFrequency && d.postingFrequency !== 'Rarely') channels++;
      if(d.paidAdsStatus && d.paidAdsStatus !== 'Not running ads') channels++;
      if(d.automationUsage && d.automationUsage !== 'No automation') channels++;
      var growth = 24 + channels * 13;
      if(ch === 'No clear marketing strategy') growth -= 18;
      if(focus === 'Improving sales' || focus === 'Getting more leads' || focus === 'Automating workflows') growth += 8;
      growth = clamp(growth);

      var overall = clamp((brand + content + ad + automation + growth) / 5);
      return { brand:brand, content:content, ad:ad, automation:automation, growth:growth, overall:overall };
    }

    function getScoreLabel(overall){
      if(overall <= 39) return 'Growth Foundation Needed';
      if(overall <= 59) return 'Growth System Can Improve';
      if(overall <= 79) return 'Strong Growth Potential';
      return 'AI-Ready Growth Engine';
    }

    function getLowestScoreCategory(s){
      var keys = ['brand','content','ad','growth']; // automation handled as opportunity separately
      var lowest = keys[0];
      keys.forEach(function(k){ if(s[k] < s[lowest]) lowest = k; });
      // if automation opportunity is the standout-high signal, surface it
      return { lowest: lowest, automationHigh: s.automation >= 80 && s.automation >= s[lowest] };
    }

    function generateInsight(s){
      var pick = getLowestScoreCategory(s);
      if(pick.automationHigh){
        return 'Your brand has a strong opportunity to save time through automation. Lead follow-ups, reporting, content planning and campaign workflows can be systemized using AI-powered agents.';
      }
      switch(pick.lowest){
        case 'brand': return 'Your brand has visibility potential, but the foundation needs more clarity. Strengthening your positioning, website messaging and visual consistency can make every campaign perform better.';
        case 'content': return 'Your brand can grow faster with a more consistent content system. AI-led content planning, hook generation and monthly creative workflows can help you show up more often without slowing down your team.';
        case 'ad': return 'Your brand needs a stronger paid media foundation before scaling ads. Better landing pages, ad creatives and campaign structure can help turn traffic into measurable business results.';
        case 'growth': return 'Your marketing channels are not fully connected yet. Your content, website, ads, automation and reporting can work together as one growth loop instead of separate activities.';
        default: return 'Your brand has strong growth potential. Connecting content, ads, automation and conversion journeys together will compound your results.';
      }
    }

    function generateRecommendations(s){
      var pick = getLowestScoreCategory(s);
      var recos = [];
      var map = { brand:RECO.brand, content:RECO.content, ad:RECO.ad, growth:RECO.growth };
      if(pick.automationHigh) recos.push(RECO.automation);
      if(map[pick.lowest]) recos.push(map[pick.lowest]);
      // fill with the next lowest categories' recos
      var order = ['brand','content','ad','growth'].slice().sort(function(a,b){ return s[a]-s[b]; });
      order.forEach(function(k){ if(map[k] && recos.indexOf(map[k]) === -1) recos.push(map[k]); });
      if(recos.indexOf(RECO.growth) === -1) recos.push(RECO.growth);
      recos = recos.slice(0, 3);
      while(recos.length < 3){ if(recos.indexOf(RECO.book) === -1) recos.push(RECO.book); else break; }
      return recos;
    }

    function animateGauge(overall){
      var arc = document.getElementById('agsGaugeArc');
      var num = document.getElementById('agsScoreNum');
      var C = 327; // 2*pi*52
      requestAnimationFrame(function(){
        arc.style.strokeDashoffset = C - (C * overall / 100);
      });
      var start = null, dur = 1100;
      function step(ts){
        if(!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        num.textContent = Math.round(overall * p);
        if(p < 1) requestAnimationFrame(step);
        else num.textContent = overall;
      }
      requestAnimationFrame(step);
    }

    function renderResults(d, s){
      document.getElementById('agsLabel').textContent = getScoreLabel(s.overall);
      document.getElementById('agsInsight').textContent = generateInsight(s);

      // bars
      var barsWrap = document.getElementById('agsBars');
      var order = ['brand','content','ad','automation','growth'];
      barsWrap.innerHTML = order.map(function(k){
        return '<div class="ags-bar"><span class="ags-bl">'+LABELS[k]+'</span>'+
               '<span class="ags-bv">'+s[k]+'</span>'+
               '<div class="ags-track"><div class="ags-fill" data-v="'+s[k]+'"></div></div></div>';
      }).join('');

      // recos
      var recos = generateRecommendations(s);
      document.getElementById('agsRecos').innerHTML = recos.map(function(r){ return '<li>'+r+'</li>'; }).join('');

      // reveal
      form.hidden = true;
      result.hidden = false;
      var wrap = form.closest('.ags-wrap');
      if(wrap) wrap.classList.add('ags-result-only');
      animateGauge(s.overall);
      requestAnimationFrame(function(){
        setTimeout(function(){
          barsWrap.querySelectorAll('.ags-fill').forEach(function(f){ f.style.width = f.getAttribute('data-v') + '%'; });
        }, 120);
      });
      result.scrollIntoView({ behavior:'smooth', block:'center' });

      return { label:getScoreLabel(s.overall), insight:generateInsight(s), recommendations:recos };
    }

    function submitLeadData(d, s, meta){
      var lead = {
        brandName: d.brandName,
        website: d.website,
        instagram: d.instagram,
        industry: d.industry,
        focus: d.focus,
        postingFrequency: d.postingFrequency,
        paidAdsStatus: d.paidAdsStatus,
        automationUsage: d.automationUsage,
        biggestChallenge: d.biggestChallenge,
        email: d.email,
        'Brand Clarity Score': s.brand,
        'Content Consistency Score': s.content,
        'Ad Readiness Score': s.ad,
        'Automation Opportunity Score': s.automation,
        'Growth Loop Score': s.growth,
        'Overall AI Growth Score': s.overall,
        'Performance Label': meta.label,
        'Recommended Actions': meta.recommendations,
        submittedAt: new Date().toISOString()
      };
      // keep a local copy too, in case the sheet write fails
      try{
        var all = JSON.parse(localStorage.getItem('inloop_ai_growth_leads') || '[]');
        all.push(lead);
        localStorage.setItem('inloop_ai_growth_leads', JSON.stringify(all));
        localStorage.setItem('inloop_ai_growth_last', JSON.stringify(lead));
      }catch(e){}
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'AI Growth Score',
          nameOrBrand: d.brandName,
          email: d.email,
          brandOrWebsite: d.website,
          instagram: d.instagram,
          industry: d.industry,
          focus: d.focus,
          postingFrequency: d.postingFrequency,
          paidAdsStatus: d.paidAdsStatus,
          automationUsage: d.automationUsage,
          biggestChallenge: d.biggestChallenge,
          aiGrowthScore: s.overall,
          scoreLabel: meta.label,
          pageUrl: window.location.href
        })
      }).catch(function(){});
      return lead;
    }

    function resetAudit(){
      form.reset();
      ['brandName','email','channel'].forEach(function(n){ setErr(n,''); });
      result.hidden = true;
      form.hidden = false;
      var wrap = form.closest('.ags-wrap');
      if(wrap) wrap.classList.remove('ags-result-only');
      // reset bars/gauge
      var arc = document.getElementById('agsGaugeArc'); if(arc) arc.style.strokeDashoffset = 327;
      form.scrollIntoView({ behavior:'smooth', block:'center' });
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var d = readForm();
      if(!validateForm(d)) return;
      submitBtn.disabled = true;
      var oldTxt = submitBtn.textContent;
      submitBtn.textContent = 'Analyzing your growth signals\u2026';
      setTimeout(function(){
        var s = calculateScores(d);
        var meta = renderResults(d, s);
        submitLeadData(d, s, meta);
        submitBtn.disabled = false;
        submitBtn.textContent = oldTxt;
      }, 900);
    });

    // clear inline errors as user types
    form.addEventListener('input', function(e){
      var n = e.target.name;
      if(n==='brandName' || n==='email') setErr(n,'');
      if(n==='website' || n==='instagram') setErr('channel','');
    });

    document.getElementById('agsRestart').addEventListener('click', resetAudit);
    document.getElementById('agsBook').addEventListener('click', function(){
      var target = document.querySelector('#contact');
      if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });

    // expose for future use / debugging
    window.submitLeadData = submitLeadData;
    window.resetAudit = resetAudit;
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

}
