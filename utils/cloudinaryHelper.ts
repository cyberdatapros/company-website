const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

export type CloudinaryRes = {
  secure_url: string;
  public_id: string;
};

export const getImageUrl = (public_id: string): string => {
  return `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,h_600,w_600/f_auto/${public_id}`;
};

export const imageUpload = async (
  file: File
): Promise<CloudinaryRes | false> => {
  const formData = new FormData();
  formData.append("file", file);
  if (uploadPreset && typeof uploadPreset !== "undefined") {
    console.log(uploadPreset);

    formData.append("upload_preset", uploadPreset);
  }

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
