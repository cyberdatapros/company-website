import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { skip: string } }
) => {
  const takeQuery = request.nextUrl.searchParams.get("take");

  const take = takeQuery ? +takeQuery * 4 : 4;

  const count = await db.blog.count();

  const data = await db.blog.findMany({
    take: take,
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({ data, count });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const blog = await db.blog.create({ data });
  return NextResponse.json({ blog });
};
