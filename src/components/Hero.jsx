import React from "react";
import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-20 sm:mt-32">
      {/* hero left side */}
      <div className="text-[#414141] w-full sm:w-1/2 flex flex-col gap-6 pb-5 sm:p-0">
        <div>
          <h1 className="text-5xl font-semibold pb-5 prata-regular">
            Fall - Winter Collections
          </h1>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
        </div>
        <div>
          <button
            className="border-2 border-gray-700 text-gray-900 rounded-sm font-semibold
          py-2 px-8 hover:bg-gray-700 hover:text-white"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* hero right side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} />
    </div>
  );
}
