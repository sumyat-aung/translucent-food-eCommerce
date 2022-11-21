import React from "react";
import { Route, Routes } from "react-router-dom";

import ContactUs from "../pages/Contact-us";
import Home from "../pages/Home";
import Review from "../pages/Review";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
};

export default App;
