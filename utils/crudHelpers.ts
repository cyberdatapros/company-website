import db from "@/lib/prisma";
import { Blog } from "@prisma/client";

const domain = process.env.NEXT_PUBLIC_DOMAIN_URL;

export type BlogResponseType = {
  data: Array<{
    id: string;
    createdAt: Date;
    title: string;
    hashTag: string;
    content: string;
    image: string;
  }>;
};

export type UserInputBlogType = {
  image: File | string;
  title: string;
  hashTag: string;
  content: string;
};

export const getAllBlogs = async (): Promise<Blog[] | false> => {
  try {
    const data = await fetch(`${domain}/api/blog`);
    const blogs = await data.json();
    return blogs.data;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const createBlog = async (
  formData: UserInputBlogType
): Promise<Blog | false> => {
  try {
    const res = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
};

export const updateBlog = async (
  id: string,
  formData: UserInputBlogType
): Promise<Blog | false> => {
  try {
    const res = await fetch(`/api/blog/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
};

export const deleteBlog = async (id: string): Promise<Boolean> => {
  try {
    const res = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    console.log(res);

    if (res.message === "success") {
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
};

export const getBlog = async (id: string): Promise<Blog | false> => {
  try {
    const res = await fetch(`/api/blog/${id}`);
    const data = await res.json();
    if (data) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const getBlogSSR = async (id: string): Promise<Blog | false> => {
  try {
    const data = await db.blog.findUnique({ where: { id: id } });

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};
