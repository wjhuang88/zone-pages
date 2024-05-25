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

export default React.memo(function FloatPanel({ recommendPosts, latestPosts, speed }) {
  // 是否进入固定侧边栏状态
  const [sideStyle, setSideStyle] = useState({})

  let fixed = false;
  const scrollAction = e => {
    const offset = e.srcElement.scrollingElement.scrollTop
    if (!fixed && offset >= 223) {
      fixed = true
      setSideStyle(fixedStyle)
    } else if (fixed && offset < 223) {
      fixed = false
      setSideStyle({})
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
    <div className={styles.asidePanel + ' ' + styles.anim} style={{ animationDuration: (speed + 0.1) + 's' }}>
      <h2>推荐</h2>
      <AsideList posts={recommendPosts} />
    </div>
    <div className={styles.asidePanel + ' ' + styles.anim} style={{ animationDuration: (speed + 0.2) + 's' }}>
      <h2>最新发表</h2>
      <AsideList posts={latestPosts} />
    </div>
  </div>
})