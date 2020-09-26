import Head from 'next/head'
import { PageHeader, PostList } from '@components'
import styles from '@styles/Home.module.css'
import { getPostList } from '@request'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>黄炜杰的博客 | Gerald's blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://cdn.repository.webfont.com/webfonts/nomal/140999/29782/5f6a0639f629d80cc02be8c2.css' rel='stylesheet' type='text/css' />
        <link href='https://cdn.repository.webfont.com/webfonts/nomal/140999/47082/5f6a0561f629d80cc02be8be.css' rel='stylesheet' type='text/css' />
      </Head>
      <PageHeader selectedHref="/" />
      <main className={styles.main}>
        <PostList posts={posts} />
        <div className={styles.aside}>
          当你觉得自己对一件事情确信无疑的时候，你要么是真的洞悉这件事的全部真相，要么是因为你对它一无所知。
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
