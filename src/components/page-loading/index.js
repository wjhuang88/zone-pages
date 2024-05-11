import Image from 'next/image'

import icon from './loading.png'
import styles from './PageLoading.module.css'

export default function PageLoading() {
  return <main className="main">
    <div className={styles.loadingBlock}>
      <span className={styles.loadingSpan}>
        <Image className={styles.loadingIcon} width={50} height={50} src={icon} alt="Loading..." />
      </span>
    </div>
  </main>
}