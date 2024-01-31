import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import styles from "@/css/case-study-page.module.css";
import Image from "next/image";

const CaseStudyCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src={
          "https://res.cloudinary.com/dhgzwrwz8/image/upload/v1584842902/samples/landscapes/nature-mountains.jpg"
        }
        alt={""}
        width={200}
        height={200}
      />
      <div className={styles["info-container"]}>
        <span>Blog details</span>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  return (
    <PageWrapper>
      <div className={styles["page-wrapper"]}>
        <h1 className={styles["page-title"]}>Case Studies</h1>
        <CardWrapper
          style={{
            rowGap: 100,
          }}
        >
          {[0, 1, 2, 4, 5].map((i) => (
            <CaseStudyCard key={i} />
          ))}
        </CardWrapper>
      </div>
    </PageWrapper>
  );
};

export default CaseStudiesPage;
