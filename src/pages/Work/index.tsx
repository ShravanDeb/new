import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../../components/layout/PageWrapper'
import { projects } from '../../data/projects'
import styles from './Work.module.css'

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Work() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))
  return (
    <PageWrapper>
      <div className={styles.page}>
        <motion.h1 className={styles.heading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>All Work</motion.h1>
        <p className={styles.sub}>{projects.length} projects across design, development, and everything in between.</p>
        <div className={styles.filters}>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)} className={`${styles.filterBtn} ${filter === tag ? styles.filterActive : ''}`}>{tag}</button>
          ))}
        </div>
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.article key={project.id} layout
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }}
                className={styles.card} whileHover={{ y: -6 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.year}>{project.year}</span>
                  {project.featured && <span className={styles.featured}>Featured</span>}
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                <div className={styles.links}>
                  {project.url    && <a href={project.url}    target="_blank" rel="noreferrer">Live ↗</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
