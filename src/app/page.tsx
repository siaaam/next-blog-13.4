import Image from "next/image";
import Hero from "/public/hero.png";
export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-green-700 to-gray-400 bg-clip-text text-transparent">
          Better design for your digital products
        </h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="bg-emerald-600 p-5 rounded border-none text-lg font-light w-[max-content] text-white">
          See Our Works
        </button>
      </div>
      <div className="flex-1">
        <Image
          className="w-full h-[530px] object-cover"
          src={Hero}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
