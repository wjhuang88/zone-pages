import Head from 'next/head'
import { LogoBlock, NavBlock, PostList } from '@components'
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
      <header className={styles.header}>
        <LogoBlock />
        <nav className={styles.nav}>
          <NavBlock title="首页" subtitle="HOME" href="/" />
          <NavBlock title="关于我" subtitle="ABOUT ME" href="/about" />
        </nav>
      </header>
      <main className={styles.main}>
        <PostList posts={posts} />
        <div className={styles.aside}></div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
