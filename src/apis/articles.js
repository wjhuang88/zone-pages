import { read } from 'to-vfile'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

async function parseMd(source) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(source)
  return String(file)
}

export async function readHtmlFromMd(path) {
  const md = await read(path)
  return await parseMd(md)
}

export async function readHtmlFromRemoteMd(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const md = await response.text()
  return await parseMd(md)
}