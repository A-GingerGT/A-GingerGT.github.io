import { useScrollNavbar } from '../../hooks/useScrollNavbar'
import { scrollToSection } from '../../utils/scroll'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export function Navbar() {
  const visible = useScrollNavbar()

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>Austin Ayers</div>
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => scrollToSection(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
