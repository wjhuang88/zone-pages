import { getPost, getMeta } from '@/apis'
import Post from './post'

export default async function Page({ params }) {
  const postHtml = await getPost(params.path)
  const postMeta = await getMeta(params.path)
  const postData = {
    ...postMeta,
    contentHtml: postHtml.replace(/<img\s+src\s*="(.*)"/g, `<img src="/assets?img=${postMeta.parent}/$1"`)
  }

  return <Post postData={postData} />

}