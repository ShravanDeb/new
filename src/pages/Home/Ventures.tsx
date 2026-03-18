import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import styles from './Ventures.module.css'

export default function Ventures() {
  const featured = projects.filter(p => p.featured)
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Selected Ventures</h2>
        <a href="/work" className={styles.viewAll}>View all work →</a>
      </div>
      <div className={styles.grid}>
        {featured.map((project, i) => (
          <motion.article key={project.id} className={styles.card}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className={styles.cardTop}>
              <span className={styles.year}>{project.year}</span>
              <div className={styles.tags}>{project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}</div>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.links}>
              {project.url    && <a href={project.url}    target="_blank" rel="noreferrer" className={styles.link}>Live ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>GitHub ↗</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
