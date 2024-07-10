"use client"

import { useEffect, useRef } from 'react'
import Script from 'next/script'
import { Live2d } from '@libs'
import styles from './CatWidget.module.scss'

export default function CatWidget() {

  const canvasElem = useRef()
  const parentElem = useRef()

  const resizeAction = () => {
    const canvas = canvasElem.current
    const parent = parentElem.current
    if (parent.clientHeight !== canvas.height) {
      canvas.height = parent.clientHeight / window.devicePixelRatio
      canvas.width = parent.clientWidth / window.devicePixelRatio
      console.log("resize live2d")
      Live2d.resize()
    }
  }

  useEffect(() => {
    console.log("init live2d")
    const canvas = canvasElem.current
    const parent = parentElem.current
    canvas.height = parent.clientHeight
    canvas.width = parent.clientWidth
    Live2d.load(canvas)
    window.addEventListener('resize', resizeAction, { passive: true })
    window.addEventListener(
      'beforeunload', () => Live2d.release(),
      { passive: true }
    )
    return () => window.removeEventListener('resize', resizeAction)
  })

  return <>
    <Script src="/assets/live2d/live2dcubismcore.min.js" strategy='beforeInteractive' />
    <div ref={parentElem} className={styles.container}>
      <canvas width={110} height={120} ref={canvasElem}></canvas>
    </div>
  </>
}