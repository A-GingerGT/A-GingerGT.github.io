import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'World Markets Arbitrage Dashboard',
    description:
      'Project designed to visualize and automate trades on arbitrage opportunities between real world market websites built using a virtual coding assistant running Claude Code\'s Sonnet Model.',
    image: '/assets/code.jpg',
    imageAlt: 'Code project',
    tags: ['JavaScript', 'Electron', 'Claude'],
    link: '#',
  },
  {
    title: 'NBA Statistics Analyzer',
    description: 'Full stack utilizing python application using a web api to fetch NBA statistics.',
    image: '/assets/basketball.jpg',
    imageAlt: 'Basketball',
    tags: ['Python', 'MySQL', 'Flask'],
    link: '#',
  },
  {
    title: 'Resume/Portfolio Website',
    description:
      'A responsive, professional website designed to showcase my web skills and creatively array my professional portfolio.',
    image: '/assets/code.jpg',
    imageAlt: 'Code project',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
]

export function Projects() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="projects"
      ref={ref}
      className={`fadeIn ${isVisible ? 'visible' : ''}`}
    >
      <h2>Featured Projects</h2>
      <div className={styles.projectsGrid}>
        {PROJECTS.map(({ title, description, image, imageAlt, tags, link }) => (
          <div key={title} className={styles.projectCard}>
            <img src={image} alt={imageAlt} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className={styles.projectTags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={link} target="_blank" rel="noreferrer">Codebase</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
