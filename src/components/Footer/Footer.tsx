import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Austin Ayers. Built with passion and lots of coffee.</p>
      <p>
        Basketball Image: Photo by{' '}
        <a href="https://unsplash.com/@kaost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
          Kylie Osullivan
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/brown-and-black-basketball-ball-BfaBLVCBTI8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
      <p>
        Code Image: Photo by{' '}
        <a href="https://unsplash.com/@walkator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
          Walkator
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/text-klMii3cR9iI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
    </footer>
  )
}
