import Link from 'next/link'
import styles from './Aside.module.scss'

export default function AsideList({ posts }) {
  return (
    <ul className={styles.list}>
      {posts?.map((item, index) => (
        <li style={{marginTop: index !== 0 ? 8 : 0}} key={index}>
          <img width="14px" height="14px" src="/assets/icons/article.svg" />
          <Link href="/posts/[cat]/[path]" as={`/posts/${item.parent}/${item.id}`} className={styles.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}