import ServicePage from "@/components/pages/ServicePage";
import ServiceSegmentPage from "@/components/pages/ServiceSegmentPage";
import { servicesData } from "@/data/servicesPageData";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { type: Array<string> } }) => {
  const [service, segment] = params.type;

  if (service in servicesData && !segment) {
    return <ServicePage serviceKey={service} />;
  } else if (service in servicesData && segment) {
    return <ServiceSegmentPage serviceKey={service} segmentKey={segment} />;
  } else {
    redirect("/#services");
  }
};

export default page;
