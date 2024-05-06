'use client'

import { PostList } from '@components'

export default function Home({ posts }) {

  return <>
    <main className="main">
      <PostList posts={posts} />
    </main>
  </>
}