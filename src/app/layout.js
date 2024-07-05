import localFont from 'next/font/local'
import { PageHeader, Aside, PageFooter } from '@components'
import { DEFAULT_TITLE } from '@/common-config'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'

import styles from '@styles/fonts/Fonts.module.scss'

import '@styles/globals.scss'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

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
          <main className="main">{children}</main>
          <Aside />
        </div>
        <PageFooter />
        <WindbellWidget />
        <CatWidget />
      </body>
    </html>
  )
}