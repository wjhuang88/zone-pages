import styles from './LogoBlock.module.css'

export default function LogoBlock() {
  return (
    <div>
      <h1 className={styles.title}>黄炜杰<span className={styles.titletail}>的博客</span></h1>
      <div className={styles.subtitle}>GERALD HUANG</div>
    </div>
  )
}