import { POST_BASE_URL } from '@config'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export async function getPostList() {
    const res = await fetch(`${POST_BASE_URL}/list.json`)
    return res.json()
}

export async function getPost(path) {
    const res = await fetch(`${POST_BASE_URL}/${path}.md`)
    const data = await res.text()
    const matterResult = matter(data)

    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        contentHtml,
        ...matterResult.data
    }
}