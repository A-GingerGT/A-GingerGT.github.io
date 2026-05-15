import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './About.module.css'

export function About() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="about"
      ref={ref}
      className={`fadeIn ${isVisible ? 'visible' : ''}`}
    >
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <img src="/assets/headshot.jpeg" alt="Profile Picture" className={styles.profileImage} />
        <div className={styles.aboutText}>
          <h3>Welcome!</h3>
          <p>
            My journey in software engineering started oddly enough with learning MatLab while wanting to be a
            biomedical engineer at Georgia Institute of Technology (THWg), and falling in love with tinkering and
            solving problems.
          </p>
          <p>
            This desire evolved into a career focused on learning new technologies and applying those to create
            impactful, sustainable software solutions. I believe that being an engineer in the modern world means
            being able to incorporate new technologies, including agentic LLM models, into creating reliable
            codebases that support clients and deliver exceptional products.
          </p>
          <p>
            When I'm not coding, you can find me in the gym, gaming, or living life with my family and supporting
            their passions.
          </p>
        </div>
      </div>
    </section>
  )
}
