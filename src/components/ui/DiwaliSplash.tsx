// Full-screen Diwali greeting shown FIRST when the site opens, until the end of Sunday 8 November 2026 (Zurich time).
// The page HTML is cached, so the date check runs in a tiny inline script that executes before first paint.
// The overlay is hidden by default (crawlers and everyone outside the window see the normal site) and its
// photo only loads when it is switched on. Pure CSS animation; respects prefers-reduced-motion.

const SPARKS: [number, number, number, number][] = [
  // left %, size px, duration s, delay s
  [6, 4, 9, 0.2], [13, 6, 11, 1.4], [19, 3, 8, 0.8], [26, 5, 12, 2.6], [33, 4, 9.5, 0.4], [40, 7, 13, 1.9],
  [47, 3, 8.5, 3.1], [54, 5, 10.5, 0.9], [61, 4, 9, 2.2], [68, 6, 12.5, 0.1], [75, 3, 8, 1.7], [82, 5, 11, 2.9],
  [89, 4, 9.5, 0.6], [95, 6, 12, 1.2], [10, 3, 10, 3.6], [29, 4, 11.5, 4.1], [44, 3, 9, 4.6], [58, 5, 13, 3.3],
  [72, 3, 8.5, 4.4], [86, 4, 10, 3.9],
];

const LANGS = ["Happy Diwali", "Frohe Diwali", "Joyeuse Diwali", "Buona Diwali", "दीपावली की हार्दिक शुभकामनाएँ"];

