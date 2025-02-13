import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PopupContext } from "../context/PopupContext";

export default function Hero() {
  return (
    <div
      className="bg-[#025048] flex flex-col text-center lg:text-left lg:flex-row 
    w-full px-7 lg:pl-28 text-white"
    >
      <div className="flex flex-col pt-14 lg:pt-28 lg:w-1/2">
        <div>
          <h1 className="pb-5 text-base">WELCOME TO DAILYDEALS</h1>
          <p className="text-4xl lg:text-6xl playfair-display">
            Trendy, timeless, and tailored for you—shop fashion that fits your
            style, your vibe, and your life.
          </p>
        </div>
        <div className="my-5">
          <button
            className="border border-white text-white
          py-2 px-8 hover:bg-white hover:text-[#025048]"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <img className="w-full lg:w-[50%] py-5 lg:p-10" src={assets.hero_img1} />
    </div>
  );
}
