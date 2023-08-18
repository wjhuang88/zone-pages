'use client'

import { PostList } from '@components'

export default async function Home({ posts }) {

  return <>
    <main className="main">
      <PostList posts={posts} />
    </main>
  </>
}