import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrism from 'rehype-prism'
import rehypeReact from 'rehype-react'
import rehypeRewrite from 'rehype-rewrite'
import remarkGfm from 'remark-gfm'
import { CONTENT_BASE } from '@config'
import moment from 'dayjs'
import * as prod from 'react/jsx-runtime'

import './prism-nord.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-groovy'

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

async function parseMd(catPath, source) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeRewrite, {
      rewrite: (node, _, __) => {
        if (node.tagName == 'img' && node.properties.src) {
          const origin = node.properties.src
          if (!origin.startsWith('http://') && !origin.startsWith('https://')) {
            node.properties.src = `/proxy?img=${catPath}/${origin}`
          }
        }
      }
    })
    .use(rehypePrism, { plugins: ['line-numbers'] })
    .use(rehypeReact, production)
    .process(source)
  return {
    size: source.length,
    compomnents: file.result
  }
}

async function readHtmlFromRemoteMd(catPath, url, cacheTag) {
  const response = await fetch(url, { next: { tags: [cacheTag] } })
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const md = await response.text()
  return await parseMd(catPath, md)
}

export async function getPost(path, update) {
  let catPath = path.split('_')[0]
  const realPath = path.replace('_', '/') + '.md'
  return await readHtmlFromRemoteMd(catPath, `${CONTENT_BASE}/${realPath}`, update)
}

export async function getMeta(path) {
  const catPath = path.split('_')[0]
  const catListRes = await fetch(`${CONTENT_BASE}/${catPath}/meta.json`, { cache: 'no-cache' })
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