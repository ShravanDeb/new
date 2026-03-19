import { NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, LayoutGroup, AnimatePresence } from 'framer-motion';
import { FiMoon, FiCommand } from 'react-icons/fi';
import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/links', label: 'Links' },
  { to: '/uses', label: 'Uses' },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  // 1. Tagline Scroll Transforms
  const taglineOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const taglineClip = useTransform(scrollY, [0, 80], ['inset(0 0% 0 0)', 'inset(0 100% 0 0)']);
  const taglineX = useTransform(scrollY, [0, 80], [0, -20]);

  // 2. Nav Movement: Extreme Right -> Center
  // "-42%" is usually the sweet spot to pull the right-aligned container to the horizontal center
  const navMoveX = useTransform(scrollY, [0, 150], ["0%", "-42%"]);

  return (
    <motion.header
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* FIXED LEFT: Logo & Tagline */}
      <div className={styles.left}>
        <NavLink to="/" className={styles.logo}>YN</NavLink>

        <motion.div
          className={styles.taglineGroup}
          style={{ 
            opacity: taglineOpacity, 
            clipPath: taglineClip,
            x: taglineX 
          }}
        >
          <div className={styles.divider} />
          <div className={styles.tagline}>
            <span className={styles.tagTop}>CREATIVE ENGINEER</span>
            <span className={styles.tagBottom}>BUILDING THE FUTURE</span>
          </div>
        </motion.div>
      </div>

      {/* DYNAMIC RIGHT: Moves toward center on scroll */}
      <motion.div className={styles.rightSideWrapper} style={{ x: navMoveX }}>
        <LayoutGroup>
          <nav className={styles.nav} onMouseLeave={() => setHoveredPath(null)}>
            {links.map(({ to, label }) => {
              const isActive = location.pathname === to;
              const isHovered = hoveredPath === to;
              const isSelected = isHovered || (isActive && !hoveredPath);

              return (
                <NavLink
                  key={to}
                  to={to}
                  onMouseEnter={() => setHoveredPath(to)}
                  className={`${styles.link} ${isSelected ? styles.active : ''}`}
                >
                  <div className={styles.textWrapper}>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isSelected ? 'active' : 'inactive'}
                        className={styles['link-text']}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                      >
                        {label}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  
                  {isSelected && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={styles.pill}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Toggle theme"><FiMoon size={15} /></button>
          <a href="mailto:you@email.com" className={styles.bookBtn}>Book a Call</a>
          <button className={styles.iconBtn} aria-label="Command menu"><FiCommand size={15} /></button>
        </div>
      </motion.div>
    </motion.header>
  );
}