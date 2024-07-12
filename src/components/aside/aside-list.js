'use client';

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LOADING_ICON_BASE64 } from '@config'

import styles from './Aside.module.scss'
import { usePathname } from 'next/navigation';

const icon = (
  <svg
    t="1601278312198"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="818"
    width="14"
    height="14"
  >
    <path d="M788.888046 1023.850533h-553.776092A235.336155 235.336155 0 0 1 0 788.888046v-553.776092A235.336155 235.336155 0 0 1 235.111954 0h553.776092A235.336155 235.336155 0 0 1 1023.850533 235.111954v553.776092A235.336155 235.336155 0 0 1 788.888046 1023.850533z" fill="#bdc3c7" p-id="819"></path>
    <path d="M785.898701 743.748942H198.567216a37.366808 37.366808 0 0 1 0-74.733616h587.331485a37.366808 37.366808 0 0 1 0 74.733616zM825.432784 495.483871a50.594658 50.594658 0 0 1-50.594658 50.594658 50.594658 50.594658 0 0 1-50.594658-50.594658 50.669391 50.669391 0 0 1 50.594658-50.669391 50.669391 50.669391 0 0 1 50.594658 50.669391zM633.143191 532.775945H198.567216a37.366808 37.366808 0 1 1 0-74.733615h434.575975a37.366808 37.366808 0 0 1 0 74.733615zM785.898701 321.354547H198.567216a37.366808 37.366808 0 1 1 0-74.733616h587.331485a37.366808 37.366808 0 0 1 0 74.733616z" fill="#FFFFFF" p-id="820"></path>
  </svg>
)

export default function AsideList({ posts }) {

  const [loading, setLoading] = useState({})
  const selectedPath = usePathname()

  useEffect(() => {
    if (loading[selectedPath]) {
      setLoading({})
    }
  }, [selectedPath])

  const loadingStyle = {
    background: `url('${LOADING_ICON_BASE64}') no-repeat center / contain`,
    animation: 'rotate-icon infinite .6s steps(16)',
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'text-top',
    marginLeft: '0.3em'
  }

  function clickAction(realPath) {
    const newLoading = {}
    newLoading[realPath] = true
    setLoading(newLoading)
  }

  return (
    <ul className={styles.list}>
      {posts?.map((item, index) => {
        const realPath = `/posts/${item.parent}/${item.id}`
        return (
          <li style={{ marginTop: index !== 0 ? 8 : 0 }} key={index}>
            {icon}
            <Link onClick={() => clickAction(realPath)} prefetch={false} href="/posts/[cat]/[path]" as={realPath} className={styles.link}>
              {item.title}
            </Link>
            <span style={loading[realPath] && selectedPath !== realPath ? loadingStyle : {}}></span>
          </li>
        )
      })}
    </ul>
  )
}