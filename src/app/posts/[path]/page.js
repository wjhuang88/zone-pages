import { getPost, getMeta } from '@/apis'
import Post from './post'

export default async function Page({ params }) {
  const postMeta = await getMeta(params.path)
  const postHtml = await getPost(params.path, postMeta.update_time)
  const postData = {
    ...postMeta,
    contentHtml: postHtml.replace(/<img\s+src\s*="(.*)"/g, `<img src="/proxy?img=${postMeta.parent}/$1"`)
  }

  return <Post postData={postData} />

}