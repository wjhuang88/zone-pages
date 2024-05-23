import { PostList } from '@components'
import { getPostList } from '@/apis'

export default async function Home() {

  const posts = await getPostList()

  return <>
    <main className="main">
      <PostList posts={posts} />
    </main>
  </>
}