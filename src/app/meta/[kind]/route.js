import { getPostList } from '@/apis'

export async function GET(_, { params }) {
  if (params.kind == 'recommend_posts') {
    return Response.json(await recommendPosts())
  } else if (params.kind == 'latest_posts') {
    return Response.json(await latestPosts())
  } else {
    return Response.json({})
  }
}

async function recommendPosts() {
  return (await getPostList()).slice(0, 5)
}

async function latestPosts() {
  return (await getPostList()).slice(0, 5)
}