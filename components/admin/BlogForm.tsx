"use client";
import {
  BlogResponseType,
  UserInputBlogType,
  createBlog,
  getBlog,
  updateBlog,
} from "@/utils/crudHelpers";

import { CldUploadButton } from "next-cloudinary";
import { Blog } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { getFileSize } from "@/utils/getFileSize";
import style from "@/css/blog-form.module.css";
import Link from "next/link";
import { deleteImage, imageUpload } from "@/utils/cloudinaryHelper";

const quillToolBar = [
  ["bold", "italic", "underline", "strike"],
  [{ header: [1, 2, 3, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image"],
  ["clean"],
  ["undo", "redo"],
];

const BlogEditor = ({ id }: { id?: string }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<UserInputBlogType>({
    image: "",
    title: "",
    hashTag: "",
    content: "",
  });
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    const fileSize = getFileSize(selectedFile?.size);
    console.log(fileSize);

    if (selectedFile) {
      setFormData({ ...formData, image: selectedFile });
    }
  };

  const handleFormChange = (key: keyof UserInputBlogType, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const getData = useCallback(async (id: string) => {
    const data = await getBlog(id);
    if (data) {
      const { title, hashTag, content, image } = data;
      setFormData({
        title,
        hashTag,
        content,
        image: image,
      });
    }
  }, []);

  useEffect(() => {
    console.log("setting data");

    if (id) {
      getData(id);
    }
  }, [getData, id]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      const data = await updateBlog(id, {
        title: formData.title,
        hashTag: formData.hashTag,
        content: formData.content,
        image: formData.image,
      });
      if (data) router.replace("/admin/blogs");
    } else {
      if (typeof formData.image !== "string") {
        let publicId = "";
        const imageRes = await imageUpload(formData.image);
        if (imageRes) {
          publicId = imageRes.public_id;
          const data = await createBlog({ ...formData, image: publicId });
          if (data) {
            setFormData({
              image: "",
              title: "",
              hashTag: "",
              content: "",
            });
          }
        }
      }
    }
  };

  return (
    <div className={style["form-wrapper"]}>
      <div className={style["tips-container"]}>
        <h2>Tips</h2>
        <ul>
          <li>
            Image should be square orientation, which means the width and height
            should be the same
          </li>
          <li>Image width and height should not exceed 700</li>
          <li>Best size is 640 by 640 for clarity and responsive</li>
          <li>Use png file type when possible</li>
          <li>
            After submiting - the form will clear so you may enter a new or
            navigate back to the blogs page
          </li>
        </ul>
        {[
          { text: "Go to Live Blogs Page", route: "/blogs" },
          { text: "Go to Admin Blogs Page", route: "/admin/blogs" },
        ].map((i) => (
          <Link
            key={i.text}
            href={i.route}
            className={style["submit-button"]}
            style={{
              marginBottom: 12,
            }}
          >
            {i.text}
          </Link>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={style["blog-form"]}>
        <button className={style["submit-button"]} type="submit">
          {`${id ? "Update" : "Create New"} blog`}
        </button>
        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            Error: {error}
          </p>
        )}
        {/* Title */}
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => handleFormChange("title", e.target.value)}
          required
        />
        {id && formData.image ? (
          <button
            className={style["submit-button"]}
            onClick={async () => {
              const res = await deleteImage(formData.image);
              if (res) {
                handleFormChange("image", "");
              }
            }}
            style={{
              maxWidth: "max-content",
              backgroundColor: "red",
              color: "white",
              padding: 5,
            }}
          >
            Delete - and Upload New Image
          </button>
        ) : (
          <>
            {/* Image */}
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
            />
          </>
        )}
        {/* hashTag */}
        <label>HashTag:</label>
        <input
          type="text"
          value={formData.hashTag}
          onChange={(e) => handleFormChange("hashTag", e.target.value)}
        />

        {/* Quill Editor for Content */}
        <label>Content:</label>
        {typeof window !== "undefined" && ReactQuill && (
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(value) => handleFormChange("content", value)}
            modules={{ toolbar: quillToolBar }}
          />
        )}
      </form>
    </div>
  );
};

export default BlogEditor;
