import { Main } from '@bacondotbuild/ui'

import Layout from '@/components/layout'
import Markdown from '@/components/markdown'
import Loading from '@/components/loading'
import { api } from '@/utils/api'

export default function Home() {
  const { data: note, isLoading } = api.notes.getHome.useQuery()

  if (isLoading || !note)
    return (
      <Layout>
        <Main className='flex flex-col p-4'>
          <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
            <Loading />
          </div>
        </Main>
      </Layout>
    )
  return (
    <Layout>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Markdown content={note.markdown ?? ''} />
        </div>
      </Main>
    </Layout>
  )
}

// server side
