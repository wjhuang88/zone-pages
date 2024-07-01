import Link from 'next/link'

import { EyeIcon, MessageIcon, TagIcon } from '../icons'
import styles from './PostList.module.scss'

export default function PostListItem({ meta, sort }) {
  const image = meta.img || 'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  const path = meta.id
  const cat = meta.parent
  const title = meta.title
  const des = meta.bref
  const date = meta.createTime
  const shortDate = meta.createDate
  const tags = Array.isArray(meta.tags) ? meta.tags.join('/') : ''

  const animDuration = Math.min((sort / 8) + 0.6, 2)

  return (
    <li className={styles.postItem} style={{ animationDuration: animDuration + 's' }}>
      <Link prefetch={false} key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.postImage}>
        <div style={{ backgroundImage: `url(${image})` }} />
      </Link>
      <div className={styles.postBlock}>
        <Link prefetch={false} key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.des}>{des}</p>
        <div className={styles.footer}>
          <span className={styles.datetime}>发表于 {date}</span>
          <span className={styles.shortdate}>发表于 {shortDate}</span>
          <MessageIcon className={styles.iconItem} value="0" /> {/*recommend*/}
          <EyeIcon className={styles.iconItem} value="0" /> {/*read*/}
          <TagIcon className={styles.iconItem} value={tags} /> {/*tags*/}
        </div>
      </div>
    </li>
  )
}