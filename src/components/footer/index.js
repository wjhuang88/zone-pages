import { GithubIcon, MailIcon } from '@components'

import styles from './PageFooter.module.scss'

export default function PageFooter() {
  let year = new Date().getFullYear()
  return <footer className={styles.footer}>
    <span className={styles.iconRow}>
      <a className={styles.iconLink} href='https://github.com/wjhuang88' target='_blank'><GithubIcon className={styles.github} size={20} /></a>
      <a className={styles.iconLink} href='mailto:wjhuang@live.cn' target='_blank'><MailIcon className={styles.mail} size={20} /></a>
    </span>
    <span>© 2018-{year} Gerald Huang All rights reserved · <a className={styles.textLink} href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></span>
  </footer>
}