'use client'

import AsideList from './aside-list'

import styles from './Aside.module.css'

export default function Aside({ recommendPosts, latestPosts }) {

  return (
    <div className={styles.aside}>
      <div className={styles.motto}>
        <h2>铭</h2>
        <p>人活着是没有意义的，但是，活下去的话说不定会找到有趣的事。</p>
      </div>
      <div className={styles.asidePanel}>
        <h2>推荐</h2>
        <AsideList posts={recommendPosts} />
      </div>
      <div className={styles.asidePanel}>
        <h2>最新发表</h2>
        <AsideList posts={latestPosts} />
      </div>
    </div>
  )
}