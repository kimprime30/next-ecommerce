"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/20780453/pexels-photo-20780453/free-photo-of-natureza-filiais-setores-galhos.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/20780442/pexels-photo-20780442/free-photo-of-natureza-filiais-setores-galhos.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/20793353/pexels-photo-20793353/free-photo-of-madeira-agua-flores-arbusto.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/20749268/pexels-photo-20749268/free-photo-of-natureza-filiais-setores-galhos.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer  "
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
