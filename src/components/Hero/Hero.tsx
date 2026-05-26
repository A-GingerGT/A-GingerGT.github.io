import { Contact } from '../Contact/Contact'
import { scrollToSection } from '../../utils/scroll'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Austin Ayers</h1>
        <p className={styles.tagline}>Software Developer</p>
        <p>I build robust solutions to complex problems using modern technologies.</p>
        <div className={styles.ctaButtons}>
          <a
            href="#projects"
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={(e) => scrollToSection(e, '#projects')}
          >
            Personal Projects
          </a>
          <a
            href="#experience"
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={(e) => scrollToSection(e, '#experience')}
          >
            Professional Experience
          </a>
        </div>
        <Contact />
      </div>
    </section>
  )
}
