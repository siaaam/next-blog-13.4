const getData = async (id: any) => {
  try {
    const data = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });
    return data.json();
  } catch (err) {
    console.log(err);
  }
};

const BlogPost = async ({ params }: any) => {
  const id = params.id;
  const blogData = await getData(id);
  console.log(blogData);
  return (
    <div className="mb-10">
      <div className="flex justify-between gap-5 py-16">
        <div className="flex-1 flex flex-col relative">
          <h1 className="text-xl font-bold">{blogData.title}</h1>
          <p className="text-sm font-medium text-gray-500 my-3">
            {blogData.desc}
          </p>
          <div className="flex items-center gap-5 absolute bottom-3 left-3">
            <img
              src="/user1.jpg"
              alt={blogData.title}
              height={60}
              width={60}
              className="object-contain rounded-full"
            />
            <span className="text-sm">{blogData.username}</span>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={blogData.image}
            alt="blog "
            className="object-cover"
            height={350}
            width={650}
          />
        </div>
      </div>
      <div>
        <p>{blogData.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
