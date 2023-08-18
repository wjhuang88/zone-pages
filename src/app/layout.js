import { PageHeader, Aside } from '@components'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'
import { getPostList } from '@/apis'

import '@styles/globals.css'

export const metadata = {
  title: 'Gerald\'s Blog'
}

export default async function RootLayout({ children }) {

  const posts = await getPostList()

  return (
    <html lang="en">
      <body>
        <PageHeader />
        <div className='page-wrap'>
          {children}
          <Aside recommendPosts={posts} latestPosts={posts} />
        </div>
        <WindbellWidget />
        <CatWidget />
      </body>
    </html>
  )
}