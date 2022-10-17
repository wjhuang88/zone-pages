import Head from 'next/head'
import { PostList } from '@components'
import { getPostList } from '@request'

export default function Home({ posts }) {

  return <>
    <Head>
      <title key="title">黄炜杰的博客 | Gerald's blog</title>
    </Head>
    <main className="main">
      <PostList posts={posts} />
    </main>
  </>
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
