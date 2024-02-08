import CaseStudyDetailpage from "@/components/pages/case-studies/CaseStudyDetailpage";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <CaseStudyDetailpage studyStr={params.id} />;
};

export default page;
