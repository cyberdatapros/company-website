import React from "react";
import { getBlogSSR } from "@/utils/crudHelpers";

import BlogDetailPage from "@/components/pages/BlogDetailPage";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getBlogSSR(params.id);

  if (!data) return false;

  return <BlogDetailPage data={data} />;
};

export const revalidate = 3600;

export default Page;
