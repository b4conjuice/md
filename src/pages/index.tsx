import { Main } from '@bacondotbuild/ui'

import Layout from '@/components/layout'
import Markdown from '@/components/markdown'
import { generateSSGHelper } from '@/utils/ssgHelper'

export default function Home({ markdown }: { markdown: string }) {
  return (
    <Layout>
      <Main className='flex flex-col md:p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Markdown content={markdown} />
        </div>
      </Main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const ssg = generateSSGHelper()

  const note = await ssg.notes.getHome.fetch()
  const markdown = note?.markdown

  return {
    props: { markdown },
    revalidate: 1,
  }
}
