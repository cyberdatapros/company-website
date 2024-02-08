import PageWrapper from "@/components/wrappers/PageWrapper";
import React from "react";
import styles from "@/css/case-study-detail.module.css";
import { studyArray } from "@/data/caseStudyData";
import Image from "next/image";

const CaseStudyDetailpage = ({ studyStr }: { studyStr: string }) => {
  const study = studyArray.find((s) => s.url === studyStr);

  if (!study) return <></>;
  return (
    <PageWrapper>
      <div className={styles["wrapper"]}>
        <div className={styles["header-container"]}>
          <div>
            <div
              style={{
                width: "max-content",
                height: 65,
                backgroundColor: "#ffffff63",
                padding: 5,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={study.image}
                width={350}
                height={70}
                alt="case logo"
              />
            </div>
            <span className={styles["case-study-text"]}>Case Study</span>
            <p dangerouslySetInnerHTML={{ __html: study.title }} />
          </div>
        </div>
        <section className={styles["problem"]}>
          <div>
            <h3>The Problem</h3>
            <p dangerouslySetInnerHTML={{ __html: study.problem }} />
          </div>
        </section>
        <section className={styles["solution"]}>
          <div>
            <h3>Solution</h3>
            <p dangerouslySetInnerHTML={{ __html: study.solution }} />
          </div>
        </section>
        <section className={styles["result"]}>
          <div>
            <h3>The Result</h3>
            <p dangerouslySetInnerHTML={{ __html: study.result }} />
          </div>
        </section>
        <section className={styles["testimonial"]}>
          <div>
            <h3>Testimonial</h3>
            <p dangerouslySetInnerHTML={{ __html: study.testimonial }} />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default CaseStudyDetailpage;
