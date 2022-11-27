import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Review from "../pages/Review";
import ContactUs from "../pages/Contact-us";
import Cart from "../pages/Cart";
import Chechout from "../checkout/Chechout";

import PageNotFound from "../components/404/404";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/checkout" element={<Chechout />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
