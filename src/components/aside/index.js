'use client'

import React, { useEffect, useState } from 'react'
import { load } from 'jinrishici'

import AsideList from './aside-list'

import styles from './Aside.module.css'

export default React.memo(function Aside({ recommendPosts, latestPosts }) {

  let shake

  const laodMotto = () => {
    if (shake) {
      clearTimeout(shake)
    }
    shake = setTimeout(() => {
      setLoading(true)
      setMotto('')
      load(result => {
        setMotto(result.data.content)
        setLoading(false)
      })
    }, 50)
  }

  const baseDuration = 0.5

  const [motto, setMotto] = useState('')
  const [loading, setLoading] = useState(true)

  // useEffect(laodMotto, [])

  return (
    <div className={styles.aside}>
      <div onClick={laodMotto} className={styles.motto + ' ' + styles.anim} style={{ animationDuration: baseDuration + 's' }}>
        <h2>每日诗词</h2>
        <p className={loading ? styles.loading : ''}>{motto}</p>
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