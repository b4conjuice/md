export default function Markdown({ content }: { content: string }) {
  return (
    <article
      className='lg:prose-xl prose prose-headings:text-cb-white prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 w-full rounded bg-cb-blue p-4 text-cb-white'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
