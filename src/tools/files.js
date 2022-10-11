import { read } from 'to-vfile'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export async function readHtmlFromMd(path) {
  const md = await read(path)
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(md)
  return String(file)
}