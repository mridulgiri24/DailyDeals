import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="collection" element={<Collection />} />
      <Route path="about" element={<About />} />
      <Route path="product/:productId" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      {/* <Route path="login" element={<Login />} /> */}
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
