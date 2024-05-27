import { cache } from 'react'

import { DEFAULT_TITLE } from '@/common-config'
import { getPost } from '@/apis'
import Post from './post'

const fetchData = cache((cat, path) => getPost(cat, path))

export async function generateMetadata({ params }) {
  const postData = await fetchData(params.cat, params.path)
  return {
    title: `${postData.title} | ${DEFAULT_TITLE}`
  }
}

export default async function Page({ params }) {
  const postData = await fetchData(params.cat, params.path)
  return <Post postData={postData} />
}