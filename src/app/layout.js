import localFont from 'next/font/local'
import { PageHeader, Aside } from '@components'
import { DEFAULT_TITLE } from '@/common-config'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'

import styles from '@styles/fonts/Fonts.module.scss'

import '@styles/globals.scss'

const quicksand = localFont({ src: '../styles/fonts/Quicksand-VariableFont_wght.ttf', variable: '--font-quicksand' })

export const metadata = {
  title: DEFAULT_TITLE
}

export default async function RootLayout({ children }) {

  return (
    <html className={quicksand.variable} lang="en">
      <body className={styles.bodyFont}>
        <PageHeader />
        <div className='page-wrap'>
          {children}
          <Aside />
        </div>
        <WindbellWidget />
        <CatWidget />
      </body>
    </html>
  )
}