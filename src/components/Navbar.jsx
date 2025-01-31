import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

export default function bar() {
  const [visible, setVisible] = useState(false);
  const { scrollToContact, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium border-b">
      <Link to="/">
        <h1 className="text-3xl text-gray-900  prata-regular">DailyDeals.</h1>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
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
          onClick={scrollToContact}
        >
          <p>CONTACT</p>
        </h4>
      </ul>

      <div className="flex items-center gap-6">
        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} className="cursor-pointer w-6" />
          </Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-700 text-slate-200 rounded">
              <p className="cursor-pointer hover:text-white">My Profile</p>
              <p className="cursor-pointer hover:text-white">Orders</p>
              <p className="cursor-pointer hover:text-white">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="cursor-pointer w-8" />
          <p
            className="absolute right-0 bottom-0 w-4 text-center leading-4 bg-black text-white
          aspect-square rounded-full text-[10px]"
          >
            {getCartCount()}
          </p>
        </Link>
        {visible ? (
          <img
            src={assets.close_icon}
            className="w-6 cursor-pointer sm:hidden"
            onClick={() => setVisible(false)}
          />
        ) : (
          <img
            src={assets.menu_icon}
            className="w-6 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
          />
        )}
      </div>

      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-20 right-0
          overflow-hidden bg-gray-700 transition-all ${
            visible ? "w-full" : "w-0"
          }`}
      >
        <div className="flex flex-col text-white">
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
          <Link
            className="py-3 pl-6"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            CONTACT{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
