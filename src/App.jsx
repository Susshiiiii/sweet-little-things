import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import SplitText from './components/reactbits/SplitText';
import CircularText from './components/reactbits/CircularText';
import ClickSpark from './components/reactbits/ClickSpark';
import DessertPhoto from './components/DessertPhoto';
import { BUSINESS, CATEGORIES, MENU, BEST_SELLER, waLink } from './data/menu';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const price = (item) => (item.price == null ? 'Ask us' : `RM ${item.price.toFixed(2)}`);
const MOTION_OK = '(prefers-reduced-motion: no-preference)';

/* Gives every dessert photo its own gentle "alive" loop: float, sway, breathing shadow, sparkles. */
function animatePhotos(scope) {
  const r = gsap.utils.random;
  gsap.utils.toArray('.photo', scope).forEach((el) => {
    const q = gsap.utils.selector(el);
    const dur = r(1.6, 2.4);
    const delay = r(0, 1.5);
    gsap.to(q('.photo-img'), { y: -12, rotate: r(-4, 4), duration: dur, ease: 'sine.inOut', yoyo: true, repeat: -1, delay });
    gsap.to(q('.photo-shadow'), { scaleX: 0.78, opacity: 0.18, duration: dur, ease: 'sine.inOut', yoyo: true, repeat: -1, delay });
    gsap.fromTo(q('.photo-spark'), { scale: 0, rotate: 0 }, {
      scale: 1, rotate: 90, duration: 0.7, ease: 'back.out(3)', yoyo: true, repeat: -1,
      repeatDelay: r(0.6, 2.2), stagger: 0.45, delay: r(0, 1.5),
    });
  });
}

function Nav({ lenis }) {
  const go = (e, id) => {
    e.preventDefault();
    lenis.current?.lenis?.scrollTo(id, { offset: -70 });
  };
  return (
    <header className="nav">
      <a href="#top" className="brand" onClick={(e) => go(e, '#top')}>
        <span className="brand-mark">🧁</span>
        <span className="brand-name">Sweet Little Things</span>
      </a>
      <nav className="nav-links">
        <a href="#menu" onClick={(e) => go(e, '#menu')}>Menu</a>
        <a href="#bestseller" onClick={(e) => go(e, '#bestseller')}>Best seller</a>
        <a href="#visit" onClick={(e) => go(e, '#visit')}>Find us</a>
      </nav>
      <a className="btn btn-small" href={waLink('Hi Sweet Little Things! 💜')} target="_blank" rel="noreferrer">Order</a>
    </header>
  );
}

const ORBIT = ['kedut', 'creampuff', 'eggtart', 'congo', 'danish', 'lava'].map((id) => MENU.find((m) => m.id === id));

function Hero({ lenis }) {
  const ref = useRef(null);
  const ringSize = () => Math.min(340, Math.round(window.innerWidth * 0.8));
  const [ring, setRing] = useState(ringSize);
  useEffect(() => {
    const onResize = () => setRing(ringSize());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray('.deco').forEach((el) => {
        gsap.to(el, {
          x: gsap.utils.random(-30, 30), y: gsap.utils.random(-40, 40), rotate: gsap.utils.random(-40, 40),
          duration: gsap.utils.random(3, 6), ease: 'sine.inOut', yoyo: true, repeat: -1,
        });
      });
      gsap.from('.hero-plate', { scale: 0.4, rotate: -25, opacity: 0, duration: 1.2, ease: 'elastic.out(1, 0.6)', delay: 0.3 });
      gsap.from('.hero-sub, .hero-actions, .status', { y: 24, opacity: 0, duration: 0.8, stagger: 0.15, delay: 0.8, ease: 'power3.out' });
      // her desserts orbit the plate; each one counter-spins so it stays upright
      gsap.to('.orbit', { rotate: 360, duration: 40, ease: 'none', repeat: -1 });
      gsap.to('.orbit-item', { rotate: -360, duration: 40, ease: 'none', repeat: -1 });
      gsap.from('.orbit-item', { scale: 0, duration: 0.8, ease: 'back.out(2)', stagger: 0.12, delay: 1 });
      gsap.to('.hero-plate', { yPercent: 25, scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } });
      animatePhotos(ref.current);
    });
  }, { scope: ref });

  return (
    <section className="hero" id="top" ref={ref}>
      {['💗', '✨', '🍓', '🎀', '🌸', '✨', '💜', '🍫'].map((d, i) => (
        <span key={i} className={`deco deco-${i}`} aria-hidden="true">{d}</span>
      ))}
      <div className="hero-copy">
        <p className="eyebrow">Homemade in Ipoh</p>
        <SplitText text="Sweet Little Things" tag="h1" className="hero-title" effect="pop" delay={45}
          duration={0.9} textAlign="left" trigger="load" hoverEffect="bounce" accentColor="#e2729b" />
        <p className="hero-sub">{BUSINESS.tagline} 🤤 Brownies kedut, burnt cheesecakes, dreamy pavlovas &amp; fresh pastries, baked with love.</p>
        <div className="hero-actions">
          <a className="btn" href="#menu" onClick={(e) => { e.preventDefault(); lenis.current?.lenis?.scrollTo('#menu', { offset: -70 }); }}>See the menu</a>
          <a className="btn btn-ghost" href={BUSINESS.instagram} target="_blank" rel="noreferrer">@sweetlittlethings_ipoh</a>
        </div>
        <p className="status"><span className="dot" /> {BUSINESS.status}</p>
      </div>
      <div className="hero-plate">
        <div className="orbit" aria-hidden="true">
          {ORBIT.map((m, i) => (
            <div key={m.id} className="orbit-slot" style={{ '--a': `${(360 / ORBIT.length) * i}deg` }}>
              <img className="orbit-item" src={m.img} alt="" draggable="false" />
            </div>
          ))}
        </div>
        <CircularText text="SWEET ✦ LITTLE ✦ THINGS ✦ IPOH ✦ " size={ring} fontSize={ring < 300 ? 16 : 20} spinDuration={22}
          onHover="slowDown" color="#7a5aa6" className="hero-ring" />
        <div className="hero-plate-inner">
          <DessertPhoto src={BEST_SELLER.img} alt={BEST_SELLER.name} eager />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.to('.marquee-track', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
  }, { scope: ref });
  return (
    <div className="marquee" ref={ref} aria-hidden="true">
      <div className="marquee-track">
        {[...MENU, ...MENU].map((m, i) => (
          <span key={i}><img src={m.img} alt="" loading="lazy" />{m.name}</span>
        ))}
      </div>
    </div>
  );
}

