import Link from 'next/link'
import styles from './Aside.module.css'

export default function AsideList({ posts }) {
  return (
    <ul className={styles.list}>
      {posts?.map((item, index) => (
        <li style={{marginTop: index !== 0 ? 8 : 0}} key={index}>
          <img src="/assets/icons/article.svg" />
          <Link href="/posts/[path]" as={`/posts/${item.path}`}>
            <a className={styles.link}>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}