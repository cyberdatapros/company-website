"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/css/load-more.module.css";

const LoadMoreButton = ({ count }: { count: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page") || 1;

  useEffect(() => {
    if (+pageQuery > 1) {
      document
        .getElementById(`${+pageQuery * 4 - 3}`)
        ?.scrollIntoView({ block: "end", behavior: "instant" });
    }
  }, [pageQuery]);

  if (Math.ceil(count / 4) === +pageQuery) {
    return null;
  }

  return (
    <button
      // ref={buttonRef}
      type="button"
      className={styles["loadmore"]}
      onClick={() => {
        router.push(`/blogs?page=${+pageQuery + 1}`);
      }}
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
