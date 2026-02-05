import { CONTENT_BASE } from '@config'
import { createMeta } from './tools'

export async function getIndexData() {
  const indexData = await fetch(`${CONTENT_BASE}/index.json`, { cache: 'no-cache' })
  const indexJson = await indexData.json()
  return {
    meta: indexJson.meta,
    list: indexJson.list.map(o => createMeta(o, o.collection, o.summary))
  }
}

export async function getRecommendList() {
  const recommendData = await fetch(`${CONTENT_BASE}/recommended.json`, { cache: 'no-cache' })
  const recommendJson = await recommendData.json()
  return recommendJson.map(o => createMeta(o, o.collection, o.summary))
}

export async function getLatestList() {
  const latestData = await fetch(`${CONTENT_BASE}/latest.json`, { cache: 'no-cache' })
  const latestJson = await latestData.json()
  return latestJson.map(o => createMeta(o, o.collection, o.summary))
}

export async function getCategoryList(cat) {
  const catData = await fetch(`${CONTENT_BASE}/${cat}/meta.json`, { cache: 'no-cache' })
  const catJson = await catData.json()
  return catJson.map(o => createMeta(o, cat, o.summary))
}

export async function getNavItems() {
  const categoryData = await fetch(`${CONTENT_BASE}/notebooks.json`, { cache: 'no-cache' })
  const categories = await categoryData.json()
  
  return [
    { id: 0, title: '首页', subtitle: 'HOME', href: '/' },
    ...categories.map((cat, _) => ({
      id: cat.id + 1,
      title: cat.title,
      subtitle: cat.subtitle,
      href: `/posts/${cat.path}`,
    })),
    { id: categories.length + 1, title: '关于', subtitle: 'ABOUT', href: '/about' }
  ]
}