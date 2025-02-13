import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Contact from "../components/Contact";
import OurPolicy from "../components/OurPolicy";

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
      <div className="flex flex-col lg:flex-row mt-20 px-6 lg:px-20">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse lg:flex-row">
          {/* all image */}
          <div /*className="flex flex-row lg:flex-col w-[25%]
           gap-3 lg:w-[50%] mt-5 lg:mt-0 overflow-x-scroll"*/
            className="grid grid-cols-4 lg:grid-flow-col lg:grid-rows-4
            lg:grid-cols-1 gap-4 w-full lg:w-[40%] mt-5 lg:mt-0"
          >
            {selectedProduct.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-full cursor-pointer"
              />
            ))}
          </div>
          {/* main image */}
          <div className="flex items-center justify-around">
            <img src={image} className="w-full lg:w-[60%]" />
          </div>
        </div>
        {/* product details */}
        <div className="lg:w-1/2 text-gray-700 mt-14 lg:mt-0">
          <h1 className="mb-6 font-semibold text-4xl text-[#025048] playfair-display">
            {selectedProduct.name}
          </h1>
          <h3 className="mb-6 font-medium text-3xl text-gray-800">
            {currency}
            {selectedProduct.price}
          </h3>
          <p className="mb-6 text-base">{selectedProduct.description}</p>

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
                    item === sizes ? "border border-green-800" : ""
                  }`}
                >
                  {item}
                </li>
              </ul>
            ))}
          </div>
          {/* add to cart button */}
          <button
            onClick={() => addToCart(selectedProduct._id, sizes)}
            className="border mt-8 text-center border-[#025048] text-[#025048]
          py-2 px-5 hover:bg-[#025048] hover:text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <OurPolicy />
    </>
  ) : (
    ""
  );
}
