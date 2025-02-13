import React from "react";
import { assets } from "../assets/assets";

export default function OurPolicy() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-evenly items-center
    gap-12 text-center text-[#025048] mt-10 py-20 lg:p-20"
    >
      <div>
        <img className="w-20 m-auto mb-5" src={assets.exchange_icon} />
        <p className="font-medium text-4xl playfair-display">
          Easy Exchange Policy
        </p>
        <p className="text-base mt-3">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img className="w-20 m-auto mb-5" src={assets.return_icon} />
        <p className="font-medium text-3xl playfair-display">
          7 Days Return Policy
        </p>
        <p className="text-base mt-3">We provide 7 days free return policy</p>
      </div>
      <div>
        <img className="w-20 m-auto mb-5" src={assets.support_icon} />
        <p className="font-medium text-3xl playfair-display">
          Best customer support
        </p>
        <p className="text-base mt-3">we provide 24/7 customer support</p>
      </div>
    </div>
  );
}
