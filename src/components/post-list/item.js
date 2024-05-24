import Link from 'next/link'

import { EyeIcon, HeartIcon, MessageIcon, TagIcon } from '../icons'
import styles from './PostList.module.scss'

export default function PostListItem({ meta, sort }) {
  const image = meta.img || 'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  const path = meta.id
  const cat = meta.parent
  const title = meta.title
  const des = meta.bref
  const date = meta.create_time

  const animDuration = Math.min((sort / 8) + 0.6, 2)

  return (
    <li className={styles.postItem} style={{ animationDuration: animDuration + 's' }}>
      <Link key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.postImage}>
        <div style={{ backgroundImage: `url(${image})` }} />
      </Link>
      <div className={styles.postBlock}>
        <Link key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.des}>{des}</p>
        <div className={styles.footer}>
          <span className={styles.time}>发表于 {date}</span>
          <MessageIcon style={{ marginLeft: 15 }} value="999" />
          <EyeIcon style={{ marginLeft: 15 }} value="99,999" />
          <HeartIcon style={{ marginLeft: 15 }} value="999" />
          <TagIcon style={{ marginLeft: 15 }} value="疯言疯语" />
        </div>
      </div>
    </li>
  )
}