import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Contact() {
  const { contactRef } = useContext(ShopContext);

  return (
    <div ref={contactRef} className="mt-32 flex flex-col sm:flex-row gap-10">
      {/* left div */}
      <div className="w-full sm:w-1/2 text-gray-700 bg-slate-100 p-4">
        <h3 className="text-4xl font-semibold mb-5 prata-regular">Contact Us</h3>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          assumenda amet fugit sint aliquid quae nisi repellendus quasi quos,
          voluptatibus praesentium repudiandae!
        </p>
        <p className="mb-1 text-lg font-medium">195 E Parker Square Dr, Parker, CO 801</p>
        <p className="text-lg font-medium">Tel: +43 982-314-0958</p>
      </div>
      {/* right div */}
      <div className="w-full sm:w-1/2">
        <form>
          <input
            className="border border-gray-700 outline-none p-2 mb-3 w-full"
            placeholder="Name"
          />
          <input
            className="border border-gray-700 outline-none p-2 mb-3 w-full"
            placeholder="Email"
          />
          <textarea
            className="border border-gray-700 outline-none p-3 resize-none w-full"
            placeholder="Messsage"
            rows={5}
            // cols={70}
          />
          <button
            className="border border-gray-700 text-gray-700 font-semibold
          py-2 px-6 hover:bg-gray-700 hover:text-white"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
