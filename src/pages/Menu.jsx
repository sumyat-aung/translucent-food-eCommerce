import React, { useContext } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import Nav from "../components/header/Nav";
import { context } from "../context/context";
import Food from "../components/menu/Food";

const Menu = () => {
  const contextConsumer = useContext(context);
  const { products, AddToCart, ProductsLoading } = contextConsumer;

  return (
    <>
      <Nav />

      {ProductsLoading && (
        <div className="flex justify-center items-center h-[80vh]">
          <ClimbingBoxLoader color="#DCCA87" size={20} />
        </div>
      )}

      <div className="flex justify-center items-center flex-wrap my-14">
        {products.map((e) => {
          return <Food key={e.id} data={e} AddToCart={AddToCart} />;
        })}
      </div>
    </>
  );
};

export default Menu;
