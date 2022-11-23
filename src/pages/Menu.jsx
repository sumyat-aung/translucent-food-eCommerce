import React, { useContext } from "react";
import styled from "styled-components";

import Nav from "../components/header/Nav";
import { context } from "../context/context";

const Menu = () => {
  const contextConsumer = useContext(context);
  const { products } = contextConsumer;

  console.log(contextConsumer);

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center flex-wrap my-14">
        {products.map((e) => {
          return (
            <CardStyling
              className="max-w-sm rounded overflow-hidden shadow bg-card m-[25px]"
              key={e.id}
            >
              <img
                className="w-full h-[300px] object-cover"
                src={e.image.url}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 flex justify-between">
                <h1 className="font-bold text-yel text-3xl">{e.name}</h1>
                <h2 className=" text-gray-50">
                  {e.price.formatted_with_symbol}
                </h2>
              </div>
              <p
                className="text-gray-300 text-base px-6 pt-2"
                dangerouslySetInnerHTML={{ __html: e.description }}
              ></p>
              <i className="fa-solid fa-cart-shopping  text-yel text-lg float-right pb-10 px-6 mt-5 cursor-pointer"></i>
            </CardStyling>
          );
        })}
      </div>
    </>
  );
};

export default Menu;

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
