import Image from 'next/image'

import { LOADING_ICON_BASE64 } from '@config'

import styles from './PageLoading.module.css'

export default function PageLoading() {
  return <main className="main">
    <div className={styles.loadingBlock}>
      <span className={styles.loadingSpan}>
        <Image className={styles.loadingIcon} width={50} height={50}
          src={LOADING_ICON_BASE64}
          alt="Loading..."
        />
      </span>
    </div>
  </main>
}