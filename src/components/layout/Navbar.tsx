import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiCommand } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { to: '/',      label: 'Home'  },
  { to: '/about', label: 'About' },
  { to: '/work',  label: 'Work'  },
  { to: '/links', label: 'Links' },
  { to: '/uses',  label: 'Uses'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.left}>
        <NavLink to="/" className={styles.logo}>YN</NavLink>

        <AnimatePresence mode="wait">
          {!scrolled && (
            <motion.div
              className={styles.taglineGroup}
              initial={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              exit={{ 
                clipPath: 'inset(0 100% 0 0)', 
                opacity: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
              }}
            >
              <div className={styles.divider} />
              <div className={styles.tagline}>
                <span className={styles.tagTop}>CREATIVE ENGINEER</span>
                <span className={styles.tagBottom}>BUILDING THE FUTURE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.right}>
        <nav className={styles.nav} onMouseLeave={() => setHoveredPath(null)}>
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                key={to}
                to={to}
                onMouseEnter={() => setHoveredPath(to)}
                className={styles.link}
              >
                <span className={styles['link-text']}>{label}</span>
                {(hoveredPath === to || (isActive && !hoveredPath)) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={styles.pill}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Toggle theme">
            <FiMoon size={15} />
          </button>
          <a href="mailto:you@email.com" className={styles.bookBtn}>
            Book a Call
          </a>
          <button className={styles.iconBtn} aria-label="Command menu">
            <FiCommand size={15} />
          </button>
        </div>
      </div>
    </motion.header>
  )
}