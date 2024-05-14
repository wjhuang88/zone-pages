'use client'

import AsideList from './aside-list'

import styles from './Aside.module.css'

export default function Aside({ recommendPosts, latestPosts }) {

  const baseDuration = 0.5

  return (
    <div className={styles.aside}>
      <div className={styles.motto + ' ' + styles.anim} style={{ animationDuration: baseDuration + 's' }}>
        <h2>铭</h2>
        <p>人活着是没有意义的，但是，活下去的话说不定会找到有趣的事。</p>
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
}