"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  console.log(data);
  console.log(session);

  if (session.status === "loading") {
    return <p>loading..</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image: img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div>
        <h1 className="text-center -mt-12 mb-28 font-medium text-gray-600">
          User Name:{" "}
          <span className="font-bold text-xl text-teal-500">
            {session?.data?.user?.name.toUpperCase()}
          </span>
        </h1>
        <div className="flex">
          <div className="flex-1">
            {data?.length > 0 ? (
              data?.map((post) => (
                <div className="flex gap-3 items-center mb-5">
                  <div>
                    <img
                      src={post.image}
                      alt={post.title}
                      width={250}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{post?.title}</h2>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleDelete(post._id)}
                  >
                    {" "}
                    ❌{" "}
                  </span>
                </div>
              ))
            ) : (
              <p>No post to show</p>
            )}
          </div>
          <form className="flex-1 flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="p-2.5 bg-transparent border-2 border-gray-500 rounded-sm"
              type="text"
              placeholder="Title"
            />
            <input
              className="p-2.5 bg-transparent border-2 border-gray-500 rounded-sm"
              type="text"
              placeholder="Description"
            />
            <input
              className="p-2.5 bg-transparent border-2 border-gray-500 rounded-sm"
              type="text"
              placeholder="Provide image URL"
            />
            <textarea
              className="p-2.5 bg-transparent border-2 border-gray-500 rounded-sm"
              placeholder="Content"
            ></textarea>

            <button className="bg-teal-500 py-4 text-white font-bold">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
