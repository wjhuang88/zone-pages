import moment from 'dayjs'

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

export function imgRewriter(basePath) {
  return (node, _, __) => {
    if (node.tagName == 'img' && node.properties.src) {
      const origin = node.properties.src
      if (!origin.startsWith('http://') && !origin.startsWith('https://')) {
        node.properties.src = `/proxy?img=${basePath}/${origin}`
      }
    }
  }
}