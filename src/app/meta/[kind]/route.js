import { getLatestList, getRecommendList } from '@/apis'

export async function GET(_, { params }) {
  if (params.kind == 'recommend_posts') {
    return Response.json(await getRecommendList())
  } else if (params.kind == 'latest_posts') {
    return Response.json(await getLatestList())
  } else {
    return Response.json({})
  }
}