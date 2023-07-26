import Link from "next/link";
interface BlogItemProps {
  id: string;
  title: string;
  desc: string;
  image: string;
}
const BlogItem: React.FC<BlogItemProps> = ({ id, title, desc, image }) => {
  return (
    <Link
      className="flex gap-10 justify-between items-center"
      href={`/blog/${id}`}
    >
      <div className="flex-3">
        <img
          src={image}
          className="object-contain"
          alt={title.toLowerCase()}
          height={400}
          width={500}
        />
      </div>
      <div className="flex-3 flex gap-3 flex-col">
        <h2 className="text-2xl  font-bold">{title}</h2>
        <p className="text-base leading-6 font-medium text-gray-400">{desc}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
