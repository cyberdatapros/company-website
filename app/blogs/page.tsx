import dynamic from "next/dynamic";

const BlogList = dynamic(() => import("@/components/pages/BlogListPage"), {
  ssr: false,
});

const page = () => {
  return <BlogList />;
};

export default page;
