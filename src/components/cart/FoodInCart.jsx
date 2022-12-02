import React, { useContext } from "react";
import styled from "styled-components";

import { context } from "../../context/context";

const FoodInCart = ({ data }) => {
  // getting data from context
  let contextConsumer = useContext(context);
  let { RemoveFood, UpdateCartQuantity } = contextConsumer;

  return (
    <CardStyling className="max-w-sm sm:w-[384px] w-[340px] rounded overflow-hidden shadow bg-card m-[5px] sm:m-[25px]">
      <img
        className="w-full h-[300px] object-cover"
        src={data.image.url}
        alt={data.name}
      />
      <div className="px-6 py-4 flex justify-between">
        <h1 className="font-bold text-yel text-3xl">{data.name}</h1>
        <h2 className=" text-gray-50">
          {data.line_total.formatted_with_symbol}
        </h2>
      </div>
      <div className="flex justify-between w-full px-6 mb-5 items-center mt-4">
        <div className="flex items-center w-1/3 justify-between">
          <button
            className="text-2xl text-gray-200  border-yel border rounded  w-[30px] h-[30px] flex justify-center items-center pb-1 hover:bg-hover cursor-default lg:cursor-pointer"
            onClick={() => UpdateCartQuantity(data.id, data.quantity - 1)}
          >
            -
          </button>
          <h1 className="text-4xl text-yel pb-2">{data.quantity}</h1>
          <button
            className="text-2xl text-gray-200  border-yel border rounded w-[30px] h-[30px] flex justify-center items-center pb-1 hover:bg-hover cursor-default lg:cursor-pointer"
            onClick={() => UpdateCartQuantity(data.id, data.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="text-gray-50 text-md px-5 py-2 border-yel border rounded hover:bg-hover cursor-default lg:cursor-pointer"
          onClick={() => RemoveFood(data.id)}
        >
          Remove From Cart
        </button>
      </div>
    </CardStyling>
  );
};

export default FoodInCart;

// --------------------- //

// styled components

let CardStyling = styled.div`
  h1 {
    font-family: "Cormorant Upright", serif;
  }

  h2 {
    font-family: "Cormorant Upright", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
  }
`;
