import styles from './WindbellWidget.module.scss'

export default function WindbellWidget() {
  return <div className={styles.container}>
    <div className={styles.head}></div>
    <div className={styles.tail}></div>
  </div>
}