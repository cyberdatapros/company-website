import dynamic from 'next/dynamic'

const EditBlog = dynamic(() => import('@/components/admin/BlogForm'), {
  ssr: false,
})

const Page = ({ params }: { params: { id: string } }) => (
  <EditBlog id={params.id} />
)

export default Page
