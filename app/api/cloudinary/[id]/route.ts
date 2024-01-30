import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
const cloudApIKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const cloudApISecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudApIKey,
  api_secret: cloudApISecret,
  secure: true,
});

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const cloudRes = await cloudinary.uploader.destroy(
    params.id,
    (err, result) => {
      if (err) {
        return err;
      } else {
        return result;
      }
    }
  );
  if (cloudRes.result === "ok") {
    return NextResponse.json({ message: "success" });
  } else {
    return NextResponse.json({ message: cloudRes.message });
  }
};
