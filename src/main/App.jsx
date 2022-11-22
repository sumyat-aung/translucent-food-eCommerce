import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Review from "../pages/Review";
import ContactUs from "../pages/Contact-us";
import Cart from "../pages/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