function Menu() {
  const ref = useRef(null);
  const [cat, setCat] = useState('all');
  const firstRun = useRef(true);
  const items = MENU.filter((m) => cat === 'all' || m.cat === cat);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const intro = (cards) => gsap.fromTo(cards,
        { y: 80, opacity: 0, rotate: () => gsap.utils.random(-8, 8), scale: 0.85 },
        { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.08 });
      const pop = (photos) => gsap.fromTo(photos,
        { scale: 0.2, rotate: -20 }, { scale: 1, rotate: 0, duration: 1.1, ease: 'elastic.out(1, 0.55)', stagger: 0.08, delay: 0.15 });
      if (firstRun.current) {
        // first load: each row pops in as it scrolls into view
        gsap.set('.card', { opacity: 0 });
        ScrollTrigger.batch('.card', {
          start: 'top 90%', once: true,
          onEnter: (batch) => { intro(batch); pop(batch.map((c) => c.querySelector('.photo'))); },
        });
      } else {
        // after a filter change: pop the new cards in right away
        intro('.card'); pop('.card .photo');
      }
      animatePhotos(ref.current);
    });
    gsap.fromTo('.menu-head > *', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
      scrollTrigger: { trigger: '.menu-head', start: 'top 85%', once: true } });
  }, { scope: ref, dependencies: [cat], revertOnUpdate: true });

  // hover: dessert jumps out a little and wiggles; on desktop it also tilts toward the cursor
  const enter = (e) => gsap.to(e.currentTarget.querySelector('.photo'), {
    scale: 1.14, y: -8, rotate: gsap.utils.random([-7, 7]), duration: 0.6, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
  const leave = (e) => gsap.to(e.currentTarget.querySelector('.photo'), {
    scale: 1, y: 0, rotate: 0, rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' });
  const move = (e) => {
    if (e.pointerType !== 'mouse') return;
    const b = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    gsap.to(e.currentTarget.querySelector('.photo'), { rotateY: x * 24, rotateX: -y * 24, duration: 0.4, overwrite: 'auto' });
  };

  return (
    <section className="menu" id="menu" ref={ref}>
      <div className="menu-head">
        <p className="eyebrow">Our menu · {MENU.length} treats</p>
        <h2>Pick your little treat 🍰</h2>
        <p className="muted">Every treat on our menu, tap one to order on WhatsApp.</p>
      </div>
      <div className="tabs" role="tablist">
        {CATEGORIES.map((c) => (
          <button key={c.id} role="tab" aria-selected={cat === c.id} className={`tab ${cat === c.id ? 'active' : ''}`}
            onClick={() => { firstRun.current = false; setCat(c.id); }}>{c.label}</button>
        ))}
      </div>
      <ClickSpark sparkColor="#e2729b" sparkCount={10} sparkRadius={34} shape="star">
        <div className="menu-grid">
          {items.map((m) => (
            <a key={m.id} className={`card ${m.best ? 'is-best' : ''}`} href={waLink(`Hi Sweet Little Things! I'd like to order: ${m.name} 💜`)}
              target="_blank" rel="noreferrer" onMouseEnter={enter} onMouseLeave={leave} onPointerMove={move}>
              {m.tag && <span className="ribbon">{m.tag}</span>}
              <div className={`card-art bg-${m.cat}`}><DessertPhoto src={m.img} alt={m.name} /></div>
              <div className="card-body">
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <div className="card-foot">
                  <span className={`price ${m.price == null ? 'ask' : ''}`}>
                    {price(m)}{m.unit && <small> / {m.unit}</small>}
                  </span>
                  <span className="add" aria-hidden="true">＋</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </ClickSpark>
      <p className="muted note">Prices from the handwritten cards at our stall. “Ask us” items weren’t priced on our page yet, message us for today’s price!</p>
    </section>
  );
}

function BestSeller() {
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'bottom 30%', scrub: 1 } });
      tl.fromTo('.bs-art', { rotate: -20, scale: 0.7 }, { rotate: 6, scale: 1.05 })
        .fromTo('.bs-copy', { x: 60, opacity: 0 }, { x: 0, opacity: 1 }, 0);
      gsap.to('.bs-berry', { y: -16, rotate: 20, duration: 1.4, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.3 });
      gsap.to('.bs-crown', { rotate: 12, y: -6, duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      animatePhotos(ref.current);
    });
  }, { scope: ref });
  const pav = BEST_SELLER;
  return (
    <section className="bestseller" id="bestseller" ref={ref}>
      <div className="bs-art">
        <span className="bs-crown" aria-hidden="true">👑</span>
        <span className="bs-berry b1">🍓</span><span className="bs-berry b2">🍓</span><span className="bs-berry b3">🫐</span>
        <DessertPhoto src={pav.img} alt={pav.name} />
      </div>
      <div className="bs-copy">
        <p className="eyebrow">My top one best selling 🍓✨</p>
        <h2>{pav.name}</h2>
        <p>Crisp meringue nest, a cloud of whipped cream, juicy strawberries and a blueberry with a dust of cocoa. Crunchy outside, marshmallowy inside, and almost too pretty to eat.</p>
        <a className="btn" href={waLink(`Hi! I'd like to order the ${pav.name} 🍓`)} target="_blank" rel="noreferrer">Order on WhatsApp · {price(pav)}</a>
      </div>
    </section>
  );
}

function Visit() {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.fromTo('.visit-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } });
  }, { scope: ref });
  return (
    <section className="visit" id="visit" ref={ref}>
      <div className="menu-head">
        <p className="eyebrow">Come say hi</p>
        <h2>Find our little stall 🎀</h2>
      </div>
      <div className="visit-grid">
        <div className="visit-card">
          <span className="vi">📍</span>
          <h3>Where</h3>
          <p>{BUSINESS.location}<br />{BUSINESS.city}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Dataran+Ipoh" target="_blank" rel="noreferrer">Open in Maps →</a>
        </div>
        <div className="visit-card">
          <span className="vi">💬</span>
          <h3>Order</h3>
          <p>Pre-orders &amp; bulk orders for parties, open houses and gifts.</p>
          <a href={waLink('Hi Sweet Little Things! 💜')} target="_blank" rel="noreferrer">WhatsApp +60 17-478 0432 →</a>
        </div>
        <div className="visit-card">
          <span className="vi">📸</span>
          <h3>Follow</h3>
          <p>New flavours, stall days &amp; our comeback news.</p>
          <a href={BUSINESS.instagram} target="_blank" rel="noreferrer">Instagram →</a>{' '}
          <a href={BUSINESS.tiktok} target="_blank" rel="noreferrer">TikTok →</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const lenis = useRef(null);

  useEffect(() => {
    const update = (t) => lenis.current?.lenis?.raf(t * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    const l = lenis.current?.lenis;
    l?.on('scroll', ScrollTrigger.update);
    return () => { gsap.ticker.remove(update); l?.off('scroll', ScrollTrigger.update); };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.1 }} ref={lenis}>
      <Nav lenis={lenis} />
      <main>
        <Hero lenis={lenis} />
        <Marquee />
        <Menu />
        <BestSeller />
        <Visit />
      </main>
      <footer className="footer">
        <p className="footer-logo">Sweet Little Things</p>
        <p>{BUSINESS.legal} · Made with 💜 in Ipoh</p>
        <p className="credit">Dessert photos are for illustration (via Unsplash). Our real treats are handmade and each one looks a little different 💜</p>
      </footer>
    </ReactLenis>
  );
}
