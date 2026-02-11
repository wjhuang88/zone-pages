'use client';

import Link from 'next/link'

import { useCallback, useState, memo, useMemo } from 'react'
import { EyeIcon, MessageIcon, TagIcon } from '../icons'
import { LOADING_ICON_BASE64 } from '@config'
import styles from './PostList.module.scss'

function PostListItem({ meta, sort }) {

  const [loading, setLoading] = useState(false)

  const image = meta.img || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSIxNTAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IndoaXRlIiBkeD0iMCB5PSI0MCIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzI0NDkwMCI+UG9zdDwvdGV4dD48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQ9bWFya2V0eXBlci11c2VyU3R5bGUnKT48cmVjdCB4PSIzMDAiIHk9IjMwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
  const path = meta.id
  const cat = meta.parent
  const title = meta.title
  const des = meta.bref
  const date = meta.createTime
  const shortDate = meta.createDate
  const tags = Array.isArray(meta.tags) ? meta.tags.join('/') : ''

  const animStyle = useMemo(() => ({
    animationDuration: Math.min((sort / 8) + 0.6, 2) + 's'
  }), [sort])

  const bgStyle = useMemo(() => ({
    backgroundImage: `url(${image})`
  }), [image])

  const loadingStyle = loading ? {
    background: `url('${LOADING_ICON_BASE64}') no-repeat center / contain`,
    animation: 'rotate-icon infinite .6s steps(16)',
    display: 'inline-block',
    height: '18px',
    width: '18px',
    verticalAlign: 'text-top',
    marginLeft: '0.5em'
  } : {}

  const handleClick = useCallback(() => {
    setLoading(true)
  }, [])

  return (
    <li className={styles.postItem} style={animStyle}>
      <Link onNavigate={handleClick} key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.postImage}>
        <div style={bgStyle} />
      </Link>
      <div className={styles.postBlock}>
        <Link onNavigate={handleClick} key={`post-${cat}-${path}`} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`} className={styles.title}>
          {title}
        </Link>
        <span style={loadingStyle}></span>
        <Link onNavigate={handleClick} className={styles.des} href="/posts/[cat]/[path]" as={`/posts/${cat}/${path}`}>{des}</Link>
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

export default memo(PostListItem)