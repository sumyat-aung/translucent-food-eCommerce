import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartButtons = ({ EmptyCartHandle, cart }) => {
  return (
    <ButtonStyling className="flex flex-col lg:w-[80vw] items-end w-[100vw] px-5 sm:px-0">
      <div className="flex justify-around w-[100%] mt-20 md:flex-row flex-col items-center">
        <h2 className="text-yel text-lg sm:text-3xl tracking-widest">
          Still want to add more foods? Explore ⇀
          <Link
            to={"/menu"}
            className="text-gray-50 inline-block hover:translate-x-1 transition-all ml-5"
          >
            Here
          </Link>
        </h2>
        {cart.subtotal && (
          <h1 className="text-3xl text-gray-50 font-mono mt-10 md:mt-0">
            Total - {cart.subtotal.formatted_with_symbol}
          </h1>
        )}
      </div>
      <div className="flex justify-around w-[100%] mt-20">
        <button
          className="text-gray-50 text-lg sm:text-2xl px-5 py-4 border-yel border rounded hover:bg-hover sm:px-8 cursor-default lg:cursor-pointer"
          onClick={EmptyCartHandle}
        >
          Empty Cart
        </button>
        <Link
          className="text-gray-50 text-lg sm:text-2xl px-5 py-4 border-yel border rounded hover:bg-hover sm:px-8"
          to={"/checkout"}
        >
          Checkout
        </Link>
      </div>
    </ButtonStyling>
  );
};

export default CartButtons;

// --------------------- //

// styled components

let ButtonStyling = styled.div`
  button {
    font-family: "Cormorant Upright", serif;
    letter-spacing: 2px;
  }

  h2 {
    font-family: "Cormorant Upright", serif;
  }
  
  a {
    font-family: "Cormorant Upright", serif;
    letter-spacing: 2px;
  }
`;
