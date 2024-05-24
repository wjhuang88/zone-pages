'use client'

import React, { useEffect, useState } from 'react'
import { load } from 'jinrishici'

import AsideList from './aside-list'
import { LOADING_ICON_BASE64 } from '@config'

import styles from './Aside.module.scss'

// 格言诗句载入中的样式
const loadingStyle = {
  position: 'absolute',
  top: '0',
  left: '4.5em',
  background: `url('${LOADING_ICON_BASE64}') no-repeat center / contain`,
  animation: `${styles['rotate-icon']} infinite .6s steps(16)`,
  display: 'block',
  height: '1em',
  width: '1em'
}

// 侧边栏fixed样式
const fixedStyle = {
  position: 'fixed',
  top: '-10px',
  width: '300px'
}

export default React.memo(function Aside({ recommendPosts, latestPosts }) {

  // 动画速度
  const baseDuration = 0.5

  // 格言诗句的内容
  const [motto, setMotto] = useState('')

  // 是否进入固定侧边栏状态
  const [sideStyle, setSideStyle] = useState({})

  // 防抖参数
  let shake
  const laodMotto = () => {
    if (shake) {
      clearTimeout(shake)
    }
    shake = setTimeout(() => {
      setMotto('')
      load(result => {
        setMotto(result.data.content)
      })
    }, 50)
  }

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

  useEffect(laodMotto, [])
  useEffect(() => {
    setSideStyle(window.scrollY >= 223 ? fixedStyle : {})
    window.addEventListener('scroll', scrollAction)
    return () => {
      window.removeEventListener('scroll', scrollAction)
    }
  }, [])

  return (
    <div className={styles.aside}>
      <div onClick={laodMotto} className={styles.motto + ' ' + styles.anim} style={{ animationDuration: baseDuration + 's' }}>
        <h2 style={{position: 'relative'}}>每日诗词<span style={motto ? {} : loadingStyle}></span></h2>
        <p>{motto}</p>
      </div>
      <div style={sideStyle}>
        <div className={styles.asidePanel + ' ' + styles.anim} style={{ animationDuration: (baseDuration + 0.1) + 's' }}>
          <h2>推荐</h2>
          <AsideList posts={recommendPosts} />
        </div>
        <div className={styles.asidePanel + ' ' + styles.anim} style={{ animationDuration: (baseDuration + 0.2) + 's' }}>
          <h2>最新发表</h2>
          <AsideList posts={latestPosts} />
        </div>
      </div>
    </div>
  )
})