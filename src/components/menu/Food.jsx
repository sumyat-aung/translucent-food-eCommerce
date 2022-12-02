import React, { useState } from "react";
import styled from "styled-components";

const Food = ({ data, AddToCart, setModal }) => {
  // add to card handling
  const AddToCartHandle = (id) => {
    AddToCart(id);
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 1700);
  };

  return (
    <CardStyling className="max-w-sm rounded overflow-hidden shadow bg-card m-[25px]">
      <img
        className="w-full h-[300px] object-cover"
        src={data.image.url}
        alt={data.name}
      />
      <div className="px-6 py-4 flex justify-between">
        <h1 className="font-bold text-yel text-3xl">{data.name}</h1>
        <h2 className=" text-gray-50">{data.price.formatted_with_symbol}</h2>
      </div>
      <p
        className="text-gray-300 text-base px-6 pt-2"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></p>
      <i
        className="fa-solid fa-cart-shopping hover:text-yellow-600 text-yel text-lg float-right pb-10 px-6 mt-5 lg:cursor-pointer cursor-default"
        onClick={() => AddToCartHandle(data.id)}
      ></i>
    </CardStyling>
  );
};

export default Food;

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
