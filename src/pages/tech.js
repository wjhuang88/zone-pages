import Head from 'next/head'
import { getPostList } from '@request'

export default function About({ posts }) {

  return <>
    <Head>
      <title key="title">黄炜杰的博客 | Gerald's blog</title>
    </Head>
    <main className="main">
      <div style={{ margin: '150px auto' }}>敬请期待</div>
    </main>
  </>
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}