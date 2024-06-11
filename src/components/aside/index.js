import Motto from './motto'
import FloatPanel from './float-panel'
import BackTop from './backtop'

import styles from './Aside.module.scss'

import { getLatestList, getRecommendList } from '@/apis'

export default async function Aside() {

  // 动画速度
  const baseDuration = 0.5
  const latest = await getLatestList()
  const recommend = await getRecommendList()

  return (
    <aside className={styles.aside}>
      <Motto speed={baseDuration} />
      <FloatPanel speed={baseDuration} recommendPosts={recommend} latestPosts={latest} />
      <BackTop />
    </aside>
  )
}