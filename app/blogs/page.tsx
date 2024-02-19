import BlogList from "@/components/pages/BlogListPage";
import LoadingContainer from "@/components/shared/LoadingContainer";
import { getAllBlogs } from "@/utils/crudHelpers";
import { redirect } from "next/navigation";

const page = async ({ searchParams }: { searchParams: { page: string } }) => {
  if (!searchParams.page) {
    redirect("/blogs?page=1");
  }
  const blogs = await getAllBlogs(+searchParams.page);
  if (!blogs) return <LoadingContainer height={"100vh"} />;
  return <BlogList blogList={blogs.data} count={blogs.count} />;
};

export const revalidate = 3600;

export default page;
