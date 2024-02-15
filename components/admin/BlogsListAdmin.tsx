"use client";
import React, { useEffect, useState } from "react";
import styles from "@/css/admin-blogs.module.css";
import Link from "next/link";
import { deleteBlog, getAllBlogs } from "@/utils/crudHelpers";
import { deleteImage } from "@/utils/cloudinaryHelper";

const BlogsListAdmin = () => {
  const [blogsData, setblogsData] = useState<
    {
      id: string;
      createdAt: Date;
      title: string;
      hashTag: string;
      content: string;
      image: string;
    }[]
  >([]);

  const getData = async () => {
    const data = await getAllBlogs("20");
    if (data) {
      setblogsData(data.data);
    }
  };

  const removeBlog = async (id: string, image: string) => {
    const dBres = deleteBlog(id);
    const imgDelRes = deleteImage(image);
    const completed = await Promise.all([imgDelRes, dBres]);

    if (completed) {
      getData();
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!blogsData) return <h1>loading...</h1>;
  return (
    <div className={styles["table-wrapper"]}>
      <Link
        href={"/admin/blogs/create"}
        className={styles["action-button"]}
        style={{
          backgroundColor: "blue",
          alignSelf: "flex-start",
          marginBottom: 12,
        }}
      >
        Create New
      </Link>
      <Link
        href={"/blogs"}
        className={styles["action-button"]}
        style={{
          backgroundColor: "green",
          alignSelf: "flex-start",
        }}
      >
        Live Blogs Page
      </Link>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th colSpan={2}>Blogs Table</th>
          </tr>
        </thead>
        <tbody>
          {blogsData.map(({ id, title, image }) => (
            <tr key={id}>
              <td className={styles["blog-link"]}>
                <Link href={`/blogs/${id}`}>{title}</Link>
              </td>
              <td>
                <Link href={`/admin/blogs/edit/${id}`}>
                  <button className={styles["action-button"]}>Edit</button>
                </Link>
              </td>
              <td>
                <button
                  className={styles["action-button"]}
                  style={{
                    backgroundColor: "red",
                  }}
                  onClick={() => removeBlog(id, image)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsListAdmin;
