import { Aside } from '@components'
import { getPostList } from '@request'

export default function About({ posts }) {

  return (
    <main className="main">
      <div style={{ margin: '150px auto' }}>敬请期待</div>
    </main>
  )
}

export async function getServerSideProps() {
  const posts = await getPostList()
  return { props: { posts } }
}