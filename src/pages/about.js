import { PageHeader, Aside } from '@components'
import { getPostList } from '@request'

export default function About({ posts }) {

  return (
    <div className="container">
      <PageHeader selectedHref="/about" />
      <main className="main">
        <div style={{margin: 'auto'}}>敬请期待</div>
        <Aside recommendPosts={posts} latestPosts={posts} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}