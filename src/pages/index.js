import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/Home.module.css'
import { getPostList } from '@request'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          站点玩命建设中。。。
        </h1>
        <br />
        {posts.map(post => <Link key={`post-${post.path}`} href="/posts/[path]" as={`/posts/${post.path}`}><a>{post.title}</a></Link>)}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
