import { CONTENT_BASE } from '@config'
import moment from 'dayjs'

export async function getPostList() {
  const catRes = await fetch(`${CONTENT_BASE}/notebooks.json`)
  const catJson = await catRes.json()
  const result = []
  for (let cat of catJson) {
    const catListRes = await fetch(`${CONTENT_BASE}/${cat.dir.split('/').filter(word => word.match(/\w+/)).join('/')}/meta.json`)
    const catListJson = await catListRes.json()
    for (let post of catListJson) {
      result.push({
        id: `${cat.dir}/${post.path}`.replace(/\/+/g, '_').split('.')[0],
        title: post.title,
        read_count: 10,
        bref: post.summary,
        like_count: 20,
        commet_count: 30,
        tag_id: 888,
        create_time: moment(post.date).format('YYYY-MM-DD HH:mm'),
        update_time: moment(post.update).format('YYYY-MM-DD HH:mm')
      })
    }
  }
  return result
}