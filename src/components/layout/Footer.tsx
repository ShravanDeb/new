import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} YourName. Built with React & Framer Motion.</p>
      <p className={styles.sub}>Designed and developed by me.</p>
    </footer>
  )
}
