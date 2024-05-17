import { CONTENT_BASE } from '@config'


async function fetchImage(img) {
  if (img.startsWith('http://') || img.startsWith('https://')) {
    return await fetch(img)
  }
  return await fetch(`${CONTENT_BASE}/${img}`)
}

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const img = searchParams.get('img')
  return await fetchImage(img)
}