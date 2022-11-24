import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assests/logo.png";

const EmptyCard = () => {
  return (
    <EmptyCardStyling className="flex justify-center items-center flex-col h-[90vh]">
      <h1 className="text-yel text-5xl">Your Cart Is Empty</h1>
      <h3 className="text-3xl tracking-widest my-5">
        Add your Favourite Foods To Cart
      </h3>
      <h2 className="text-yel text-3xl tracking-widest  mt-10">
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

export default EmptyCard;

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
