import { redirect } from 'next/navigation'
import { CONTENT_BASE } from '@config'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const img = searchParams.get('img')
  if (img.startsWith('http://') || img.startsWith('https://')) {
    return redirect(img)
  }
  return redirect(`${CONTENT_BASE}/${img}`)
}