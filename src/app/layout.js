import localFont from 'next/font/local'
import { PageHeader, Aside, PageFooter } from '@components'
import { DEFAULT_TITLE } from '@/common-config'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'
import { getNavItems } from '@apis'

import styles from '@styles/fonts/Fonts.module.scss'

import '@styles/globals.scss'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const quicksand = localFont({ src: '../styles/fonts/Quicksand-VariableFont_wght.ttf', variable: '--font-quicksand' })

export const metadata = {
  title: DEFAULT_TITLE
}

export default async function RootLayout({ children }) {
  const navItems = await getNavItems()

  return (
    <html className={quicksand.variable} lang="zh-Hans">
      <body className={styles.bodyFont}>
        <PageHeader navItems={navItems} />
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