import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

// heres we have a error. write a blog post about it.
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
