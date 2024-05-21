import { getPost, getMeta } from '@/apis'
import Post from './post'

export default async function Page({ params }) {
  const postMeta = await getMeta(params.path)
  const postContent = await getPost(params.path, postMeta.update_time)
  const postData = {
    ...postMeta,
    data: postContent
  }

  return <Post postData={postData} />

}