import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

import ProductItem from "./ProductItem";

export default function Featured() {
  const { products } = useContext(ShopContext);
  const [featured, setfeatured] = useState([]);
  const [bestSellers, setBestSellers] = useState(false);

  useEffect(() => {
    if (bestSellers) {
      const bestProducts = products.filter((item) => item.bestseller);
      setfeatured(bestProducts.slice(0, 5));
    } else {
      setfeatured(products.slice(0, 10));
    }
  }, [bestSellers]);

  return (
    <div className="px-6 lg:px-14">
      {/* Labels */}
      <div
        className="flex justify-around items-center mt-20 mb-10 
      border-b rounded p-2"
      >
        <h3
          className={`text-sm sm:text-lg cursor-pointer ${
            bestSellers
              ? "text-[#025048] font-medium"
              : "font-semibold text-[#025048]"
          }`}
          onClick={() => setBestSellers(false)}
        >
          LATEST COLLECTIONS
        </h3>
        <h3
          className={`text-sm sm:text-lg cursor-pointer ${
            bestSellers
              ? "font-semibold text-[#025048]"
              : "text-[#025048] font-medium"
          }`}
          onClick={() => setBestSellers(true)}
        >
          BEST SELLERS
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {featured.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
