import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import PopupContextProvider from "./context/PopupContext.jsx";
import Popup from "./components/Popup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PopupContextProvider>
      <ShopContextProvider>
        <App />
        <Popup />
      </ShopContextProvider>
    </PopupContextProvider>
  </StrictMode>
);
