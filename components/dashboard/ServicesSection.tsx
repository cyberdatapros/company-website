import React from "react";
import styles from "@/css/serviceListDashboard.module.css";
import Link from "next/link";
import servicesArray from "@/data/dashboardServicesData";

const ServicesSectionDashboard = () => {
  return (
    <div className={styles["services-container"]}>
      <span className={styles["heading"]}>Browse Our services</span>
      <p className={styles["sub-heading"]}>
        Regardless of whether your business is small or large, located in the US
        or abroad, our approach guarantees that we meet your security
        requirements, perfectly customized for your business.
      </p>
      <div className={styles["cards-container"]}>
        {servicesArray.map(({ title, description }) => (
          <Link
            href={`/service/${encodeURIComponent(title)}`}
            className={styles["service-card"]}
            key={title}
            style={{
              position: "relative",
            }}
          >
            <h4 className={styles["service-title"]}>{title}</h4>
            <p className={styles["service-description"]}>{description}</p>
            <span className={styles["learn-text"]}>Learn More</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionDashboard;
