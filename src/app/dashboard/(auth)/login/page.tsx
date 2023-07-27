"use client";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button className="bg-red-500 p-4" onClick={() => signIn("google")}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
