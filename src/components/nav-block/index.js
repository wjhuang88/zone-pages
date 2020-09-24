import Link from 'next/link'
import styles from './NavBlock.module.css'

export default function NavBlock({ title, subtitle, href }) {
  return (
    <Link href={href}>
      <a className={styles.navBlock}>
        <div className={styles.navTitle}>{title}</div>
        <div className={styles.navSubtitle}>{subtitle}</div>
      </a>
    </Link>
  )
}