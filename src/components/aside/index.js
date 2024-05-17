'use client'

import React, { useEffect, useState } from 'react'
import { load } from 'jinrishici'

import AsideList from './aside-list'
import { LOADING_ICON_BASE64 } from '@config'

import styles from './Aside.module.css'

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

export default React.memo(function Aside({ recommendPosts, latestPosts }) {

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

  const baseDuration = 0.5

  const [motto, setMotto] = useState('')

  useEffect(laodMotto, [])

  return (
    <div className={styles.aside}>
      <div onClick={laodMotto} className={styles.motto + ' ' + styles.anim} style={{ animationDuration: baseDuration + 's' }}>
        <h2 style={{position: 'relative'}}>每日诗词<span style={motto ? {} : loadingStyle}></span></h2>
        <p>{motto}</p>
      </div>
      <div>
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