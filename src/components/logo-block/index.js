import Link from 'next/link'
import styles from './LogoBlock.module.css'

export default function LogoBlock() {
  return (
    <Link href="/">
      <a className={styles.container}>
        <h1 className={styles.title}>黄炜杰<span className={styles.titletail}>的博客</span></h1>
        <div className={styles.subtitle}>GERALD HUANG'S BLOG</div>
      </a>
    </Link>
  )
}