import AsideList from './aside-list'
import TagCloud from 'react-tag-cloud'
import randomColor from 'randomcolor'

import styles from './Aside.module.css'

export default function Aside({ recommendPosts, latestPosts }) {

  const tags = [
    { tag: '标签1', weight: 10 },
    { tag: '标签2', weight: 9 },
    { tag: '标签3', weight: 9 },
    { tag: '标签4', weight: 8 },
    { tag: '标签5', weight: 6 },
    { tag: '标签6', weight: 4 },
    { tag: '标签7', weight: 3 },
    { tag: '标签8', weight: 2 },
    { tag: '标签9', weight: 2 },
    { tag: '标签10', weight: 1 },
    { tag: '标签11', weight: 1 },
    { tag: '标签12', weight: 1 },
    { tag: '标签13', weight: 1 },
  ]

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
      <div className={styles.asidePanel}>
        <TagCloud
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: () => randomColor({ hue: '#e67e22' }),
            padding: 5,
            width: '100%',
            height: 120
          }}
        >
          {tags.map((tag, index) => (
            <div key={index} style={{ fontSize: tag.weight * 3 }}>{tag.tag}</div>
          ))}
        </TagCloud>
      </div>
    </div>
  )
}