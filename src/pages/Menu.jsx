import React, { useContext } from "react";

import Nav from "../components/header/Nav";
import { context } from "../context/context";
import Food from "../components/menu/Food";

const Menu = () => {
  const contextConsumer = useContext(context);
  const { products, AddToCart, ProductsLoading } = contextConsumer;

  return (
    <>
      <Nav />

      {ProductsLoading && <h1 className="text-3xl text-yel">Loading</h1>}

      <div className="flex justify-center items-center flex-wrap my-14">
        {products.map((e) => {
          return <Food key={e.id} data={e} AddToCart={AddToCart} />;
        })}
      </div>
    </>
  );
};

export default Menu;
