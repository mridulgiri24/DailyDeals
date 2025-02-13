import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-between
      mt-14 bg-[#025048] px-6 lg:px-16 pt-16"
      >
        {/* left */}
        <div className="w-full lg:mb-10 pb-5 lg:pr-5 border-b lg:border-b-0 lg:border-r lg:w-[50%]">
          <h1 className="text-5xl text-white prata-regular mb-4 playfair-display">
            DailyDeals
          </h1>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repellat impedit a officiis nihil voluptate laboriosam dicta atque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repellat impedit a officiis nihil voluptate laboriosam dicta atque!
          </p>
          <div className="flex gap-1 mt-3 text-white">
            <i className="fa-brands fa-cc-visa "></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-apple-pay"></i>
            <i className="fa-brands fa-cc-amazon-pay"></i>
          </div>
        </div>
        {/* right */}
        <div className="w-full pt-5 lg:pl-5 lg:w-[50%] text-white">
          <h2 className="font-semibold text-3xl text-white mb-4 playfair-display">
            Newsletter
          </h2>
          <p className="text-base mb-6">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          {/* Newsletter */}
          <form className="border-b flex justify-between">
            <input
              className="border-none outline-none pb-2 w-[90%] bg-[#025048]"
              type="text"
              placeholder="Your Email"
            />
            <img className="size-8 cursor-pointer" src={assets.email_icon} />
          </form>
        </div>
      </div>
      <div className="bg-[#025048] pt-5 pb-2 text-center text-lg lg:text-base text-white">
        <p>
          Copyright 2025 All Right Reserved | This Website is made by Mridul
          Giri.
        </p>
      </div>
    </>
  );
}
