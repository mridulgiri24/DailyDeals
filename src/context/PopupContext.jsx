import React, { createContext, useEffect, useState } from "react";

export const PopupContext = createContext();

const PopupContextProvider = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const openPopup = (content) => {
    setPopupContent(content);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupContent("");
  };

  const value = {
    openPopup,
    closePopup,
    isPopupOpen,
    popupContent,
  };

  return (
    <PopupContext.Provider value={value}>
      {props.children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
