import Head from 'next/head'

import { PageHeader, PostList, Aside } from '@components'
import { getPostList } from '@request'

export default function Home({ posts }) {

  return (
    <div className="container">
      <Head>
        <title>黄炜杰的博客 | Gerald's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader selectedHref="/" />
      <main className="main">
        <PostList posts={posts} />
        <Aside recommendPosts={posts} latestPosts={posts} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
