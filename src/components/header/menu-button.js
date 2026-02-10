import styles from './PageHeader.module.scss'

export function MenuIcon({ opened, onClick }) {
  return (
    <button className={opened ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  )
}