import ServicePage, { ServiceKeyType } from "@/components/pages/ServicePage";
import ServiceSegmentPage from "@/components/pages/ServiceSegmentPage";
import { servicesData } from "@/data/servicesPageData";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { type: Array<string> };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const [serviceKey, segmentKey] = params.type;

  // optionally access and extend (rather than replace) parent metadata
  const previousOpenGraph = (await parent).openGraph;
  const pageSegement = servicesData[serviceKey as ServiceKeyType].segments.find(
    (segment) => segment.url === segmentKey
  );

  const title = pageSegement?.title.replace(/(<([^>]+)>)/gi, "");
  const description = pageSegement?.headLine.replace(/(<([^>]+)>)/gi, "");
  return {
    title: `CyberData Pros ${title} Service`,
    description: description,
    openGraph: {
      title: `CyberData Pros ${title} Service`,
      description: description,
      url: `https://cyberdatapros.com/${serviceKey}/${segmentKey}`,
    },
  };
}

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
