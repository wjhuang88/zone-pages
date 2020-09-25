import Link from 'next/link'

import { FireIcon } from './icons'
import styles from './PostList.module.css'

export default function PostListItem({ path, title, date, des, img }) {
  const image = img || 'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'

  return (
    <li className={styles.postItem}>
      <Link key={`post-${path}`} href="/posts/[path]" as={`/posts/${path}`}>
        <a className={styles.postImage}>
          <div style={{ backgroundImage: `url(${image})` }} />
        </a>
      </Link>
      <div className={styles.postBlock}>
        <Link key={`post-${path}`} href="/posts/[path]" as={`/posts/${path}`}>
          <a className={styles.title}>{title}</a>
        </Link>
        <p className={styles.des}>{des}</p>
        <div className={styles.footer}>
          于 {date.format('YYYY-MM-DD')}
          <FireIcon style={{ marginLeft: 15 }} value="99,999" />
        </div>
      </div>
    </li>
  )
}