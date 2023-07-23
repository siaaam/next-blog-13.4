import Button from "@/components/Button/Button";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image
          fill={true}
          className="object-cover filter grayscale"
          src="/about2.jpg"
          alt=""
        />
        <div className="absolute bottom-5 left-5 bg-green-700 p-4 text-white">
          <h2 className="text-2xl font-bold leading-5 tracking-wide">
            Digital Storytellers
          </h2>
          <h3 className="font-semibold leading-6 text-xl mt-2 tracking-tight">
            Handcrafting award winning digital experience
          </h3>
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-5 mb-10">
        <div className="flex-1">
          <h1 className="font-bold text-2xl mb-2">Who Are We?</h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta
            illum quia distinctio aperiam modi at. Culpa omnis, esse sit, unde
            error fugiat distinctio labore quo laboriosam in ab odit
            <br />! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti tenetur tempora voluptas itaque non quidem ipsa iure
            maxime. Aut sint magnam iste eos consequatur saepe, rem error alias?
            Fuga impedit minus inventore obcaecati animi sed at voluptate,
            molestias a error?
          </p>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl mb-2">What We Do?</h1>
          <p className="mb-5 text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta
            illum quia distinctio aperiam modi at. Culpa omnis, esse sit, unde
            error fugiat distinctio labore quo laboriosam in ab odit. <br />
            - Creative Design. <br /> - Dynamic Illustrations . <br /> - Fast
            and Handy Mobile Apps
          </p>

          <Button>Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
