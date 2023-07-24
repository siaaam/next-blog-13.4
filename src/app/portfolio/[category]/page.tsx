import PortfolioItem from "@/components/PortfolioItem";

const data = [
  {
    id: 1,
    title: "Illustration - 1",
    category: "illustrations",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error dignissimos quisquam. Distinctio ipsum error excepturi ea dignissimos est minima necessitatibus, facilis corporis inventore sit voluptatem quibusdam, quia at illum.",
    img: "/i2.jpg",
  },
  {
    id: 2,
    title: "Illustration - 2",
    category: "illustrations",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error dignissimos quisquam. Distinctio ipsum error excepturi ea dignissimos est minima necessitatibus, facilis corporis inventore sit voluptatem quibusdam, quia at illum.",
    img: "/i3.jpg",
  },
  {
    id: 3,
    title: "Website - 1",
    category: "websites",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error dignissimos quisquam. Distinctio ipsum error excepturi ea dignissimos est minima necessitatibus, facilis corporis inventore sit voluptatem quibusdam, quia at illum.",
    img: "/web1.jpg",
  },
  {
    id: 4,
    title: "Website - 2",
    category: "websites",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error dignissimos quisquam. Distinctio ipsum error excepturi ea dignissimos est minima necessitatibus, facilis corporis inventore sit voluptatem quibusdam, quia at illum.",
    img: "/web2.jpg",
  },
  {
    id: 5,
    title: "Application - 1",
    category: "applications",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error dignissimos quisquam. Distinctio ipsum error excepturi ea dignissimos est minima necessitatibus, facilis corporis inventore sit voluptatem quibusdam, quia at illum.",
    img: "/app1.jpg",
  },
  {
    id: 6,
    title: "Application - 2",
    category: "applications",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error dignissimos quisquam. Distinctio ipsum error excepturi ea dignissimos est minima necessitatibus, facilis corporis inventore sit voluptatem quibusdam, quia at illum.",
    img: "/app2.jpg",
  },
];

const Category = ({ params }: any) => {
  const category = params.category;
  const filterDataByCategory = data.filter((d) => d.category === category);
  return (
    <div>
      <h4 className="uppercase font-extrabold text-emerald-700 tracking-wider	">
        {category}
      </h4>
      {filterDataByCategory.map((portfolio, idx) => {
        const { title, des, img } = portfolio;
        return (
          <PortfolioItem
            isEven={idx % 2 === 0 ? "flex-row-reverse" : "flex-row"}
            title={title}
            desc={des}
            img={img}
          />
        );
      })}
    </div>
  );
};

export default Category;
