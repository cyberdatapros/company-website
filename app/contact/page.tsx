import dynamic from "next/dynamic";
import React from "react";
const ContactPage = dynamic(() => import("@/components/pages/Contact"), {
  ssr: false,
});

const page = () => {
  return <ContactPage />;
};

export default page;
