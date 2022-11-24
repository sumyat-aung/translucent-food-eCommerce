import React from "react";
import styled, { keyframes } from "styled-components";

const AddToCartAlert = () => {
  return (
    <Alert className="fixed top-20 w-[100vw] flex justify-center items-center">
      <h1 className="px-5 py-3 bg-yel text-2xl text-bla rounded-lg font-mono">
        Added to cart
      </h1>
    </Alert>
  );
};

export default AddToCartAlert;

// --------------------- //

// styled components

const SmallScreenAnimation = keyframes`
 0% {
    -webkit-transform: translateY(-180%);
            transform: translateY(-180%);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
`;

const Alert = styled.div`
  animation: ${SmallScreenAnimation} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;
