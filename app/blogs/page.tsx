import BlogList from "@/components/pages/BlogListPage";
import { getAllBlogs } from "@/utils/crudHelpers";

const page = async () => {
  const data = await getAllBlogs();

  if (!data) {
    return <></>;
  }
  return <BlogList blogList={data} />;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default page;
