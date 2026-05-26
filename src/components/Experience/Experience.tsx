import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Experience.module.css'

const EXPERIENCE = [
  {
    company: 'Orchard Software/Clinisys',
    role: 'Software Developer I',
    date: 'January 2023 - Present',
    bullets: [
      'Led development of microservices architecture serving 1M+ users',
      'Improved application performance by 40% through optimization strategies',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with cross-functional teams to deliver features on schedule',
    ],
  },
  {
    company: 'Orchard Software',
    role: 'Software Developer in Test',
    date: 'October 2021 - December 2022',
    bullets: [
      'Ensured on time, monthly release schedule was met on time',
      'Implemented automated regression test suite utilizing Docker',
      'Learned about a codebase through testing new features before release',
      'Worked in Agile environment with bi-weekly sprint cycles',
    ],
  },
]

export function Experience() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="experience"
      ref={ref}
      className={`fadeIn ${isVisible ? 'visible' : ''}`}
    >
      <h2>Experience</h2>
      <div className={styles.timeline}>
        {EXPERIENCE.map(({ company, role, date, bullets }) => (
          <div key={`${company}-${role}`} className={styles.timelineItem}>
            <h3>{company}</h3>
            <div className={styles.role}>{role}</div>
            <div className={styles.date}>{date}</div>
            <ul>
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
