import { motion } from 'framer-motion'
import PageWrapper from '../../components/layout/PageWrapper'
import { uses } from '../../data/uses'
import styles from './Uses.module.css'

export default function Uses() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <motion.h1 className={styles.heading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Uses</motion.h1>
        <p className={styles.sub}>The hardware, software, and services I use daily to do my best work.</p>
        {Object.entries(uses).map(([category, items], ci) => (
          <section key={category} className={styles.section}>
            <h2 className={styles.category}>{category}</h2>
            <div className={styles.list}>
              {items.map((item, i) => (
                <motion.div key={item.name} className={styles.item}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: (ci * 0.05) + (i * 0.07) }}
                >
                  <div className={styles.itemInfo}>
                    <strong>{item.name}</strong>
                    <span>{item.desc}</span>
                  </div>
                  {item.url && <a href={item.url} target="_blank" rel="noreferrer" className={styles.itemLink}>Visit ↗</a>}
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageWrapper>
  )
}
