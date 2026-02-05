import { cache } from 'react'

import { DEFAULT_TITLE } from '@/common-config'
import { getPost } from '@/apis'
import { TagIcon, GitalkPanel } from '@components'

import styles from './Post.module.scss'

const fetchData = cache((cat, path) => getPost(cat, path))

export async function generateMetadata({ params }) {
  const paramsSync = await params
  const postData = await fetchData(paramsSync.cat, paramsSync.path)
  return {
    title: `${postData.title} | ${DEFAULT_TITLE}`
  }
}

export default async function Page({ params }) {
  const paramsSync = await params
  const postData = await fetchData(paramsSync.cat, paramsSync.path)
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.subtitle}>
        <span>发表于&nbsp;{postData.createTime}</span>
        <span>字数&nbsp;{postData.size}</span>
        <TagIcon style={{ marginLeft: 15 }} value={postData.tags} />
      </div>
      {postData.compomnents}
      <footer>
        <GitalkPanel id={`${paramsSync.cat}_${paramsSync.path}`} />
      </footer>
    </article>
  )
}