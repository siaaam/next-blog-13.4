// import Post from "@/models/Post";

import { Post } from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  // fetch

  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post) as any, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
