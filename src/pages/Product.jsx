import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Contact from "../components/Contact";

export default function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [image, setImage] = useState("");
  const [sizes, setSizes] = useState("");

  const fetchProductData = () => {
    const matchingProduct = products.find((item) => productId == item._id);
    if (matchingProduct) {
      setSelectedProduct(matchingProduct);
      setImage(matchingProduct.image[0]);
      // return null;
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return selectedProduct ? (
    <>
      <div className="flex flex-col sm:flex-row mt-20 ">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row">
          {/* all image */}
          <div className="flex sm:flex-col w-[50%]">
            {selectedProduct.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="sm:mb-3 w-full cursor-pointer"
              />
            ))}
          </div>
          {/* main image */}
          <div className="flex items-center justify-around">
            <img src={image} className="w-[60%]" />
          </div>
        </div>
        {/* product details */}
        <div className="sm:w-1/2 text-gray-700">
          <h1 className="mb-6 font-semibold text-3xl text-gray-800">
            {selectedProduct.name}
          </h1>
          <h3 className="mb-6 font-medium text-2xl text-gray-800">
            {currency}
            {selectedProduct.price}
          </h3>
          <p className="mb-6">{selectedProduct.description}</p>

          {/* size */}
          <h4 className="mb-4 text-gray-800 font-semibold text-lg">
            Select Size
          </h4>
          <div className="flex gap-3">
            {selectedProduct.sizes.map((item, index) => (
              <ul key={index}>
                <li
                  onClick={() => setSizes(item)}
                  className={`border border-gray-300 bg-gray-100 cursor-pointer px-4 py-1 ${
                    item === sizes ? "border border-gray-950" : ""
                  }`}
                >
                  {item}
                </li>
              </ul>
            ))}
          </div>
          {/* add to cart button */}
          <button onClick={()=> addToCart(selectedProduct._id, sizes)} className="mt-8 rounded-sm font-semibold py-2 px-5 bg-gray-700 text-white">
            ADD TO CART
          </button>
        </div>
      </div>
      <Contact />
    </>
  ) : (
    ""
  );
}
