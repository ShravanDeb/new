import { NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMoon, FiCommand } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/links', label: 'Links' },
  { to: '/uses', label: 'Uses' },
];

// ─── ease shared across all GSAP animations ───────────────────────────────────
const EASE = 'power3.out';

export default function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();

  // ── GSAP refs ──────────────────────────────────────────────────────────────
  const circleRefs   = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs       = useRef<Array<gsap.core.Timeline | null>>([]);
  const tweenRefs    = useRef<Array<gsap.core.Tween | null>>([]);

  // ── Scroll Transforms (unchanged) ─────────────────────────────────────────
  const taglineOpacity = useTransform(scrollY, [0, 50],  [1, 0]);
  const taglineClip    = useTransform(scrollY, [0, 80],  ['inset(0 0% 0 0)', 'inset(0 100% 0 0)']);
  const taglineX       = useTransform(scrollY, [0, 80],  [0, -20]);
  const navMoveX       = useTransform(scrollY, [0, 150], ['0%', '-42%']);

  // ── Build / rebuild GSAP timelines on mount + resize ──────────────────────
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const { width: w, height: h } = pill.getBoundingClientRect();

        // Inscribed-circle maths from PillNav — makes the bubble feel natural
        const R      = ((w * w) / 4 + h * h) / (2 * h);
        const D      = Math.ceil(2 * R) + 2;
        const delta  = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const origY  = D - delta;

        circle.style.width  = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${origY}px`,
        });

        const label      = pill.querySelector<HTMLElement>(`.${styles.pillLabel}`);
        const labelHover = pill.querySelector<HTMLElement>(`.${styles.pillLabelHover}`);

        if (label)      gsap.set(label,      { y: 0 });
        if (labelHover) gsap.set(labelHover, { y: Math.ceil(h + 100), opacity: 0 });

        // Kill the old timeline before rebuilding
        tlRefs.current[i]?.kill();

        const tl = gsap.timeline({ paused: true });

        // Circle expands upward
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: EASE, overwrite: 'auto' }, 0);

        // Original label exits upward
        if (label)
          tl.to(label, { y: -(h + 8), duration: 2, ease: EASE, overwrite: 'auto' }, 0);

        // Hover label enters from below
        if (labelHover)
          tl.to(labelHover, { y: 0, opacity: 1, duration: 2, ease: EASE, overwrite: 'auto' }, 0);

        tlRefs.current[i] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => {});
    return () => window.removeEventListener('resize', layout);
  }, []);

  // ── Hover handlers ─────────────────────────────────────────────────────────
  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: EASE,
      overwrite: 'auto',
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease: EASE,
      overwrite: 'auto',
    });
  };

  return (
    <motion.header
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── LEFT: logo + tagline (scroll-animated) ── */}
      <div className={styles.left}>
        <NavLink to="/" className={styles.logo}>YN</NavLink>

        <motion.div
          className={styles.taglineGroup}
          style={{
            opacity:  taglineOpacity,
            clipPath: taglineClip,
            x:        taglineX,
          }}
        >
          <div className={styles.divider} />
          <div className={styles.tagline}>
            <span className={styles.tagTop}>CREATIVE ENGINEER</span>
            <span className={styles.tagBottom}>BUILDING THE FUTURE</span>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: nav + actions (scroll-slides left) ── */}
      <motion.div className={styles.rightSideWrapper} style={{ x: navMoveX }}>
        <nav className={styles.nav}>
          {links.map(({ to, label }, i) => {
            const isActive = location.pathname === to;

            return (
              <NavLink
                key={to}
                to={to}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                {/*
                 * Bubble circle — sits at the bottom of the pill, then scales up.
                 * GSAP sets its dimensions dynamically in the layout() fn above.
                 */}
                <span
                  className={styles.hoverCircle}
                  aria-hidden="true"
                  ref={el => { circleRefs.current[i] = el; }}
                />

                {/* Two-layer label stack: original slides out, hover slides in */}
                <div className={styles.textWrapper}>
                  <span className={styles.labelStack}>
                    <span className={styles.pillLabel}>{label}</span>
                    <span className={styles.pillLabelHover} aria-hidden="true">{label}</span>
                  </span>
                </div>
              </NavLink>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Toggle theme">
            <FiMoon size={15} />
          </button>
          <a href="mailto:you@email.com" className={styles.bookBtn}>Book a Call</a>
          <button className={styles.iconBtn} aria-label="Command menu">
            <FiCommand size={15} />
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}