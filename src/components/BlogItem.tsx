"use client";
import Link from "next/link";
interface BlogItemProps {
  id: string;
  title: string;
  desc: string;
  image: string;
  author?: string;
}
const BlogItem: React.FC<BlogItemProps> = ({
  id,
  title,
  desc,
  image,
  author,
}) => {
  return (
    <Link className="flex gap-10  items-center" href={`/blog/${id}`}>
      <div className="flex-3">
        <img
          src={image}
          className="object-cover"
          alt={title.toLowerCase()}
          height={300}
          width={400}
        />
      </div>
      <div className="flex-3 flex gap-3 flex-col">
        <h2 className="text-2xl  font-bold">{title}</h2>
        <p className="text-base leading-6 font-medium text-gray-400">{desc}</p>

        <p className="text-teal-400">
          Created By: <span>{author.toUpperCase()}</span>
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
