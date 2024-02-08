import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import styles from "@/css/case-study-page.module.css";
import Image from "next/image";
import FeedbackCarousel from "../dashboard/FeedbackCarousel";
import { CaseStudy, studyArray } from "@/data/caseStudyData";
import Link from "next/link";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <div className={styles.card}>
      <div className={styles["case-study-image"]}>
        <Image src={study.image} alt={""} width={300} height={50} />
      </div>
      <div className={styles["info-container"]}>
        <h3>{study.name}</h3>
        <p>{study.title}</p>

        <Link href={`/case-studies/${study.url}`}>read more</Link>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  return (
    <PageWrapper>
      <div className={styles["page-wrapper"]}>
        <h1 className={styles["page-title"]}>Our Case Studies</h1>
        <CardWrapper
          style={{
            rowGap: 130,
            // paddingBottom: 40,
          }}
        >
          {studyArray.map((i) => (
            <CaseStudyCard key={i.url} study={i} />
          ))}
        </CardWrapper>
      </div>
      <FeedbackCarousel />
    </PageWrapper>
  );
};

export default CaseStudiesPage;
