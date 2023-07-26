// import Post from "@/models/Post";

import { Post } from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  // fetch

  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts) as any, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
