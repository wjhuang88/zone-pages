'use client'

import { useEffect, useState } from 'react'
import styles from './SplashScreen.module.scss'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setFading(true)
      setTimeout(() => {
        setVisible(false)
      }, 800)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`${styles.splashScreen} ${fading ? styles.fading : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.splashAnimation}>
          <div className={styles.loaderCenter}>
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="4" className={styles.loaderCircle} />
            </svg>
          </div>
        </div>
        
        <h1 className={styles.splashTitle}>Gerald's Blog</h1>
        <p className={styles.splashSubtitle}>Loading content...</p>
      </div>
    </div>
  )
}
