import { getPost } from '@request'

export default function Post({ postData }) {

  return (
    <>
      <header>
        <h1>{postData.title}</h1>
        <p>{postData.date}</p>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const postData = await getPost(params.path)
  return { props: { postData } }
}