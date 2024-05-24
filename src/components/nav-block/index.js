import Link from 'next/link'
import styles from './NavBlock.module.scss'

export default function NavBlock({ title, subtitle, href, selected, sort }) {
  const blockClass = selected ? `${styles.navBlock} ${styles.selectedBlockText} ${styles.selectedBlockBorder}` : styles.navBlock
  const titleClass = selected ? `${styles.navTitle} ${styles.selectedBlockText}` : styles.navTitle
  const subtitleClass = selected ? `${styles.navSubtitle} ${styles.selectedBlockBorder}` : styles.navSubtitle

  const animDuration = sort / 8 + 0.4

  return (
    <Link href={href} className={blockClass} style={{ animationDuration: animDuration + 's' }}>
      <div className={titleClass}>{title}</div>
      <div className={subtitleClass}>{subtitle}</div>
    </Link>
  )
}