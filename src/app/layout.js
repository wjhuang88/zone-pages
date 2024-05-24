import localFont from 'next/font/local'
import { PageHeader, Aside } from '@components'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'
import { getPostList } from '@/apis'

import styles from '@styles/fonts/Fonts.module.scss'

import '@styles/globals.scss'

const quicksand = localFont({ src: '../styles/fonts/Quicksand-VariableFont_wght.ttf', variable: '--font-quicksand' })

export const metadata = {
  title: 'Gerald\'s Blog'
}

export default async function RootLayout({ children }) {

  const posts = (await getPostList()).slice(0, 5)

  return (
    <html className={quicksand.variable} lang="en">
      <body className={styles.bodyFont}>
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