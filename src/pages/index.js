import { PostList, Aside } from '@components'
import { getPostList } from '@request'

export default function Home({ posts }) {

  return (
    <main className="main">
      <PostList posts={posts} />
    </main>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}
