import { cache } from 'react'
import moment from 'dayjs'

import { proxyEncode } from '@/common-config'

export function createMeta(data, catPath, excerpt) {
  return {
    id: data.path?.replace(/\.md$/g, ''),
    title: data.title,
    create_time: moment(data.date).format('YYYY-MM-DD HH:mm'),
    update_time: moment(data.update).format('YYYY-MM-DD HH:mm'),
    bref: data.summary ?? excerpt,
    parent: catPath,
    tag_id: 888,
    like_count: 20,
    commet_count: 30,
    read_count: 10,
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