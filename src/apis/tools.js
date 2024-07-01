import { cache } from 'react'
import moment from 'dayjs'

import { proxyEncode } from '@/common-config'

export function createMeta(data, catPath, excerpt) {
  const tags = Array.isArray(data.tags) ? data.tags : ['无分类']
  const createMoment = moment(data.date)
  const updateMoment = moment(data.update)
  return {
    id: data.path?.replace(/\.md$/g, ''),
    title: data.title,
    createTime: createMoment.format('YYYY-MM-DD HH:mm'),
    createDate: createMoment.format('YYYY-MM-DD'),
    updateTime: updateMoment.format('YYYY-MM-DD HH:mm'),
    updateDate: updateMoment.format('YYYY-MM-DD'),
    bref: data.summary ?? excerpt,
    parent: catPath,
    tags,
  }
}

export function mergeMeta(data, catPath, excerpt) {
  return {
    ...createMeta(data, catPath, excerpt),
    ...data,
  }
}

const encode = cache((src) => proxyEncode(src))

export function imgRewriter(basePath) {
  return (node, _, __) => {
    if (node.tagName == 'img' && node.properties.src) {
      const origin = node.properties.src
      if (!origin.startsWith('http://') && !origin.startsWith('https://')) {
        const encoded = encode(`${basePath}/${origin}`)
        node.properties.src = `/proxy/${encoded}`
      }
    }
  }
}