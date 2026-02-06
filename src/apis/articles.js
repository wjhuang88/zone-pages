import * as prod from 'react/jsx-runtime'
import { notFound } from 'next/navigation'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrism from 'rehype-prism'
import rehypeReact from 'rehype-react'
import rehypeRewrite from 'rehype-rewrite'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'
import { parse, stringify } from 'smol-toml'

import { CONTENT_BASE } from '@config'
import { mergeMeta, imgRewriter } from './tools'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-groovy'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-yaml'

const rehypeOptions = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }
const matterOptions = {
  delimiters: '+++',
  excerpt: true,
  language: 'toml',
  engines: {
    toml: {
      parse,
      stringify
    }
  }
}

function handleMdFile(catPath, content) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeRewrite, { rewrite: imgRewriter(catPath) })
    .use(rehypePrism)
    .use(rehypeReact, rehypeOptions)
    .process(content)
}

async function handleMdFetch(url, cacheTag) {
  const response = await fetch(url, { next: { tags: [cacheTag] } })
  if (!response.ok) {
    notFound()
  }
  return await response.text()
}

async function parseMd(catPath, source) {
  const frontParsed = matter(source, matterOptions)
  const file = await handleMdFile(catPath, frontParsed.content)
  return {
    ...mergeMeta(frontParsed.data, catPath, frontParsed.excerpt),
    size: frontParsed.content.length,
    compomnents: file.result
  }
}

async function readHtmlFromRemoteMd(catPath, url, cacheTag) {
  const md = await handleMdFetch(url, cacheTag)
  return await parseMd(catPath, md)
}

export async function getPost(cat, path) {
  const realPath = `${cat}/${path}.md`
  return await readHtmlFromRemoteMd(cat, `${CONTENT_BASE}/${realPath}`, realPath)
}

export async function getAbout() {
  const md = await handleMdFetch(`${CONTENT_BASE}/about.md`, "about.md")
  return await handleMdFile('about', md)
}