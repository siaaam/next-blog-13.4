import Image from "next/image";

const BlogPost = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between gap-5 py-16">
        <div className="flex-1 flex flex-col relative">
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-sm font-medium text-gray-500 my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, neque! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Modi id illo reprehenderit recusandae minima? Enim
            voluptate delectus nesciunt. Iure, similique.
          </p>
          <div className="flex items-center gap-5 absolute bottom-3 left-3">
            <Image
              src="/user1.jpg"
              alt="user img"
              height={60}
              width={60}
              className="object-contain rounded-full"
            />
            <span className="text-sm">Vincent Van D.</span>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/blog1.jpg"
            alt="blog "
            className="object-cover"
            height={350}
            width={650}
          />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          perferendis voluptatem esse impedit corrupti temporibus asperiores
          accusamus! Nihil, repudiandae. Eius, maxime nam ut illum harum
          debitis. Odit laborum, perspiciatis incidunt sequi, eos quasi nesciunt
          adipisci ratione impedit laboriosam sit quo veritatis itaque corporis
          numquam! Aspernatur tempore delectus porro nemo perferendis iure
          maxime, doloremque beatae rem ad sunt temporibus, dicta nisi ea culpa
          magnam atque placeat. Quisquam voluptatibus, odio culpa magnam quo
          voluptatum impedit perferendis voluptate necessitatibus non explicabo
          voluptatem ea, facilis quae? Ullam id nesciunt, facere optio
          voluptatibus cumque quod libero impedit possimus adipisci autem aut
          natus ea rerum quia suscipit! Rerum aliquid, qui fugit soluta tempora
          consequatur dolor autem non ab consequuntur nostrum, ratione molestiae
          placeat quis at pariatur mollitia quae earum amet delectus. Sint et
          consequatur quibusdam? Perspiciatis quos inventore hic ratione aperiam
          dicta voluptatum harum nisi vel atque excepturi ab commodi explicabo
          culpa enim optio et libero iste corrupti molestiae, dolore nulla.
          Unde, in! Necessitatibus reprehenderit atque iure ipsum veniam eaque
          consectetur sequi sint commodi, expedita, et dolores unde esse dolor
          eligendi est tempora molestias repellat magnam repellendus! Animi
          doloribus, reprehenderit tempore unde ad deserunt ipsum cumque a
          reiciendis dolorem vitae eaque id iusto itaque, placeat praesentium
          cum error laboriosam hic incidunt. Libero, quos. Beatae hic
          consequuntur facere. Quidem qui natus odio laboriosam exercitationem
          amet maiores dolore expedita, dignissimos autem explicabo illum
          asperiores non totam quaerat quas officia enim tenetur minus debitis!
          Distinctio mollitia ipsum cupiditate possimus beatae ipsa laborum
          molestiae impedit inventore vitae laboriosam ipsam deleniti, ullam
          qui, ducimus tenetur quae eligendi animi perferendis corrupti,
          delectus consequatur sint nisi! Cum accusamus molestiae dicta iste
          veniam ad minus cupiditate fugiat repudiandae repellat necessitatibus,
          mollitia dolores quos, iusto odio saepe quaerat? Aut animi porro
          provident possimus natus commodi eius architecto, ratione numquam
          autem? Id tempore culpa eveniet dicta?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam quos
          deleniti ad eius similique, soluta blanditiis? Minus sapiente
          doloremque ab doloribus, repellat dicta autem, saepe quibusdam, aut
          consectetur officiis ullam voluptatum velit earum consequuntur quas
          nesciunt in excepturi laborum.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          aliquam dolores ab assumenda rem voluptatum sit eveniet deleniti,
          quasi molestiae recusandae qui, explicabo perferendis, iure molestias?
          Nisi nobis, assumenda architecto quam sequi aperiam illum possimus
          odit officia itaque amet? Neque nostrum dignissimos consequatur sequi
          a. Animi tempora ratione, eaque voluptate officiis similique, impedit
          esse itaque fugit culpa eius cupiditate excepturi atque nobis dolore
          commodi necessitatibus possimus dignissimos! Minus commodi dolores quo
          libero aliquam corporis. Laborum autem esse ea eveniet deserunt,
          beatae ducimus! Eum quod pariatur doloribus culpa molestiae quidem
          distinctio libero officiis quaerat eaque! Iusto libero voluptatibus
          praesentium in fugit?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
