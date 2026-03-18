import { motion } from 'framer-motion'
import PageWrapper from '../../components/layout/PageWrapper'
import { socialLinks } from '../../data/links'
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'
import styles from './Links.module.css'

const iconMap: Record<string, React.ReactNode> = {
  FiGithub:   <FiGithub size={20} />,
  FiTwitter:  <FiTwitter size={20} />,
  FiLinkedin: <FiLinkedin size={20} />,
  FiMail:     <FiMail size={20} />,
}

export default function Links() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <motion.h1 className={styles.heading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Find me on</motion.h1>
        <p className={styles.sub}>All the places you can reach me or follow my work.</p>
        <div className={styles.list}>
          {socialLinks.map((link, i) => (
            <motion.a key={link.platform} href={link.url} target="_blank" rel="noreferrer"
              className={styles.item}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }} whileHover={{ x: 8 }}
            >
              <span className={styles.icon}>{iconMap[link.icon] ?? <FiExternalLink size={20} />}</span>
              <div className={styles.info}>
                <span className={styles.platform}>{link.platform}</span>
                <span className={styles.desc}>{link.description}</span>
              </div>
              <span className={styles.handle}>{link.handle}</span>
              <FiExternalLink className={styles.ext} size={14} />
            </motion.a>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
