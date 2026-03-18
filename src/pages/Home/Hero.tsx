import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }

const item = {
  hidden:  { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }
  },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div variants={container} initial="hidden" animate="visible" className={styles.content}>
        <motion.span variants={item} className={styles.badge}>
          <span className={styles.dot} /> Available for work
        </motion.span>
        <motion.h1 variants={item} className={styles.headline}>
          I build<br />
          <em className={styles.accent}>digital things</em><br />
          that matter.
        </motion.h1>
        <motion.p variants={item} className={styles.sub}>
          Full-stack developer & designer crafting fast, beautiful, and purposeful web experiences.
        </motion.p>
        <motion.div variants={item} className={styles.cta}>
          <a href="/work"  className={styles.btnPrimary}>See my work</a>
          <a href="/about" className={styles.btnGhost}>About me →</a>
        </motion.div>
        <motion.div variants={item} className={styles.stats}>
          <div className={styles.stat}><strong>3+</strong><span>Years exp.</span></div>
          <div className={styles.divider} />
          <div className={styles.stat}><strong>20+</strong><span>Projects</span></div>
          <div className={styles.divider} />
          <div className={styles.stat}><strong>10+</strong><span>Clients</span></div>
        </motion.div>
      </motion.div>
      <div className={styles.orb}  aria-hidden />
      <div className={styles.orb2} aria-hidden />
    </section>
  )
}
