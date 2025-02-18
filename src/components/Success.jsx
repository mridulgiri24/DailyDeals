import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

export default function Success() {
  const { closePopup } = useContext(PopupContext);

  return (
    <div className="bg-white p-8 rounded-md shadow-lg  relative">
      <button className="absolute -top-1 right-2 text-4xl" onClick={closePopup}>
        &times;
      </button>
      <h1 className="text-4xl playfair-display">
        Order Successful
      </h1>
    </div>
  );
}
