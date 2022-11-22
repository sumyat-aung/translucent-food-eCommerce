import React from "react";

import Nav from "../components/header/Nav";
import spoon from "../assests/home & contact/spoon.svg";
import drink from "../assests/home & contact/drink.png";

const ContactUs = () => {
  return (
    <div className=" h-auto lg:h-[100vh]">
      <Nav />
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <p>Contact</p>
          <img src={spoon} alt="" />
          <h1>Find Us</h1>
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <h1>Opening Hours</h1>
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <div>
          <img src={drink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// Whether you're looking for a
// quick bite or a leisurely meal, Translucent is the perfect choice for anyone who wants great tasting food without having to compromise on quality or healthfulness.
