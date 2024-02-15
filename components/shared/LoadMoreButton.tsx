"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/css/load-more.module.css";

const LoadMoreButton = ({ count }: { count: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page") || 1;

  useEffect(() => {
    if (+pageQuery > 1) {
      window.scroll(0, +pageQuery * 300);
    }
  }, [pageQuery]);

  if (Math.ceil(count / 8) === +pageQuery) {
    return null;
  }

  return (
    <button
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
