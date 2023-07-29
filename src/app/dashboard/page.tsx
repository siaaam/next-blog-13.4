"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

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
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div>
        <div>
          {data?.length > 0 ? (
            data?.map((post) => (
              <div>
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="object-contain"
                  />
                </div>
                <h2>Post title</h2>
                <span> ❌ </span>
              </div>
            ))
          ) : (
            <p>No post to show</p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Image" />
          <textarea placeholder="Content"></textarea>

          <button>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
