'use client';

import Link from 'next/link'

import { useState } from 'react'
import { EyeIcon, MessageIcon, TagIcon } from '../icons'
import { LOADING_ICON_BASE64 } from '@config'
import styles from './PostList.module.scss'

export default function PostListItem({ meta, sort }) {

  const [loading, setLoading] = useState(false)

  const image = meta.img || 'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  const path = meta.id
  const cat = meta.parent
  const title = meta.title
  const des = meta.bref
  const date = meta.createTime
  const shortDate = meta.createDate
  const tags = Array.isArray(meta.tags) ? meta.tags.join('/') : ''

  const animDuration = Math.min((sort / 8) + 0.6, 2)

  const loadingStyle = loading ? {
    background: `url('${LOADING_ICON_BASE64}') no-repeat center / contain`,
    animation: 'rotate-icon infinite .6s steps(16)',
    display: 'inline-block',
    height: '18px',
    width: '18px',
    verticalAlign: 'text-top',
    marginLeft: '0.5em'
  } : {}

  return (
    <li className={styles.postItem} style={{ animationDuration: animDuration + 's' }}>
      <Link onClick={() => setLoading(true)} prefetch={false} key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.postImage}>
        <div style={{ backgroundImage: `url(${image})` }} />
      </Link>
      <div className={styles.postBlock}>
        <Link onClick={() => setLoading(true)} prefetch={false} key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.title}>
          {title}
        </Link>
        <span style={loadingStyle}></span>
        <Link onClick={() => setLoading(true)} prefetch={false} className={styles.des} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`}>{des}</Link>
        <div className={styles.footer}>
          <span className={styles.datetime}>发表于 {date}</span>
          <span className={styles.shortdate}>{shortDate}</span>
          <MessageIcon className={styles.iconItem} value="0" /> {/*recommend*/}
          <EyeIcon className={styles.iconItem} value="0" /> {/*read*/}
          <TagIcon className={styles.iconItem} value={tags} /> {/*tags*/}
        </div>
      </div>
    </li>
  )
}