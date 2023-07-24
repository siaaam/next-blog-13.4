import BlogItem from "@/components/BlogItem";

const data = [
  {
    id: 1,
    title: "Blog - 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores, numquam perspiciatis quasi veniam at, nobis ad aliquam doloremque maiores enim ducimus ea esse sit debitis quo pariatur. Quaerat, voluptatibus?",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    title: "Blog - 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores, numquam perspiciatis quasi veniam at, nobis ad aliquam doloremque maiores enim ducimus ea esse sit debitis quo pariatur. Quaerat, voluptatibus?",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    title: "Blog - 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores, numquam perspiciatis quasi veniam at, nobis ad aliquam doloremque maiores enim ducimus ea esse sit debitis quo pariatur. Quaerat, voluptatibus?",
    image: "/blog3.jpg",
  },
  {
    id: 4,
    title: "Blog - 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores, numquam perspiciatis quasi veniam at, nobis ad aliquam doloremque maiores enim ducimus ea esse sit debitis quo pariatur. Quaerat, voluptatibus?",
    image: "/blog4.jpg",
  },
  {
    id: 5,
    title: "Blog - 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores, numquam perspiciatis quasi veniam at, nobis ad aliquam doloremque maiores enim ducimus ea esse sit debitis quo pariatur. Quaerat, voluptatibus?",
    image: "/blog5.jpg",
  },
  {
    id: 6,
    title: "Blog - 6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores, numquam perspiciatis quasi veniam at, nobis ad aliquam doloremque maiores enim ducimus ea esse sit debitis quo pariatur. Quaerat, voluptatibus?",
    image: "/blog6.jpg",
  },
];

const Blog = () => {
  return (
    <div className="space-y-10 py-12">
      {data.map((blog) => {
        const { id, title, desc, image } = blog;
        return (
          <BlogItem key={id} id={id} title={title} desc={desc} image={image} />
        );
      })}
    </div>
  );
};

export default Blog;
