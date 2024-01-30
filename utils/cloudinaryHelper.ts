const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;

export type CloudinaryRes = {
  secure_url: string;
  public_id: string;
};

export const imageUpload = async (
  file: File
): Promise<CloudinaryRes | false> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "blog-image");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Image upload Error", error);
  }

  return false;
};

export const deleteImage = async (publicId: string | File) => {
  if (!publicId || typeof publicId !== "string") return false;

  try {
    const res = await fetch(`/api/cloudinary/${publicId}`, {
      method: "DELETE",
    }).then((response) => response.json());
    if (res.message === "success") {
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
};
