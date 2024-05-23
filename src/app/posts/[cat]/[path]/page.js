import { getPost } from '@/apis'
import Post from './post'

export default async function Page({ params }) {
  const postData = await getPost(params.cat, params.path)
  return <main className="main">
    <Post postData={postData} />
  </main>
}