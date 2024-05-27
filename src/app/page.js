import { cache } from 'react'

import { PostList } from '@components'
import { getIndexData } from '@/apis'

const fetchData = cache(() => getIndexData())

export async function generateMetadata() {
  const data = await fetchData()
  return data.meta
}

export default async function Page() {

  const data = await fetchData()
  const posts = data.list

  return <PostList postsMeta={posts} />
}