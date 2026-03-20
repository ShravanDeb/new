import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import styles from './Hero.module.css'
import Beams from './Beams'

const container: Variants = { 
  hidden: {}, 
  visible: { transition: { staggerChildren: 0.15 } } 
}

const item: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
  },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div variants={container} initial="hidden" animate="visible" className={styles.content}>
        
        <motion.h1 variants={item} className={styles.headline}>
          I build<br />
          <em className={styles.accent}>Digital</em> things<br />
          that <em className={styles.accent}>Think !</em>
        </motion.h1>

        <motion.p variants={item} className={styles.sub}>
          AI/ML student and developer crafting intelligent, fast, and purposeful web experiences.
        </motion.p>
        
        <motion.div variants={item} className={styles.cta}>
          <a href="/work"  className={styles.btnPrimary}>See my work</a>
          <a href="/about" className={styles.btnGhost}>About me →</a>
        </motion.div>
      </motion.div>
      
      {/* orbContainer clips background layers independently, freeing .hero from overflow:hidden */}
      <div className={styles.orbContainer} aria-hidden="true">

        {/* Beams sit at the lowest layer — beneath the soft orb glows */}
        <div className={styles.beamsWrapper}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* Orbs overlay the beams for a soft depth haze */}
        <div className={styles.orb}  />
        <div className={styles.orb2} />
      </div>
    </section>
  )
}