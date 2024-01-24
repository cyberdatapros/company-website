import ServicePage from "@/components/pages/ServicePage";
import ServiceSegmentPage from "@/components/pages/ServiceSegmentPage";
import { ServicesType, servicesData } from "@/data/servicesPageData";
import { type } from "os";
import React from "react";
type ServiceKeyType = keyof ServicesType;

const page = async ({ params }: { params: { type: Array<string> } }) => {
  const [service, segment] = params.type;

  if (service in servicesData && !segment) {
    return <ServicePage serviceKey={service} />;
  } else {
    return <ServiceSegmentPage serviceKey={service} segmentKey={segment} />;
  }
};

export default page;
