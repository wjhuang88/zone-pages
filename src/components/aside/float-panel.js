'use client'

import { memo, useCallback, useEffect, useMemo, useState } from 'react'

import AsideList from './aside-list'

import styles from './Aside.module.scss'

// 侧边栏fixed样式
const fixedStyle = {
  position: 'fixed',
  top: '-10px',
  width: '300px'
}

function FloatPanel({ latestPosts, speed }) {
  // 是否进入固定侧边栏状态
  const [sideStyle, setSideStyle] = useState({})
  const [showTips, setShowTips] = useState(false)

  let fixed = false;
  const scrollAction = e => {
    const offset = e.srcElement.scrollingElement.scrollTop
    if (!fixed && offset >= 223) {
      fixed = true
      setSideStyle(fixedStyle)
      setShowTips(true)
    } else if (fixed && offset < 223) {
      fixed = false
      setSideStyle({})
      setShowTips(false)
    }
  }

  useEffect(() => {
    setSideStyle(window.scrollY >= 223 ? fixedStyle : {})
    const opt = { passive: true }
    window.addEventListener('scroll', scrollAction, opt)
    return () => {
      window.removeEventListener('scroll', scrollAction, opt)
    }
  }, [])

  const animStyle = useMemo(() => ({
    animationDuration: (speed + 0.2) + 's'
  }), [speed])

  const arrawStyle = useMemo(() => ({
    display: showTips ? 'block' : 'none'
  }), [showTips])

  const goTop = useCallback(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }, [])

  return <div style={sideStyle}>
    <div className={styles.asidePanel + ' ' + styles.anim} style={animStyle}>
      <h2>最新发表</h2>
      <AsideList posts={latestPosts} />
    </div>
    <a style={arrawStyle} className={styles.backtopBox} onClick={goTop}></a>
  </div>
}

export default memo(FloatPanel)