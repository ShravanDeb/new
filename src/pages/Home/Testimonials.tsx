import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What people say</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <motion.blockquote key={t.id} className={styles.card}
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className={styles.quote}>"</span>
            <p className={styles.text}>{t.quote}</p>
            <footer className={styles.author}>
              <strong>{t.author}</strong>
              <span>{t.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
