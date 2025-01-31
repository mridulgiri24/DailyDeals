import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

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
    <div className="mt-20">
      {cartData.map((item, index) => {
        const productData = products.find((product) => product._id == item._id);

        return (
          <>
            <div
              key={index}
              className="flex flex-col justify-evenly border p-3"
            >
              <div className="flex gap-6 text-gray-800">
                <img className="w-20" src={productData.image[0]} />
                <div className="flex flex-col gap-3">
                  <p className="text-xl font-medium">{productData.name}</p>
                  <div className="flex">
                    <h3 className="font-medium text-lg">
                      {currency}
                      {productData.price}
                    </h3>
                    <span className="border border-gray-300 bg-gray-100 cursor-pointer px-4 py-1 ml-4">
                      {item.size}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
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
                    className="border pl-3 max-w-24 outline-none"
                    min={1}
                    type="number"
                    defaultValue={item.quantity}
                  />
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="border px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="mt-14">
        <h1 className="text-3xl font-bold mb-2">CART TOTAL</h1>
        <span className="flex justify-between border-b mb-2">
          <h3 className="text-xl font-medium">Subtotal</h3>
          <h3 className="text-xl">
            {currency}
            {subTotal}
          </h3>
        </span>
        <span className="flex justify-between border-b mb-2">
          <h3 className="text-xl font-medium">Shipping Fee</h3>
          <h3 className="text-xl">
            {currency}
            {deliveryFee}
          </h3>
        </span>
        <span className="flex justify-between border-b mb-2">
          <h3 className="text-xl font-medium">Total</h3>
          <h3 className="text-xl">
            {currency}
            {total}
          </h3>
        </span>
      </div>
    </div>
  );
}
