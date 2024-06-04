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
  return fetch(imgPath, { headers: { ...headers, host: imgPath.host } })
}

export async function GET({ headers }, { params }) {
  const realPath = decode(params.encoded)
  return await fetchImage(realPath, headers)
}