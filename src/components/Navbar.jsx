import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { PopupContext } from "../context/PopupContext";
import Contact from "./Contact";

export default function bar() {
  const [visible, setVisible] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const { openPopup } = useContext(PopupContext);

  return (
    <div
      className="flex items-center justify-between py-6 px-6 sm:px-12
      bg-[#025048]"
    >
      <Link to="/" onClick={() => setVisible(false)}>
        <h1 className="text-3xl text-white playfair-display">DailyDeals</h1>
      </Link>

      <ul className="hidden lg:flex gap-5 text-white">
        <Link to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </Link>

        <Link to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </Link>

        <Link to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </Link>

        <h4
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => openPopup(<Contact />)}
        >
          <p>CONTACT</p>
        </h4>
      </ul>

      <div className="flex items-center gap-6">
        <div className="group relative">
          {/* <Link to="/login" onClick={() => setVisible(false)}>
            <i className="fa-solid fa-user cursor-pointer text-white text-2xl"></i>
          </Link> */}

          {/* <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-700 text-slate-200 rounded">
              <p className="cursor-pointer hover:text-white">My Profile</p>
              <p className="cursor-pointer hover:text-white">Orders</p>
              <p className="cursor-pointer hover:text-white">Logout</p>
            </div>
          </div> */}
        </div>
        <Link to="/cart" onClick={() => setVisible(false)} className="relative">
          <i className="fa-solid fa-cart-shopping cursor-pointer text-white text-2xl"></i>
          <p
            className="absolute -top-1 right-0 w-4  text-center leading-4 bg-white text-[#025048]
          aspect-square rounded-full text-[10px]"
          >
            {getCartCount()}
          </p>
        </Link>
        {visible ? (
          <i
            onClick={() => setVisible(false)}
            className="fa-solid fa-xmark
            text-white text-xl pt-1 border py-1 px-2 cursor-pointer lg:hidden"
          ></i>
        ) : (
          <i
            onClick={() => setVisible(true)}
            className="fa-solid fa-bars
            text-white text-xl border py-1 px-2 cursor-pointer lg:hidden"
          ></i>
        )}
      </div>

      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-20 right-0
          overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
      >
        <div className="flex flex-col text-[#025048]">
          <Link className="py-3 pl-6" onClick={() => setVisible(false)} to="/">
            HOME{" "}
          </Link>
          <Link
            className="py-3 pl-6"
            onClick={() => setVisible(false)}
            to="/collection"
          >
            COLLECTION{" "}
          </Link>
          <Link
            className="py-3 pl-6"
            onClick={() => setVisible(false)}
            to="/about"
          >
            ABOUT{" "}
          </Link>
          {/* <Link
            className="py-3 pl-6"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            CONTACT{" "}
          </Link> */}
          <h4
            className="py-3 pl-6"
            onClick={() => {
              openPopup(<Contact />);
              setVisible(false);
            }}
          >
            <p>CONTACT</p>
          </h4>
        </div>
      </div>
    </div>
  );
}
