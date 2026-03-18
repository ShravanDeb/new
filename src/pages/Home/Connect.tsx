import { motion } from 'framer-motion'
import styles from './Connect.module.css'

export default function Connect() {
  return (
    <section className={styles.section}>
      <motion.div className={styles.box}
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <span className={styles.label}>Let us talk</span>
        <h2 className={styles.heading}>Have a project in mind?</h2>
        <p className={styles.sub}>I am open to freelance projects, full-time roles, and interesting collaborations.</p>
        <div className={styles.actions}>
          <a href="mailto:you@email.com" className={styles.cta}>Get in touch <span className={styles.arrow}>→</span></a>
          <a href="/links" className={styles.ghost}>View all links</a>
        </div>
      </motion.div>
    </section>
  )
}
