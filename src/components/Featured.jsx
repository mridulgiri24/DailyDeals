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
    <>
      {/* Labels */}
      <div className="flex justify-around items-center mt-32 mb-10 bg-slate-200 p-2">
        <h3
          className={`text-sm sm:text-lg cursor-pointer ${
            bestSellers
              ? "text-gray-500 font-semibold"
              : "font-bold text-gray-900"
          }`}
          onClick={() => setBestSellers(false)}
        >
          LATEST COLLECTIONS
        </h3>
        <h3
          className={`text-sm sm:text-lg cursor-pointer ${
            bestSellers
              ? "font-bold text-gray-900"
              : "text-gray-500 font-semibold"
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
    </>
  );
}
