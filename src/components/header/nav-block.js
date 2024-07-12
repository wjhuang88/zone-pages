'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LOADING_ICON_BASE64 } from '@config'
import styles from './PageHeader.module.scss'

const loadingStyle = {
  position: 'absolute',
  top: '20%',
  left: '20%',
  background: `url('${LOADING_ICON_BASE64}') no-repeat center / contain`,
  animation: 'rotate-icon infinite .6s steps(16)',
  height: '60%',
  width: '60%',
}

export default function NavBlock({ title, subtitle, href, sort }) {

  const selectedHref = usePathname()
  const selected = selectedHref === href

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedHref === href && loading) {
      setLoading(false)
    }
  }, [selectedHref])

  const blockClass = selected ? `${styles.navBlock} ${styles.selectedBlockText} ${styles.selectedBlockBorder}` : styles.navBlock
  const titleClass = selected ? `${styles.navTitle} ${styles.selectedBlockText}` : styles.navTitle
  const subtitleClass = selected ? `${styles.navSubtitle} ${styles.selectedBlockBorder}` : styles.navSubtitle

  const animDuration = sort / 8 + 0.4

  function clickAction() {
    if (!selected && !loading) {
      setLoading(true)
    }
  }

  return (
    <li>
      <Link onClick={() => clickAction()} prefetch={false} href={href} className={blockClass} style={{ animationDuration: animDuration + 's' }}>
        <div className={titleClass}>{title}</div>
        <div className={subtitleClass}>{subtitle}</div>
        <div style={loading ? { backgroundColor : '#fffd'} : {}} className={styles.loadingWrap}>
          <div style={loading ? loadingStyle : {}}></div>
        </div>
      </Link>
    </li>
  )
}