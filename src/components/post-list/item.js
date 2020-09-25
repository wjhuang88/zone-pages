import Link from 'next/link'

import styles from './PostList.module.css'

export default function PostListItem({ path, title, des }) {
  return (
    <li className={styles.postItem}>
      <Link key={`post-${path}`} href="/posts/[path]" as={`/posts/${path}`}>
        <a className={styles.title}>{title}</a>
      </Link>
      <div className={styles.des}>{des}</div>
    </li>
  )
}