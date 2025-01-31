import React from "react";
import { assets } from "../assets/assets";

export default function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center gap-12 mt-32 text-center text-gray-700 bg-slate-200 p-4">
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-500">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.return_icon} />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-500">We provide 7 days free return policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support_icon} />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-500">we provide 24/7 customer support</p>
      </div>
    </div>
  );
}
