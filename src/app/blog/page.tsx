"use client";
import BlogItem from "@/components/BlogItem";
import useSWR from "swr";

// const getData = async () => {
//   try {
//     const data = await fetch(`${process.env.URL}/api/posts`, {
//       cache: "no-cache",
//     });
//     return data.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

const Blog = async () => {
  const fetcher = (...args: Parameters<typeof fetch>) => {
    return fetch(...args).then((res) => res.json());
  };

  const { data, mutate, error, isLoading } = useSWR<any>(`/api/posts`, fetcher);

  // const blogData = await getData();
  console.log(data);

  return (
    <div className="space-y-10 py-12">
      {data?.map((blog: any) => {
        console.log(blog._id);
        return (
          <BlogItem
            key={blog._id}
            id={blog._id}
            title={blog.title}
            desc={blog.desc}
            image={blog.image}
            author={blog.username}
          />
        );
      })}
    </div>
  );
};

export default Blog;
