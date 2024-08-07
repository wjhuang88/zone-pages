'use client'

import React, { useEffect, useState } from 'react'

import AsideList from './aside-list'

import styles from './Aside.module.scss'

// 侧边栏fixed样式
const fixedStyle = {
  position: 'fixed',
  top: '-10px',
  width: '300px'
}

export default React.memo(function FloatPanel({ latestPosts, speed }) {
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
    window.addEventListener('scroll', scrollAction)
    return () => {
      window.removeEventListener('scroll', scrollAction)
    }
  }, [])

  return <div style={sideStyle}>
    <div className={styles.asidePanel + ' ' + styles.anim} style={{ animationDuration: (speed + 0.2) + 's' }}>
      <h2>最新发表</h2>
      <AsideList posts={latestPosts} />
    </div>
    <a style={{ display: showTips ? 'block' : 'none' }} className={styles.backtopBox} onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}></a>
  </div>
})