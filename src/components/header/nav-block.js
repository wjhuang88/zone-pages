'use client'

import { memo, useCallback, useEffect, useMemo, useState } from 'react'
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

function NavBlock({ title, subtitle, href, sort }) {

  const selectedHref = usePathname()
  const selected = selectedHref === href || selectedHref.startsWith(href + '/')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedHref === href && loading) {
      setLoading(false)
    }
  }, [selectedHref])

  const blockClass = selected ? `${styles.navBlock} ${styles.selectedBlockText} ${styles.selectedBlockBorder}` : styles.navBlock
  const titleClass = selected ? `${styles.navTitle} ${styles.selectedBlockText}` : styles.navTitle
  const subtitleClass = selected ? `${styles.navSubtitle} ${styles.selectedBlockBorder}` : styles.navSubtitle

  const animStyle = useMemo(() => ({
    animationDuration: (sort / 8 + 0.4) + 's'
  }), [sort])

  const loadingPositionStyle = useMemo(() => loading ? loadingStyle : {}, [loading])
  const loadingBgStyle = useMemo(() => loading ? { backgroundColor: '#fffd' } : {}, [loading])

  const clickAction = useCallback(() => {
    if (!selected && !loading) {
      setLoading(true)
    }
  }, [selected, loading])

  return (
    <li>
      <Link onNavigate={clickAction} href={href} className={blockClass} style={animStyle}>
        <div className={titleClass}>{title}</div>
        <div className={subtitleClass}>{subtitle}</div>
        <div style={loadingBgStyle} className={styles.loadingWrap}>
          <div style={loadingPositionStyle}></div>
        </div>
      </Link>
    </li>
  )
}

export default memo(NavBlock)