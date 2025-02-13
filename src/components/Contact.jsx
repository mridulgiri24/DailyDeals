import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import { toast } from "react-toastify";

export default function Contact() {
  const { closePopup } = useContext(PopupContext);

  return (
    <div className="bg-white p-8 rounded-md shadow-lg w-[90%] lg:w-[40%] relative">
      <button className="absolute -top-1 right-2 text-4xl" onClick={closePopup}>
        &times;
      </button>

      <div className="w-full">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="border border-[#025048] outline-none p-2 mb-3 w-full"
            placeholder="Name"
          />
          <input
            className="border border-[#025048] outline-none p-2 mb-3 w-full"
            placeholder="Email"
          />
          <textarea
            className="border border-[#025048] outline-none p-3 resize-none w-full"
            placeholder="Messsage"
            rows={5}
            // cols={70}
          />
          <button
            className="border mt-5 text-center border-[#025048] text-[#025048]
          py-2 px-5 hover:bg-[#025048] hover:text-white"
            type="submit"
            onClick={() => {
              toast.success("Message Sent!");
              closePopup();
            }}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
