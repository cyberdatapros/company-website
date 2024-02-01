"use client";
import {
  UserInputBlogType,
  createBlog,
  getBlog,
  updateBlog,
} from "@/utils/crudHelpers";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { getFileSize } from "@/utils/getFileSize";
import style from "@/css/blog-form.module.css";
import Link from "next/link";
import { deleteImage, imageUpload } from "@/utils/cloudinaryHelper";
import { log } from "console";

const quillToolBar = [
  ["bold", "italic", "underline", "strike"],
  [{ header: [1, 2, 3, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image"],
  ["clean"],
  ["undo", "redo"],
];

const validateForm = (form: UserInputBlogType) => {
  const formCompleted =
    form.image !== "" &&
    form.title !== "" &&
    form.content !== "" &&
    form.hashTag !== "";
  return formCompleted;
};

const imageUploader = async (formData: UserInputBlogType): Promise<string> => {
  if (typeof formData.image !== "string") {
    const imageRes = await imageUpload(formData.image);
    if (imageRes) {
      return imageRes.public_id;
    }
  }
  return "";
};

const BlogEditor = ({ id }: { id?: string }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<UserInputBlogType>({
    image: "",
    title: "",
    hashTag: "",
    content: "",
  });
  const [error, setError] = useState<string>("");
  const [disableImage, setDisableImage] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    // const fileSize = getFileSize(selectedFile?.size);
    if (selectedFile) {
      setFormData({ ...formData, image: selectedFile });
    }
  };

  const handleFormChange = useCallback(
    (key: keyof UserInputBlogType, value: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));

      if (error) {
        setError("");
      }
    },
    [error]
  );

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

  const deleteImageClient = useCallback(async () => {
    const deleteRes = await deleteImage(formData.image);
    if (deleteRes) {
      handleFormChange("image", "");
      setDisableImage(false);
    }
  }, [formData.image, handleFormChange]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const image = await imageUploader(formData);
    const isValid = validateForm({ ...formData, image });
    if (!isValid) {
      setError("All fields must be completed");
      return;
    }

    let isDbUpdatedSuccess = false;

    if (id) {
      const updateRes = await updateBlog(id, {
        ...formData,
        image,
      });
      if (updateRes) {
        isDbUpdatedSuccess = true;
      }
    } else {
      const createRes = await createBlog({ ...formData, image });
      if (createRes) {
        isDbUpdatedSuccess = true;
      }
    }

    if (isDbUpdatedSuccess) {
      router.replace("/admin/blogs");
    }
  };

  useEffect(() => {
    if (id) {
      getData(id);
      setDisableImage(true);
    }
  }, [getData, id]);

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
        {disableImage && (
          <button
            className={style["submit-button"]}
            onClick={deleteImageClient}
            style={{
              maxWidth: "max-content",
              backgroundColor: "red",
              color: "white",
              padding: 5,
            }}
          >
            Delete - and Upload New Image
          </button>
        )}
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

        {/* Image */}
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          disabled={disableImage}
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleFileChange}
        />
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
