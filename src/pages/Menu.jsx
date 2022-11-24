import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styled from "styled-components";

import Nav from "../components/header/Nav";
import { context } from "../context/context";
import Food from "../components/menu/Food";
import AddToCartAlert from "../components/alert/AddToCartAlert";

const Menu = () => {
  // getting data from context
  const contextConsumer = useContext(context);
  const { products, AddToCart, ProductsLoading } = contextConsumer;

  // added to cart modal state
  const [Modal, setModal] = useState(false);

  return (
    <>
      <Nav />

      {Modal && <AddToCartAlert />}

      {ProductsLoading && (
        <div className="flex justify-center items-center h-[80vh]">
          <ClimbingBoxLoader color="#DCCA87" size={20} />
        </div>
      )}

      {!ProductsLoading && (
        <TextStyling className="text-3xl text-yel font-mono text-end my-10 sm:mr-28 mr-10 -mb-5">
          Ready To Purchase ? ⇀
          <Link
            to={"/cart"}
            className="text-gray-50 inline-block hover:translate-x-1 transition-all ml-5"
          >
            Check Here
          </Link>
        </TextStyling>
      )}

      <div className="flex justify-center items-center flex-wrap my-14">
        {products.map((e) => {
          return (
            <Food
              key={e.id}
              data={e}
              AddToCart={AddToCart}
              setModal={setModal}
            />
          );
        })}
      </div>
    </>
  );
};

export default Menu;

// --------------------- //

// styled components

const TextStyling = styled.h1`
  font-family: "Cormorant Upright", serif;
`;
