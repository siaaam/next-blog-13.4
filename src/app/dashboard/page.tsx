"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session);
  if (session.status === "loading") {
    return <p>loading..</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div>Dashboard</div>;
  }
};

export default Dashboard;
