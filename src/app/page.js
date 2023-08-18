import Home from './home'
import { getPostList } from '@/apis'

export default async function Page() {

  const posts = await getPostList()

  return <Home posts={posts} />
}