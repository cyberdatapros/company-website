import BlogsListAdmin from "@/components/admin/BlogsListAdmin";
import { getAllBlogs } from "@/utils/crudHelpers";
import LoadingContainer from "@/components/shared/LoadingContainer";

const page = async ({ searchParams }: { searchParams: { page: string } }) => {
  const blogs = await getAllBlogs(20);
  if (!blogs) return <LoadingContainer height={"100vh"} />;
  return <BlogsListAdmin blogsData={blogs.data} />;
};

export const revalidate = 3600;

export default page;
