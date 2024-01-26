import dynamic from 'next/dynamic'

const BlogForm = dynamic(() => import('@/components/admin/BlogForm'), {
  ssr: false,
})

const page = () => {
  return <BlogForm />
}

export default page
