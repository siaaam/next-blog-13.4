// import Post from "@/models/Post";

import { Post } from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");

  // fetch
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts) as any, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req: any) => {
  const body = await req.json();
  console;
  const newPost = new Post(body);
  // fetch
  try {
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
