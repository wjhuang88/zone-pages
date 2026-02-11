import localFont from 'next/font/local'
import { PageHeader, Aside, PageFooter, SplashScreen } from '@components'
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
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="3f49ae04-57e2-4f7f-8696-5f30c0a08c37"></script>
      </head>
      <body className={styles.bodyFont}>
        <SplashScreen />
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