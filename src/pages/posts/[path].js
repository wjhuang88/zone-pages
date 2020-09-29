import { PageHeader, Aside } from '@components'
import { EyeIcon, HeartIcon, MessageIcon, TagIcon } from '@components'
import { getPostList, getPost } from '@request'

import styles from './Post.module.css'

export default function Post({ postData, posts }) {

  return (
    <div className="container">
      <PageHeader />
      <main className="main">
        <div className={styles.article}>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.subtitle}>
            <span className={styles.time}>发表于 {postData.date}</span>
            <MessageIcon style={{ marginLeft: 15 }} value="999" />
            <EyeIcon style={{ marginLeft: 15 }} value="99,999" />
            <HeartIcon style={{ marginLeft: 15 }} value="999" />
            <TagIcon style={{ marginLeft: 15 }} value="疯言疯语" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <Aside recommendPosts={posts} latestPosts={posts} />
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const posts = await getPostList()
  const postData = await getPost(params.path)
  return { props: { postData, posts } }
}