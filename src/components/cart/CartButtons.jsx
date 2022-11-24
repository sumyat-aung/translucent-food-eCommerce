import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartButtons = ({ EmptyCartHandle, cart }) => {
  return (
    <ButtonStyling className="flex flex-col w-[80vw] items-end">
      <div className="flex justify-around w-[100%] mt-20">
        <h2 className="text-yel text-3xl tracking-widest">
          Still want to add more foods? Explore ⇀
          <Link
            to={"/menu"}
            className="text-gray-50 inline-block hover:translate-x-1 transition-all ml-5"
          >
            Here
          </Link>
        </h2>
        {cart.subtotal && (
          <h1 className="text-3xl text-gray-50 font-mono">
            Total - {cart.subtotal.formatted_with_symbol}
          </h1>
        )}
      </div>
      <div className="flex justify-around w-[100%] mt-20">
        <button
          className="text-gray-50 text-2xl px-8 py-4 border-yel border rounded hover:bg-hover "
          onClick={EmptyCartHandle}
        >
          Empty Cart
        </button>
        <button className="text-gray-50 text-2xl px-8 py-4 border-yel border rounded hover:bg-hover ">
          Checkout
        </button>
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
`;
