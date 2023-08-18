import { readHtmlFromRemoteMd } from '@/apis'
import Post from './post'

export default async function Page({ params }) {
  const postHtml = await readHtmlFromRemoteMd('https://raw.githubusercontent.com/wjhuang88/zone-articles/master/demo/hello-2-world.md')
  const postData = {
    id: params.path,
    title: 'test',
    content: 'jkahfjkasdhfjkasdhfjkasdfh',
    contentHtml: postHtml,
    read_count: 10,
    bref: 'test bref',
    like_count: 20,
    commet_count: 30,
    tag_id: 888,
    create_time: 1663926534913,
    update_time: 1663926534913
  }

  return <Post postData={postData} />

}