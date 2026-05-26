import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Skills.module.css'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    items: ['HTML5 / CSS3', 'JavaScript / TypeScript', 'Electron'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'RESTful APIs'],
  },
  {
    title: 'Database & DevOps',
    items: ['MySQL', 'Docker / Kubernetes', 'CI/CD Pipelines'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git / GitHub', 'Agile / Scrum', 'Test-Driven Development', 'System Design', 'Code Review'],
  },
  {
    title: 'Lab System Knowledge',
    items: ['ASTM', 'HL7', 'Experience with Anatomic Pathology', 'POCT1-A'],
  },
  {
    title: 'LLM Coding Assets/Skills',
    items: ['Claude Code', 'GitHub Copilot', 'Instruction Files', 'Custom Prompting'],
  },
]

export function Skills() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="skills"
      ref={ref}
      className={`fadeIn ${isVisible ? 'visible' : ''}`}
    >
      <h2>Skills & Technologies</h2>
      <div className={styles.skillsGrid}>
        {SKILL_CATEGORIES.map(({ title, items }) => (
          <div key={title} className={styles.skillCategory}>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
