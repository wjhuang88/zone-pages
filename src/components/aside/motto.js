'use client'

import { memo, useEffect, useMemo, useState } from 'react'
import { load } from 'jinrishici'

import { LOADING_ICON_BASE64 } from '@config'

import styles from './Aside.module.scss'

// 格言诗句载入中的样式
const loadingStyle = {
  position: 'absolute',
  top: '0',
  left: '4.5em',
  background: `url('${LOADING_ICON_BASE64}') no-repeat center / contain`,
  animation: 'rotate-icon infinite .6s steps(16)',
  display: 'block',
  height: '1em',
  width: '1em'
}

function Motto({ speed }) {

  // 格言诗句的内容
  const [motto, setMotto] = useState('')

  // 防抖参数
  let shake
  const laodMotto = () => new Promise((resolve, reject) => {
    try {
      if (shake) {
        clearTimeout(shake)
      }
      shake = setTimeout(() => {
        setMotto('')
        load(result => {
          setMotto(result.data.content)
          resolve(result.data.content)
        })
      }, 50)
    } catch (error) {
      reject(error)
    }
  })

  useEffect(() => {
    async function fetchMotto() {
      await laodMotto()
    }
    fetchMotto()
  }, [])

  const animStyle = useMemo(() => ({
    animationDuration: speed + 's'
  }), [speed])

  const loadingPositionStyle = useMemo(() => motto ? {} : loadingStyle, [motto])

  return <div onClick={laodMotto} className={styles.motto + ' ' + styles.anim} style={animStyle}>
    <h2 style={{ position: 'relative' }}>每日诗词<span style={loadingPositionStyle}></span></h2>
    <p>{motto}</p>
  </div>
}

export default memo(Motto)