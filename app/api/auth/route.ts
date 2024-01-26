import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  return new NextResponse("Authentication Required", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='private_pages'",
    },
  });
};
