import { motion } from 'framer-motion'
import styles from './QuickAbout.module.css'

export default function QuickAbout() {
  return (
    <section className={styles.section}>
      <motion.div className={styles.inner}
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <span className={styles.label}>Quick Glance</span>
        <h2 className={styles.heading}>Developer by trade.<br />Designer at heart.</h2>
        <p className={styles.body}>I am a full-stack developer with a passion for building products that are both technically robust and beautifully designed. I thrive at the intersection of code and creativity.</p>
        <p className={styles.body}>When I am not coding, you will find me exploring new technologies, contributing to open source, or sketching out new product ideas.</p>
        <a href="/about" className={styles.cta}>Full story →</a>
      </motion.div>
    </section>
  )
}
