import Button from "@/components/Button/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl text-center mt-16 mb-32 font-bold">
        Let's Keep in Touch
      </h1>
      <div className="flex gap-5">
        <div className="flex-1 h-[500px] relative">
          <Image
            className="object-contain "
            src="/contact.png"
            alt="contact"
            fill={true}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input
            className="bg-transparent p-5 outline-none text-gray-500 border-2 border-gray-500 text-xl font-bold"
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
          <input
            className="bg-transparent p-5 outline-none text-gray-500 border-2 border-gray-500 text-xl font-bold"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <textarea
            className="bg-transparent p-5 outline-none text-gray-500 border-2 border-gray-500 text-xl font-bold"
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
