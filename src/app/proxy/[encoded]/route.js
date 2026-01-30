import { cache } from 'react'
import { CONTENT_BASE, proxyDecode } from '@config'

const decode = cache((src) => proxyDecode(src))

const fetchImage = (img, headers) => {
  let imgPath;
  if (img.startsWith('http://') || img.startsWith('https://')) {
    imgPath = new URL(img)
  } else {
    imgPath = new URL(`${CONTENT_BASE}/${img}`)
  }
  headers.set('host', imgPath.host)
  headers.delete('referer')
  return fetch(imgPath, { headers })
}

export async function GET({ headers }, { params }) {
  const realPath = decode((await params).encoded)
  return await fetchImage(realPath, headers)
}