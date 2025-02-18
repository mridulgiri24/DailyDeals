import React, { useContext, useEffect } from "react";
import { PopupContext } from "../context/PopupContext";

export default function Popup() {
  const { isPopupOpen, popupContent } = useContext(PopupContext);

  useEffect(() => {
    if (isPopupOpen) {
      // Disable scrolling on the body
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling
      document.body.style.overflow = "auto";
    }
    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {popupContent}
    </div>
  );
}
