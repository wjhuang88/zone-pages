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

export async function getCategoryList() {
  const categoryData = await fetch(`${CONTENT_BASE}/notebooks.json`, { cache: 'no-cache' })
  const categoryJson = await categoryData.json()
  return categoryJson
}

export async function getNavItems() {
  const categories = await getCategoryList()
  
  return [
    { id: 0, title: '首页', subtitle: 'HOME', href: '/' },
    ...categories.map((cat, index) => ({
      id: cat.id + 1,
      title: cat.title,
      subtitle: cat.subtitle,
      href: `/${cat.path}`,
    }))
  ]
}