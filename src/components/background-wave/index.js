import styles from './BackgroundWave.module.scss'

export default function BackgoundWave({opacity}) {
  return <div className={styles.bgWave} style={{ opacity: opacity ?? '1' }}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
}