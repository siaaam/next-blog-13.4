"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log({ name, email, password });
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <form className="flex flex-col gap-3 w-80" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          required
          className="p-5 bg-transparent border-2 border-gray-700 outline-none rounded text-xl font-bold"
        />
        <input
          type="text"
          placeholder="email"
          required
          className="p-5 bg-transparent border-2 border-gray-700 outline-none rounded text-xl font-bold"
        />
        <input
          type="text"
          placeholder="password"
          required
          className="p-5 bg-transparent border-2 border-gray-700 outline-none rounded text-xl font-bold"
        />
        <button className="p-5 cursor-pointer bg-teal-600 rounded border-none font-bold text-gray-200">
          Register
        </button>
      </form>
      {err && "something went wrong"}
      <Link href="/dashboard/login">Login with existing account</Link>
    </div>
  );
};

export default Register;
