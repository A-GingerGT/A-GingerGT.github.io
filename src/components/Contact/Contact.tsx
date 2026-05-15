import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Contact.module.css'

export function Contact() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="contact"
      ref={ref}
      className={`fadeIn ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.contact}>
        <h2>Get In Touch With Me</h2>
        <p>Open to discussing new projects, new opportunities, or just having a chat about emerging tech</p>
        <div className={styles.contactLinks}>
          <a href="mailto:amayers123@yahoo.com">Email</a>
          <a href="https://github.com/A-GingerGT" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/austin-ayers-b878a914b" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
