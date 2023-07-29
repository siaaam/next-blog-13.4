"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className="h-24  flex justify-between items-center">
      <Link className="font-bold text-2xl" href="/">
        Mammamia
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <button
            className="px-2 py-1.5 border-none bg-green-400 text-white cursor-pointer rounded outline-none"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
