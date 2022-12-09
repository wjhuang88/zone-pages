import dayjs from 'dayjs'
import Head from 'next/head'
import { Aside } from '@components'
import { TagIcon } from '@components'
import { getPostList, getPost } from '@request'
import { readHtmlFromMd } from '@/tools/files'

import styles from './Post.module.css'

export default function Post({ postData }) {

  return (
    <>
      <Head>
        <title key="title">{postData.title} | Gerald's blog</title>
      </Head>
      <main className="main">
        <div className={styles.article}>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.subtitle}>
            <span>更新于&nbsp;{dayjs(postData.update_time).format('YYYY-MM-DD HH:mm:ss')}</span>
            <span>字数&nbsp;{postData.contentHtml.length}</span>
            <span>阅读&nbsp;{postData.read_count}</span>
            <TagIcon style={{ marginLeft: 15 }} value="疯言疯语" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const posts = await getPostList()
  const postHtml = await readHtmlFromMd('/Users/GHuang/Library/Mobile Documents/27N4MQEA55~pro~writer/Documents/随笔/樱花雪.txt')
  const postData = {
    id: 123,
    title: 'test',
    content: 'jkahfjkasdhfjkasdhfjkasdfh',
    contentHtml: postHtml,
    read_count: 10,
    bref: 'test bref',
    like_count: 20,
    commet_count: 30,
    tag_id: 888,
    create_time: 1663926534913,
    update_time: 1663926534913
  }
  return { props: { postData, posts } }
}