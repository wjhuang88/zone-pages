import { POST_BASE_URL } from '@config'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

let postListCache

export async function getPostList() {
    if (!postListCache) {
        const res = await fetch(`${POST_BASE_URL}/list.json`)
        postListCache = res.json().catch(() => null)
    }

    return postListCache
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