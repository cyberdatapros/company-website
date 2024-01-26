import dynamic from 'next/dynamic'

const BlogList = dynamic(() => import('@/components/admin/BlogsListAdmin'), {
  ssr: false,
})

const page = () => {
  return <BlogList />
}

export default page
