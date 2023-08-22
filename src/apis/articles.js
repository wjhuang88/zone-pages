import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrism from 'rehype-prism'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import { CONTENT_BASE } from '@config'
import moment from 'dayjs'

import './prism-nord.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-groovy'

async function parseMd(source) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism, { plugins: ['line-numbers'] })
    .use(rehypeStringify)
    .process(source)
  return String(file)
}

async function readHtmlFromRemoteMd(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const md = await response.text()
  return await parseMd(md)
}

export async function getPost(path) {
  let realPath = path.replace('_', '/') + '.md'
  return await readHtmlFromRemoteMd(`${CONTENT_BASE}/${realPath}`)
}

export async function getMeta(path) {
  let catPath = path.split('_')[0]
  const catListRes = await fetch(`${CONTENT_BASE}/${catPath}/meta.json`)
  const catListJson = await catListRes.json()
  for (let post of catListJson) {
    if (post.path == `${path.replace(`${catPath}_`, '')}.md`) {
      return {
        id: `${catPath}/${post.path}`.replace(/\/+/g, '_').split('.')[0],
        parent: catPath,
        title: post.title,
        read_count: 10,
        bref: post.summary,
        like_count: 20,
        commet_count: 30,
        tag_id: 888,
        create_time: moment(post.date).format('YYYY-MM-DD HH:mm'),
        update_time: moment(post.update).format('YYYY-MM-DD HH:mm')
      }
    }
  }
}