import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-32 bg-slate-200 p-4">
        {/* left */}
        <div className="w-full mb-10 sm:w-[30%]">
          <h1 className="text-3xl text-gray-900  prata-regular mb-4">
            DailyDeals.
          </h1>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repellat impedit a officiis nihil voluptate laboriosam dicta atque!
          </p>
          <div className="flex gap-1 mt-3">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-apple-pay"></i>
            <i className="fa-brands fa-cc-amazon-pay"></i>
          </div>
        </div>
        {/* middle */}
        <div className="w-full mb-10 sm:w-[30%] text-gray-700">
          <h2 className="font-semibold text-lg text-gray-950 mb-4">COMPANY</h2>
          <ul className="text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div className="w-full sm:w-[30%] text-gray-700">
          <h2 className="font-semibold text-lg text-gray-950 mb-4">
            NEWSLETTER
          </h2>
          <p className="text-sm mb-6">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          {/* Newsletter */}
          <form className="border-b border-black flex justify-between">
            <input
              className="border-none outline-none pb-2 w-[90%] bg-slate-200"
              type="text"
              placeholder="Your Email"
            />
            <img className="size-8 cursor-pointer" src={assets.email_icon} />
          </form>
        </div>
      </div>
      <div className="bg-slate-200 border-t p-5 text-center text-xs sm:text-base text-gray-700 font-medium">
        <p>
          Copyright 2024 All Right Reserved | This Website is made by Mridul
          Giri.
        </p>
      </div>
    </>
  );
}
