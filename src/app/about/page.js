import { getAbout } from '@apis'

export default async function AboutPage() {
  const aboutContent = await getAbout()
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {aboutContent.result}
    </div>
  )
}