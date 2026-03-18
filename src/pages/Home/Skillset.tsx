import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import styles from './Skillset.module.css'

export default function Skillset() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Skillset</h2>
      <div className={styles.grid}>
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div key={category} className={styles.group}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className={styles.category}>{category}</h3>
            <div className={styles.pills}>
              {items.map(skill => (
                <motion.span key={skill} className={styles.pill}
                  whileHover={{ scale: 1.06, backgroundColor: 'var(--color-accent)', color: '#000', borderColor: 'var(--color-accent)' }}
                  transition={{ duration: 0.15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
