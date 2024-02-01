import styles from "@/css/blog-detail.module.css";
import React from "react";
import { getDateFormat } from "@/utils/dataFormatter";
import PageWrapper from "../wrappers/PageWrapper";
import { Blog } from "@prisma/client";
import Image from "next/image";
import { getImageUrl } from "@/utils/cloudinaryHelper";

const BlogDetailPage = async ({ data }: { data: Blog }) => {
  const blogImage = getImageUrl(data.image);
  return (
    <PageWrapper>
      <div className={styles["blog-detail-page"]}>
        <div className={styles["blog-detail-content-wrapper"]}>
          <div className={styles["blog-detail-header-container"]}>
            <div className={styles["blog-detail-image"]}>
              <Image
                src={blogImage}
                width={350}
                height={350}
                alt="blog-image"
              />
            </div>
            <div className={styles["blog-detail-header"]}>
              <h1>{data.title}</h1>
              <div className={styles["blog-detail-attribute"]}>
                <span>By CyberData Pros</span>
              </div>
              <div className={styles["blog-detail-attribute"]}>
                <span>{getDateFormat(`${data.createdAt}`)}</span>
              </div>
            </div>
          </div>
          <div
            className={styles["blog-content"]}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogDetailPage;
