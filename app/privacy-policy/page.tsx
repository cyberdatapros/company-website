import PageWrapper from "@/components/wrappers/PageWrapper";
import { policyHtml } from "@/data/privacyPolicy";
import React from "react";

const page = () => (
  <PageWrapper>
    <div
      style={{
        padding: "80px 40px",
        backgroundColor: "white",
        lineHeight: 1.6,
        fontSize: 16,
        height: "100%",
      }}
      dangerouslySetInnerHTML={{ __html: policyHtml }}
    ></div>
  </PageWrapper>
);
export default page;
