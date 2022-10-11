import { PageHeader, PostList, Aside } from '@components'
import { getPostList } from '@request'

export default function Home({ posts }) {

  return (
    <div className="container">
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
