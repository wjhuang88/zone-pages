import { GithubIcon, MailIcon } from '@components'

import styles from './PageFooter.module.scss'

export default function PageFooter() {
  return <footer className={styles.footer}>
    <span>Powered by <a className={styles.textLink} href='https://nextjs.org/' target='_blank'>Next.js</a>, build by <a className={styles.textLink} href='https://hwj.zone' target='_blank'>Gerald</a> with 💕</span>
    <span className={styles.iconRow}>
      <a className={styles.iconLink} href='https://github.com/wjhuang88' target='_blank'><GithubIcon className={styles.github} size={22} /></a>
      <a className={styles.iconLink} href='mailto:wjhuang@live.cn' target='_blank'><MailIcon className={styles.mail} size={22} /></a>
    </span>
  </footer>
}