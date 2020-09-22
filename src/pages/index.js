import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/Home.module.css'
import { getPostList } from '@request'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>黄炜杰的博客 | Gerald Huang's blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='http://cdn.repository.webfont.com/webfonts/nomal/140999/29782/5f6a0639f629d80cc02be8c2.css' rel='stylesheet' type='text/css' />
        <link href='http://cdn.repository.webfont.com/webfonts/nomal/140999/47082/5f6a0561f629d80cc02be8be.css' rel='stylesheet' type='text/css' />
      </Head>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>黄炜杰<span className={styles.titletail}>的博客</span></h1>
          <div className={styles.subtitle}>GERALD HUANG</div>
        </div>
        <nav className={styles.nav}>
          <a className={styles.navBlock}>
            <div className={styles.navTitle}>首页</div>
            <div className={styles.navSubtitle}>INDEX</div>
          </a>
          <a className={styles.navBlock}>
            <div className={styles.navTitle}>关于我</div>
            <div className={styles.navSubtitle}>ABOUT ME</div>
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        {posts.map(post => <Link key={`post-${post.path}`} href="/posts/[path]" as={`/posts/${post.path}`}><a>{post.title}</a></Link>)}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
