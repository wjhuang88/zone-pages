"use client"

import { useState } from 'react'
import styles from './CatWidget.module.scss'

export default function CatWidget() {

  const [pressed, setPressed] = useState(false)

  const finalClass = pressed ? `${styles.container} ${styles.pressed}` : styles.container

  return <div onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} className={finalClass}></div>
}