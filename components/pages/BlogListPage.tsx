import React from "react";
import PageWrapper from "@/components/wrappers/PageWrapper";
import Image from "next/image";
import styles from "@/css/blog-page.module.css";
import { Blog } from "@prisma/client";
import Link from "next/link";
import { getDateFormat } from "@/utils/dataFormatter";
import LoadingContainer from "../shared/LoadingContainer";
import CardWrapper from "../wrappers/CardWrapper";
import { getImageUrl } from "@/utils/cloudinaryHelper";
import LoadMoreButton from "../shared/LoadMoreButton";

const Card = ({
  title,
  date,
  image,
  tag,
  id,
  index,
}: {
  title: string;
  date: string;
  image: string;
  tag: string;
  id: string;
  index: number;
}) => {
  const cloudImage = getImageUrl(image);
  return (
    <Link
      href={`/blogs/${id}`}
      id={`${index + 1}`}
      className={styles["blog-card"]}
    >
      <span className={styles["card-tag"]}>#{tag}</span>
      <div className={styles["blog-image-container"]}>
        <Image
          src={cloudImage}
          alt={""}
          width={300}
          height={300}
          placeholder={"blur"}
          blurDataURL="https://res.cloudinary.com/dzqp0dnia/image/upload/v1706802729/place-holder-blog-image.jpg"
        />
      </div>
      <div className={styles["card-text-wrapper"]}>
        <span className={styles["card-date"]}>{date}</span>
        <h2 className={styles["card-title"]}>{title}</h2>
        <span className={styles["card-read-more"]}>Read full post {">"}</span>
      </div>
    </Link>
  );
};

const BlogList = ({ blogList, count }: { blogList: Blog[]; count: number }) => {
  return (
    <PageWrapper>
      <div className={styles["blogs-page-wrapper"]}>
        <h1 className={styles["blogs-page-header"]}>Read our blogs</h1>
        <CardWrapper>
          {blogList.map((blog, index) => (
            <Card
              key={`${blog.id}-${blog.createdAt}`}
              title={blog.title}
              date={getDateFormat(`${blog.createdAt}`)}
              image={blog.image}
              tag={blog.hashTag}
              id={blog.id}
              index={index}
            />
          ))}
        </CardWrapper>
        <LoadMoreButton count={count} />
      </div>
    </PageWrapper>
  );
};

export default BlogList;
