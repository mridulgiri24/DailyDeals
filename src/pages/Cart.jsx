import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, products, currency, deliveryFee, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const getCartItems = () => {
    const tempData = [];
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id == items);
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
          totalAmount += itemInfo.price * cartItems[items][size];
        }
      }
    }

    setCartData(tempData);
    setSubTotal(totalAmount);
    if (totalAmount > 0) {
      setTotal(totalAmount + deliveryFee);
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [cartItems]);

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-20 lg:mt-32 mx-4 lg:mx-14">
      {cartData.length > 0 ? (
        <>
          <div className="w-full lg:w-[60%]">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id == item._id
              );

              return (
                <div
                  key={index}
                  className="border bg-gray-50 flex flex-col justify-evenly p-2"
                >
                  <div
                    className="grid grid-cols-3 lg:grid-cols-6 justify-items-center 
                items-center gap-2 lg:gap-6 text-gray-800"
                  >
                    <img
                      className="w-10 lg:w-full"
                      src={productData.image[0]}
                    />
                    <p className="text-xs lg:text-lg font-medium text-[#025048]">
                      {productData.name}
                    </p>
                    <span
                      className="border w-full h-fit border-gray-300 bg-gray-100 
                cursor-pointer py-1 text-center"
                    >
                      {item.size}
                    </span>
                    <h3 className="font-medium w-full text-sm lg:text-xl text-center">
                      {currency}
                      {productData.price}
                    </h3>
                    <input
                      onClick={(e) =>
                        e.target.value === "" || e.target.value === "0"
                          ? null
                          : updateQuantity(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                      className="border max-w-full  lg:pl-3 text-center outline-none"
                      min={1}
                      type="number"
                      defaultValue={item.quantity}
                    />
                    <img
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="w-5 lg:w-8 cursor-pointer"
                      src={assets.delete_icon}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-[30%]">
            <div className="bg-gray-50 flex flex-col border text-gray-800 px-3">
              <h1 className="text-3xl my-3 text-center underline text-[#025048] playfair-display">
                Cart Totals
              </h1>
              <span className="flex justify-between p-2 border-b mb-2">
                <h3 className="text-xl font-medium">Subtotal</h3>
                <h3 className="text-xl">
                  {currency}
                  {subTotal}
                </h3>
              </span>
              <span className="flex justify-between p-2 border-b mb-2">
                <h3 className="text-xl font-medium">Shipping Fee</h3>
                <h3 className="text-xl">
                  {currency}
                  {deliveryFee}
                </h3>
              </span>
              <span className="flex justify-between p-2 border-b mb-2">
                <h3 className="text-xl font-medium">Total</h3>
                <h3 className="text-xl">
                  {currency}
                  {total}
                </h3>
              </span>
              <Link
                className="border mx-5 my-7 text-center border-[#025048] text-[#025048] 
                      py-5 px-8 hover:bg-[#025048] hover:text-white"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="border flex flex-col lg:flex-row items-center bg-gray-50">
            <img className="w-full " src={assets.emptycart_img} />
            <h1 className="w-full text-6xl lg:text-7xl text-center text-[#025048] playfair-display">
              Your Cart is Currently Empty.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
