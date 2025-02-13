import { createContext, useState, useRef, useEffect } from "react";
import products from "../assets/assets.js";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 40;

  const [cartItems, setCartItems] = useState({});

  // add to cart
  const addToCart = async (productId, productSize) => {
    const cartData = structuredClone(cartItems);

    if (!productSize) {
      toast.error("Select Product Size");
      return;
    } else {
      toast.success("Product added to the cart");
      if (cartData[productId]) {
        if (cartData[productId][productSize]) {
          cartData[productId][productSize] += 1;
        } else {
          cartData[productId][productSize] = 1;
        }
      } else {
        cartData[productId] = {};
        cartData[productId][productSize] = 1;
      }
    }

    setCartItems(cartData);

    sessionStorage.setItem("cartData", JSON.stringify(cartData)); //set cart data to session
  };

  // get cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          totalCount += cartItems[id][size];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemid, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemid][size] = quantity;
    // console.log(cartData);

    setCartItems(cartData);

    sessionStorage.setItem("cartData", JSON.stringify(cartData)); //set cart data to session
  };

  useEffect(() => {
    // get store cart data from session
    const storedData = sessionStorage.getItem("cartData");
    const data = JSON.parse(storedData);
    // console.log(data);
    if (data) {
      setCartItems(data);
    }
  }, []);

  const value = {
    products,
    currency,
    deliveryFee,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
