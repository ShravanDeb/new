import { motion } from 'framer-motion'
import PageWrapper from '../../components/layout/PageWrapper'
import styles from './About.module.css'

const experience = [
  { year: '2023 - Now',  role: 'Senior Frontend Developer', company: 'TechCorp',  desc: 'Leading frontend architecture for a B2B SaaS platform.' },
  { year: '2021 - 2023', role: 'Full Stack Developer',       company: 'StartupX',  desc: 'Built core product features and API integrations.' },
  { year: '2019 - 2021', role: 'Junior Developer',           company: 'Agency Y',  desc: 'Delivered client websites and web applications.' },
]

export default function About() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <header className={styles.header}>
          <motion.h1 className={styles.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            About Me
          </motion.h1>
        </header>
        <div className={styles.grid}>
          <motion.section className={styles.bio} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p>Hi, I am [Your Name], a full-stack developer and designer. I have been building for the web for over 5 years, working with startups, agencies, and clients across the globe.</p>
            <p>I care deeply about the craft of building software — not just making things that work, but making things that feel good to use.</p>
            <p>Outside of work, I am passionate about open source, generative art, and the occasional long hike. Always happy to connect with fellow builders.</p>
          </motion.section>
          <div className={styles.sidebar}>
            <motion.div className={styles.infoBox} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className={styles.infoRow}><span>Location</span><strong>Your City, Country</strong></div>
              <div className={styles.infoRow}><span>Availability</span><strong className={styles.green}>Open to work</strong></div>
              <div className={styles.infoRow}><span>Timezone</span><strong>UTC+5:30</strong></div>
              <div className={styles.infoRow}><span>Languages</span><strong>English, Hindi</strong></div>
            </motion.div>
          </div>
        </div>
        <section className={styles.expSection}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((e, i) => (
              <motion.div key={i} className={styles.expItem} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className={styles.year}>{e.year}</span>
                <div className={styles.expContent}>
                  <h3>{e.role}</h3>
                  <span className={styles.company}>{e.company}</span>
                  <p>{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
