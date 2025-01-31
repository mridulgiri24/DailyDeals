import { createContext, useState, useRef } from "react";
import products from "../assets/assets.js";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 40;

  const [cartItems, setCartItems] = useState({});

  // contact scroll effect
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // add to cart
  const addToCart = async (productId, productSize) => {
    const cartData = structuredClone(cartItems);

    if (!productSize) {
      toast.error("Select Product Size");
      return;
    }

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

    setCartItems(cartData);
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
    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    deliveryFee,
    contactRef,
    scrollToContact,
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
