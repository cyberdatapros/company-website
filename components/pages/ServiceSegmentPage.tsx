import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import { servicesData } from "@/data/servicesPageData";
import { ServiceKeyType } from "./ServicePage";
import LoadingContainer from "../shared/LoadingContainer";
import style from "@/css/service-segment.module.css";
import Image from "next/image";
import DropDownContent from "../shared/DropDownContent";
import Link from "next/link";

const ServiceSegmentPage = ({
  serviceKey,
  segmentKey,
}: {
  serviceKey: string;
  segmentKey: string;
}) => {
  const pageSegement = servicesData[serviceKey as ServiceKeyType].segments.find(
    (segment) => segment.url === segmentKey
  );

  if (typeof pageSegement === "undefined") {
    return (
      <PageWrapper>
        <LoadingContainer height={"100vh"} />;
      </PageWrapper>
    );
  }
  return (
    <PageWrapper>
      <div className={style["content-wrapper"]}>
        <div className={style["hero-content"]}>
          <div className={style["hero-content-wrapper"]}>
            <div>
              <h1
                className={style["hero-content-title"]}
                dangerouslySetInnerHTML={{ __html: pageSegement.title }}
              />
              <p className={style["segment-descripton"]}>
                {pageSegement.headLine}
              </p>
              <Link href={"/contact"}>
                <button className={style["contact-button"]}>
                  Contact an expert
                </button>
              </Link>
            </div>
            <Image
              src={
                "https://res.cloudinary.com/dzqp0dnia/image/upload/v1706111111/segment-badge_uliswf.svg"
              }
              alt={""}
              width={50}
              height={50}
            />
          </div>
          <Image
            src={
              "https://res.cloudinary.com/dzqp0dnia/image/upload/v1706126927/back-test_neam9v.svg"
            }
            className={style["hero-back-image"]}
            alt={""}
            width={50}
            height={50}
          />
        </div>
        <div className={style["bottom-section"]}>
          <div>
            <h2>
              We Make it <span>simple.</span>
            </h2>
            <p>
              Compliance frameworks can be an effective way to increase customer
              confidence and reduce your overall costs and risks of data
              breaches or incidents.
            </p>
          </div>
          <div>
            {["Planning", "Current State Assesment", "Remediation Roadmap"].map(
              (content) => (
                <DropDownContent
                  key={content}
                  buttonText={content}
                  downText={content}
                />
              )
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServiceSegmentPage;
