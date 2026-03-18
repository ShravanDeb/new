import { NavLink } from 'react-router-dom'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={styles.navbar}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {/* LEFT — logo + divider + tagline */}
      <div className={styles.left}>
        <NavLink to="/" className={styles.logo}>YN</NavLink>

        {/* Tagline wipes out to the right on scroll */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              className={styles.taglineGroup}
              initial={{ opacity: 1, x: 0, width: 'auto' }}
              animate={{ opacity: 1, x: 0, width: 'auto' }}
              exit={{
                opacity: 0,
                x: 40,
                width: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
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

      {/* CENTER/RIGHT — nav slides to center on scroll */}
      <motion.div
        className={styles.right}
        animate={{
          x: scrolled ? '-20%' : '0%',
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <nav className={styles.nav}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
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
      </motion.div>
    </motion.header>
  )
}