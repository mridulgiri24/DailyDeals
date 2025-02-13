import React from "react";
import { assets } from "../assets/assets";

export default function About() {
  return (
    <>
      <div
        className="bg-[#025048] flex flex-col text-center lg:text-left lg:flex-row 
        w-full px-7 lg:pl-28 text-white"
      >
        <div className="flex flex-col pt-14 lg:pt-28 lg:w-1/2">
          <div>
            <h1 className="pb-5 text-5xl lg:text-7xl playfair-display">
              About Us
            </h1>
            <p className=" text-lg lg:text-xl">
              Welcome to the world of DailyDeals, where savings and convenience
              come together to bring you the best discounts on top-quality
              products. Discover our story, the passion that drives us, and our
              commitment to delivering unbeatable value every day.
            </p>
          </div>
        </div>
        <img
          className="w-full lg:w-[50%] py-5 lg:p-10"
          src={assets.about_img1}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 py-14 px-5 lg:p-20 text-gray-800">
        <div className="w-full lg:w-1/2">
          <h1 className="mb-3">OUR STORY</h1>
          <h2
            className="text-4xl lg:text-5xl playfair-display
         text-[#025048]"
          >
            Explore DailyDeals and Our Unbeatable Offers
          </h2>
        </div>
        <p className="w-full lg:w-1/2">
          Step into the world of DailyDeals, where we are dedicated to bringing
          you incredible discounts on top-quality products that enhance your
          everyday life. Our journey is a testament to our commitment to
          affordability, convenience, and unbeatable value. Discover our story,
          meet the experts who curate the best deals, and experience the
          excitement of finding amazing offers every day. Explore the heart and
          soul of our store, where every deal is designed to make your shopping
          experience more rewarding and enjoyable.
        </p>
      </div>
      <img className="px-5 lg:px-10" src={assets.about_img2} />
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 pt-20 px-5 lg:pt-20 lg:px-20 text-gray-800">
        <div>
          <h1
            className="text-4xl playfair-display
         text-[#025048] pb-4"
          >
            Our Vision
          </h1>
          <p>
            Our vision is to make everyday shopping effortless and rewarding
            with unbeatable deals on quality products. We are dedicated to
            offering incredible discounts that enhance daily living, whether
            it’s upgrading your home, finding the perfect gift, or indulging in
            everyday essentials. Our mission is to bring value and convenience
            into your life, making every purchase a smart and satisfying
            experience.
          </p>
        </div>
        <div>
          <h1
            className="text-4xl playfair-display
         text-[#025048] pb-4"
          >
            Our Goals
          </h1>
          <p>
            Our values are the foundation upon which DailyDeals is built. We
            prioritize affordability, quality, and customer satisfaction in
            everything we do. Integrity, transparency, and sustainability are at
            the core of our values, ensuring that our deals not only offer great
            savings but also reflect ethical and responsible sourcing. We
            believe in the power of smart shopping to enhance lives, bring
            people together, and create rewarding experiences every day.
          </p>
        </div>
      </div>
    </>
  );
}
