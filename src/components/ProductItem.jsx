import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="cursor-pointer text-gray-800">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
        />
      </div>
      <span className="h-4">
        <h3 className="pt-3 pb-1 text-base">{name}</h3>
      </span>
      <h4 className="font-medium">
        {currency}
        {price}
      </h4>
    </Link>
  );
}
