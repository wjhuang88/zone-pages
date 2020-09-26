import Link from 'next/link'
import styles from './NavBlock.module.css'

export default function NavBlock({ title, subtitle, href, selected }) {
  const blockClass = selected ? `${styles.navBlock} ${styles.selectedBlockText} ${styles.selectedBlockBorder}` : styles.navBlock
  const titleClass = selected ? `${styles.navTitle} ${styles.selectedBlockText}` : styles.navTitle
  const subtitleClass = selected ? `${styles.navSubtitle} ${styles.selectedBlockBorder}` : styles.navSubtitle
  return (
    <Link href={href}>
      <a className={blockClass}>
        <div className={titleClass}>{title}</div>
        <div className={subtitleClass}>{subtitle}</div>
      </a>
    </Link>
  )
}