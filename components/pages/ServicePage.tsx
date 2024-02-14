import React from "react";
import styles from "@/css/service-page.module.css";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { ServicesType, servicesData } from "@/data/servicesPageData";
import Link from "next/link";

export type ServiceKeyType = keyof ServicesType;
const ServicePage = async ({ serviceKey }: { serviceKey: string }) => {
  const service = servicesData[serviceKey as ServiceKeyType];
  const serviceTitle = serviceKey;
  return (
    <PageWrapper>
      <div className={styles["content-wrapper"]}>
        <div className={styles["text-container"]}>
          <div>
            <h1 className={styles["heading"]}>
              {serviceTitle} <span>Data Solutions by Cyber Data pros</span>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
            <button></button>
          </div>
          <div className={styles["certs-list-container"]}>
            <p>
              We help you keep up with the latest industry requirements and best
              practices
            </p>
            <ul className={styles["certs-list"]}>
              {service.segments.map((segement) => {
                const { title, url, shortHand } = segement;
                return (
                  <li key={title}>
                    <Link
                      href={`/services/${serviceTitle}/${url}`}
                      dangerouslySetInnerHTML={{ __html: shortHand || title }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles["certs-list-design-asset"]}></div>
      </div>
    </PageWrapper>
  );
};

export default ServicePage;
