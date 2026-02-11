'use client'

import { memo, useEffect, useState } from 'react'

import styles from './Aside.module.scss'

function BackTop() {

  const [show, setShow] = useState(false)

  let fixed = false;
  const scrollAction = e => {
    const offset = e.srcElement.scrollingElement.scrollTop
    if (!fixed && offset >= 223) {
      fixed = true
      setShow(true)
    } else if (fixed && offset < 223) {
      fixed = false
      setShow(false)
    }
  }

  useEffect(() => {
    setShow(window.scrollY >= 223)
    window.addEventListener('scroll', scrollAction)
    return () => {
      window.removeEventListener('scroll', scrollAction)
    }
  }, [])

  return (
    <a style={{ display: show ? 'block' : 'none' }} className={styles.backtopBox} onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}></a>
  )
}

export default memo(BackTop)