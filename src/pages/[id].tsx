import { useRouter } from 'next/router'
import { Main } from '@bacondotbuild/ui'

import Layout from '@/components/layout'
import { api } from '@/utils/api'
import Markdown from '@/components/markdown'
import Loading from '@/components/loading'

export default function MarkdownPage() {
  const {
    query: { id },
  } = useRouter()
  const { data: note, isLoading } = api.notes.get.useQuery({ id: id as string })

  if (isLoading || !note)
    return (
      <Layout>
        <Main className='flex flex-col md:p-4'>
          <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
            <Loading />
          </div>
        </Main>
      </Layout>
    )
  return (
    <Layout>
      <Main className='flex flex-col md:p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Markdown content={note.markdown ?? ''} />
        </div>
      </Main>
    </Layout>
  )
}
