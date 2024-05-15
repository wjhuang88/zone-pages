'use client'

import { TagIcon } from '@components'

import styles from './Post.module.css'

export default function Post({ postData }) {
  return (
    <main className="main">
      <div className={styles.article}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.subtitle}>
          <span>更新于&nbsp;{postData.update_time}</span>
          <span>字数&nbsp;{postData.contentHtml.length}</span>
          <span>阅读&nbsp;{postData.read_count}</span>
          <TagIcon style={{ marginLeft: 15 }} value="疯言疯语" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </main>
  );
}