function Diya({ size, delay, left }: { size: number; delay: number; left: string }) {
  return (
    <svg className="dw-diya" viewBox="0 0 120 110" width={size} height={size * 0.92} style={{ left, animationDelay: `${delay}s` }} aria-hidden="true">
      <defs>
        <linearGradient id={`g${left.replace(/\W/g, "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4D58D" /><stop offset="1" stopColor="#9A6A2A" />
        </linearGradient>
      </defs>
      <path className="dw-flame" style={{ animationDelay: `${delay * 0.7}s` }} d="M60 6 C74 28 82 40 60 62 C38 40 46 28 60 6 Z" fill="#FFD36B" />
      <path className="dw-flame-in" style={{ animationDelay: `${delay * 0.7}s` }} d="M60 26 C66 38 69 46 60 58 C51 46 54 38 60 26 Z" fill="#FFF3C4" />
      <path d="M8 62 Q60 112 112 62 Q60 74 8 62 Z" fill={`url(#g${left.replace(/\W/g, "")})`} />
      <ellipse cx="60" cy="63" rx="52" ry="7" fill="#7A4E1B" opacity=".55" />
    </svg>
  );
}

const CSS = `
#dw-splash{display:none}
html.dw-on{overflow:hidden}
html.dw-on #dw-splash{display:flex}
#dw-splash{position:fixed;inset:0;z-index:2147483000;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:#F6EEDD;
  background:radial-gradient(ellipse at 50% 35%,#2a1708 0%,#140d07 55%,#0b0704 100%);overflow:hidden;font-family:'Plus Jakarta Sans',system-ui,sans-serif;animation:dw-fadein .5s ease both}
#dw-splash.dw-out{animation:dw-fadeout .6s ease forwards}
#dw-splash .dw-photo{position:absolute;inset:-4%;background:url(/images/events/diwali.webp) center/cover no-repeat;opacity:.38;filter:saturate(1.2);animation:dw-kb 14s ease-out both}
#dw-splash .dw-veil{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,rgba(20,13,7,0) 0%,rgba(11,7,4,.78) 78%)}
#dw-splash .dw-sparks i{position:absolute;bottom:-12px;border-radius:50%;background:#FFD27A;box-shadow:0 0 10px 2px rgba(255,190,90,.7);opacity:0;animation:dw-rise linear infinite}
#dw-splash .dw-inner{position:relative;z-index:2;padding:0 24px;max-width:760px}
#dw-splash .dw-eyebrow{font-size:12px;font-weight:700;letter-spacing:.32em;text-transform:uppercase;color:#CEB07A;opacity:0;animation:dw-up .8s .3s cubic-bezier(.16,1,.3,1) forwards}
#dw-splash h1{margin:14px 0 6px;font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:600;font-size:clamp(2.6rem,9vw,5.6rem);line-height:1.02;
  background:linear-gradient(100deg,#CEB07A 20%,#FFF1C9 45%,#CEB07A 70%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
  opacity:0;animation:dw-up 1s .6s cubic-bezier(.16,1,.3,1) forwards,dw-shine 4.5s 1.6s ease-in-out infinite}
#dw-splash .dw-langs{position:relative;height:2.2em;margin:4px 0 14px;font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.15rem,3.4vw,1.7rem);font-weight:600;color:#F6EEDD}
#dw-splash .dw-langs span{position:absolute;left:0;right:0;opacity:0;animation:dw-cycle 10s infinite}
#dw-splash .dw-wish{margin:0 auto;max-width:560px;font-size:clamp(.95rem,2.4vw,1.1rem);line-height:1.65;color:rgba(246,238,221,.88);opacity:0;animation:dw-up .9s 1.5s ease forwards}
#dw-splash .dw-cta{margin-top:26px;display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border-radius:999px;border:none;cursor:pointer;background:#CEB07A;color:#1A1410;font-weight:700;font-size:14px;letter-spacing:.04em;opacity:0;animation:dw-up .8s 2.1s ease forwards}
#dw-splash .dw-cta:hover{background:#E3C58B}
#dw-splash .dw-cta:focus-visible,#dw-splash .dw-skip:focus-visible{outline:2px solid #FFE3A1;outline-offset:3px}
#dw-splash .dw-skip{position:absolute;top:16px;right:16px;z-index:3;width:40px;height:40px;border-radius:999px;border:1px solid rgba(206,176,122,.45);background:rgba(0,0,0,.35);color:#F6EEDD;font-size:20px;line-height:1;cursor:pointer}
#dw-splash .dw-diyas{position:absolute;left:0;right:0;bottom:0;height:120px;z-index:2}
#dw-splash .dw-diya{position:absolute;bottom:18px;transform:translateX(-50%);opacity:0;animation:dw-up .9s ease forwards;filter:drop-shadow(0 0 14px rgba(255,170,60,.55))}
#dw-splash .dw-flame{transform-origin:60px 62px;animation:dw-flicker 1.6s ease-in-out infinite}
#dw-splash .dw-flame-in{transform-origin:60px 58px;animation:dw-flicker 1.2s ease-in-out infinite reverse}
#dw-splash .dw-bar{position:absolute;left:0;bottom:0;height:3px;width:100%;background:linear-gradient(90deg,#CEB07A,#FFE3A1);transform-origin:left;transform:scaleX(0);z-index:3;animation:dw-bar 9s linear forwards}
@keyframes dw-fadein{from{opacity:0}to{opacity:1}}
@keyframes dw-fadeout{to{opacity:0;visibility:hidden}}
@keyframes dw-kb{from{transform:scale(1)}to{transform:scale(1.12)}}
@keyframes dw-up{from{opacity:0;transform:translateY(18px);filter:blur(4px)}to{opacity:1;transform:none;filter:none}}
@keyframes dw-shine{0%,100%{background-position:100% 0}50%{background-position:0 0}}
@keyframes dw-rise{0%{opacity:0;transform:translateY(0) scale(.6)}12%{opacity:.95}100%{opacity:0;transform:translateY(-105vh) translateX(26px) scale(1)}}
@keyframes dw-flicker{0%,100%{transform:scale(1,1) skewX(0)}25%{transform:scale(.94,1.06) skewX(-3deg)}55%{transform:scale(1.04,.96) skewX(2deg)}80%{transform:scale(.97,1.04) skewX(-1deg)}}
@keyframes dw-cycle{0%{opacity:0;transform:translateY(10px)}4%,18%{opacity:1;transform:none}22%,100%{opacity:0;transform:translateY(-8px)}}
@keyframes dw-bar{to{transform:scaleX(1)}}
#dw-splash .dw-langs span:nth-child(1){animation-delay:1.2s}#dw-splash .dw-langs span:nth-child(2){animation-delay:3.2s}#dw-splash .dw-langs span:nth-child(3){animation-delay:5.2s}#dw-splash .dw-langs span:nth-child(4){animation-delay:7.2s}#dw-splash .dw-langs span:nth-child(5){animation-delay:9.2s}
@media (max-width:520px){#dw-splash .dw-diyas{height:96px}}
@media (prefers-reduced-motion:reduce){
  #dw-splash,#dw-splash *{animation:none!important}
  #dw-splash .dw-eyebrow,#dw-splash h1,#dw-splash .dw-wish,#dw-splash .dw-cta,#dw-splash .dw-diya{opacity:1}
  #dw-splash .dw-langs span:first-child{opacity:1}
  #dw-splash .dw-sparks,#dw-splash .dw-bar{display:none}
}
`;

// Runs first in <body>: decides (client clock) whether to show the splash, before anything paints.
const GATE = `(function(){try{
var d=document.documentElement,p=location.pathname,q=location.search;
if(/^\\/(admin|login|join|signup|reset-password|api)/.test(p)||q.indexOf('nodiwali')>-1)return;
var n=Date.now(),a=new Date('2026-11-05T00:00:00+01:00').getTime(),b=new Date('2026-11-09T00:00:00+01:00').getTime();
var force=q.indexOf('diwali=1')>-1;
if(!force&&(n<a||n>=b))return;
if(!force&&sessionStorage.getItem('dw26_seen'))return;
d.classList.add('dw-on');
var done=false;function close(){if(done)return;done=true;try{sessionStorage.setItem('dw26_seen','1')}catch(e){}
var s=document.getElementById('dw-splash');if(!s){d.classList.remove('dw-on');return}
s.classList.add('dw-out');setTimeout(function(){d.classList.remove('dw-on')},600)}
function wire(){var s=document.getElementById('dw-splash');if(!s)return;
var k=document.getElementById('dw-skip'),c=document.getElementById('dw-cta');
if(k)k.addEventListener('click',close);if(c)c.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
if(c)try{c.focus({preventScroll:true})}catch(e){}
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
setTimeout(close,rm?6000:9500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
}catch(e){}})();`;

export default function DiwaliSplash() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script dangerouslySetInnerHTML={{ __html: GATE }} />
      <div id="dw-splash" role="dialog" aria-modal="true" aria-label="Happy Diwali from Indiaspora">
        <div className="dw-photo" aria-hidden="true" />
        <div className="dw-veil" aria-hidden="true" />
        <div className="dw-sparks" aria-hidden="true">
          {SPARKS.map(([l, s, d, dl], i) => (
            <i key={i} style={{ left: `${l}%`, width: s, height: s, animationDuration: `${d}s`, animationDelay: `${dl}s` }} />
          ))}
        </div>
        <button id="dw-skip" className="dw-skip" type="button" aria-label="Skip greeting and enter the site">×</button>
        <div className="dw-inner">
          <div className="dw-eyebrow">Festival of Lights · 8 November 2026</div>
          <h1>Shubh Deepavali</h1>
          <div className="dw-langs" aria-live="off">
            {LANGS.map((t) => <span key={t}>{t}</span>)}
          </div>
          <p className="dw-wish">
            May the lights of Diwali bring warmth to your home, sweetness to your table and fresh beginnings to your year. From all of us at Indiaspora, to you and your family.
          </p>
          <button id="dw-cta" className="dw-cta" type="button">Enter Indiaspora →</button>
        </div>
        <div className="dw-diyas" aria-hidden="true">
          <Diya size={54} delay={0.9} left="14%" />
          <Diya size={70} delay={1.2} left="32%" />
          <Diya size={92} delay={1.5} left="50%" />
          <Diya size={70} delay={1.8} left="68%" />
          <Diya size={54} delay={2.1} left="86%" />
        </div>
        <div className="dw-bar" aria-hidden="true" />
      </div>
    </>
  );
}
