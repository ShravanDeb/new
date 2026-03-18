import { NavLink, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, LayoutGroup } from 'framer-motion'
import { FiMoon, FiCommand } from 'react-icons/fi'
import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { to: '/',      label: 'Home'  },
  { to: '/about', label: 'About' },
  { to: '/work',  label: 'Work'  },
  { to: '/links', label: 'Links' },
  { to: '/uses',  label: 'Uses'  },
]

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const location = useLocation()
  
  const { scrollY } = useScroll()

  // Progressive tagline animations based on scroll depth
  const taglineOpacity = useTransform(scrollY, [0, 80], [1, 0])
  const taglineClip = useTransform(
    scrollY, 
    [0, 100], 
    ['inset(0 0% 0 0)', 'inset(0 100% 0 0)']
  )
  const taglineX = useTransform(scrollY, [0, 100], [0, -20])

  return (
    <motion.header
      className={styles.navbar}
      // Use x: "-50%" here to maintain centering while animating entry
      initial={{ x: "-50%", y: -100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
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

      <div className={styles.right}>
        <LayoutGroup>
          <nav className={styles.nav} onMouseLeave={() => setHoveredPath(null)}>
            {links.map(({ to, label }) => {
              const isActive = location.pathname === to
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
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5
                      }}
                    />
                  )}
                </NavLink>
              )
            })}
          </nav>
        </LayoutGroup>

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