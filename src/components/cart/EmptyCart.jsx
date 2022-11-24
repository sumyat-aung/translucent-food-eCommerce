import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assests/logo.png";

const EmptyCart = () => {
  return (
    <EmptyCardStyling className="flex justify-center items-center flex-col h-[90vh]">
      <h1 className="text-yel text-2xl sm:text-5xl">Your Cart Is Empty</h1>
      <h3 className="text-lg tracking-widest my-5 sm:text-3xl">
        Add Your Favourite Foods To Cart
      </h3>
      <h2 className="text-yel text-xl sm:text-lg tracking-widest mt-10">
        Explore Menu ⇀
        <Link
          to={"/menu"}
          className="text-gray-50 inline-block hover:translate-x-1 transition-all ml-5"
        >
          Here
        </Link>
        <img src={logo} alt="logo" className="w-[40px] inline-block ml-7" />
      </h2>
    </EmptyCardStyling>
  );
};

export default EmptyCart;

// --------------------- //

// styled components

const EmptyCardStyling = styled.div`
  h1,
  h2 {
    font-family: "Cormorant Upright", serif;
  }

  h3 {
    font-family: "Open Sans", sans-serif;
    color: #aaaaaa;
  }
`;
