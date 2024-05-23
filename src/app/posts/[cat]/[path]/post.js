import { TagIcon } from '@components'

import styles from './Post.module.css'

export default function Post({ postData }) {

  return (
    <div className={styles.article}>
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.subtitle}>
        <span>更新于&nbsp;{postData.update_time}</span>
        <span>字数&nbsp;{postData.size}</span>
        <span>阅读&nbsp;{postData.read_count}</span>
        <TagIcon style={{ marginLeft: 15 }} value="疯言疯语" />
      </div>
      {postData.compomnents}
    </div>
  );
}