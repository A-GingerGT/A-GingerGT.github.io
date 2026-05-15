import type { MouseEvent } from 'react'

export function scrollToSection(e: MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }
}
