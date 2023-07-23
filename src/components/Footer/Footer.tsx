import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-12 flex justify-between items-center">
      <div>&copy; 2023 Mammamia. All rights reserved</div>
      <div className="flex items-center gap-2.5">
        <Image
          className="opacity-60 cursor-pointer"
          src="/1.png"
          alt="Facebook"
          width={15}
          height={15}
        />
        <Image
          className="opacity-60 cursor-pointer"
          src="/2.png"
          alt="Instagram"
          width={15}
          height={15}
        />
        <Image
          className="opacity-60 cursor-pointer"
          src="/3.png"
          alt="Twitter"
          width={15}
          height={15}
        />
        <Image
          className="opacity-60 cursor-pointer"
          src="/4.png"
          alt="Youtube"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
