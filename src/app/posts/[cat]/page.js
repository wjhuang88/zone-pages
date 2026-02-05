import { cache } from 'react'

import { DEFAULT_TITLE } from '@/common-config'
import { PostList } from '@components'
import { getCategoryList } from '@apis'

const fetchData = cache((cat) => getCategoryList(cat))

export async function generateMetadata({ params }) {
  const { cat } = await params
  return {
    title: `${cat} | ${DEFAULT_TITLE}`
  }
}

export default async function Page({ params }) {
  const { cat } = await params
  const posts = await fetchData(cat)

  return (
    <PostList postsMeta={posts} />
  )
}