import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

export default function Popup() {
  const { isPopupOpen, popupContent } = useContext(PopupContext);
  if (!isPopupOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {popupContent}
    </div>
  );
}
