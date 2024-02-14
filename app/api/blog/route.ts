import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { skip: string } }
) => {
  const data = await db.blog.findMany({
    skip: +params.skip || 0,
    take: 6,
  });
  return NextResponse.json({ data });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const blog = await db.blog.create({ data });
  return NextResponse.json({ blog });
};
