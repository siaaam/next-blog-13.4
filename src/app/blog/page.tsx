import BlogItem from "@/components/BlogItem";

const getData = async () => {
  try {
    const data = await fetch(`${process.env.URL}/api/posts`, {
      cache: "no-store",
    });

    return data.json();
  } catch (err) {
    console.log(err);
  }
};

const Blog = async () => {
  const blogData = await getData();
  console.log(blogData);

  return (
    <div className="space-y-10 py-12">
      {blogData?.map((blog: any) => {
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
