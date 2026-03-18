import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
      {children}
    </motion.div>
  )
}
