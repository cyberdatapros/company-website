import BlogList from "@/components/pages/BlogListPage";
import { getAllBlogs } from "@/utils/crudHelpers";
import { redirect } from "next/navigation";

const page = async ({ searchParams }: { searchParams: { page: string } }) => {
  if (!searchParams.page) {
    redirect("/blogs?page=1");
  }
  const blogs = await getAllBlogs(searchParams.page);
  if (!blogs) {
    return <></>;
  }
  return <BlogList blogList={blogs.data} count={blogs.count} />;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default page;
