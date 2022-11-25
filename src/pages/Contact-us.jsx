import React from "react";
import styled from "styled-components";

import Nav from "../components/header/Nav";
import spoon from "../assests/spoon.svg";
import drink from "../assests/drink.png";
import Admin from "../administrator/administrator";

const ContactUs = () => {
  return (
    <div className="h-[100vh]">
      <Nav />

      <ContactStyling className="flex lg:h-[88%] justify-between items-center lg:flex-row flex-col lg:mt-0 mt-10">
        <div className="lg:w-1/2 w-full flex lg:pl-20 px-3 flex-col items-center ">
          <div>
            <h1 className="text-gray-50 text-2xl">Contact</h1>
            <img src={spoon} alt="spoon" className="w-[40px]" />
            <h1 className="text-yel text-6xl mt-10">Find Us</h1>
            <p className="text-gray-50 tracking-widest mt-5">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
            </p>
            <h1 className="text-yel text-4xl my-10">Opening Hours</h1>
            <p className="text-gray-50 tracking-widest mb-5 font-mono">
              Mon - Fri: 10:00 Am - 02:00 Am
            </p>
            <p className="text-gray-50 tracking-widest font-mono ">
              Sat - Sun: 10:00 Am - 03:00 Am
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center lg:items-center lg:my-0 mb-10 mt-10">
          <img src={drink} alt="drink" className="w-[350px]" />
        </div>
      </ContactStyling>
      <Admin />
    </div>
  );
};

export default ContactUs;

// --------------------- //

// styled components

const ContactStyling = styled.div`
  h1 {
    font-family: "Cormorant Upright", serif;
  }
`;
