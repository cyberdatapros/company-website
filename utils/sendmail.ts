export type formmDataType = {
  name?: string;
  email: string;
  message?: string;
  phone?: string;
  company?: string;
};

export const sendMail = async (formData: formmDataType): Promise<Boolean> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error("Image upload Error", error);
  }

  return false;
};
