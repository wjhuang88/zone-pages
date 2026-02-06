import { getAbout } from '@apis'

import styles from './About.module.scss'

export default async function AboutPage() {
  const aboutContent = await getAbout()
  
  return (
    <article className={styles.article}>
      {aboutContent.result}
    </article>
  )
}