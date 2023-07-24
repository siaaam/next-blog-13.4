import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h2 className="my-4 text-xl font-bold tracking-wide leading-6">
        Choose a gallery
      </h2>
      <div className="flex gap-12 ">
        <Link
          className="border-4 border-gray-400 rounded relative w-72 h-80 bg-[url(/illustration.png)] bg-cover hover:text-emerald-600 transition"
          href="/portfolio/illustrations"
        >
          <span className="absolute right-2 bottom-2 text-3xl font-semibold  ">
            Illustrations
          </span>
        </Link>
        <Link
          className="border-4 border-gray-400 rounded relative w-72 h-80 bg-[url(/websites.jpg)] bg-cover hover:text-emerald-600 transition"
          href="/portfolio/websites"
        >
          <span className="absolute right-2 bottom-2 text-3xl font-semibold">
            Websites
          </span>
        </Link>
        <Link
          className="border-4 border-gray-400 rounded relative w-72 h-80 bg-[url(/apps.jpg)] bg-cover hover:text-emerald-600 transition"
          href="/portfolio/applications"
        >
          <span className="absolute right-2 bottom-2 text-3xl font-semibold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
