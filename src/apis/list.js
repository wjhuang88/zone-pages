import { CONTENT_BASE } from '@config'
import { createMeta } from './tools'

export async function getPostList() {
  const catRes = await fetch(`${CONTENT_BASE}/notebooks.json`, { cache: 'no-cache' })
  const catJson = await catRes.json()
  const result = []
  for (let cat of catJson) {
    const catListRes = await fetch(`${CONTENT_BASE}/${cat.dir.split('/').filter(word => word.match(/\w+/)).join('/')}/meta.json`, { cache: 'no-cache' })
    const catListJson = await catListRes.json()
    for (let post of catListJson) {
      result.push(createMeta(post, cat.dir, ""))
    }
  }
  return result
}