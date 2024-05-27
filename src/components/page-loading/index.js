'use client'

import Image from 'next/image'
import { useEffect } from 'react'

import { LOADING_ICON_BASE64 } from '@config'

import styles from './PageLoading.module.scss'

export default function PageLoading() {

  useEffect(() => window.scrollTo(0, 0))

  return <div className={styles.loadingBlock}>
    <span className={styles.loadingSpan}>
      <Image className={styles.loadingIcon} width={50} height={50}
        src={LOADING_ICON_BASE64}
        alt="Loading..."
      />
    </span>
  </div>
}