import React, { useContext } from "react";

import Nav from "../components/header/Nav";
import { context } from "../context/context";
import Food from "../components/menu/Food";

const Menu = () => {
  const contextConsumer = useContext(context);
  const { products } = contextConsumer;

  console.log(contextConsumer);

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center flex-wrap my-14">
        {products.map((e) => {
          return <Food key={e.id} data={e} />;
        })}
      </div>
    </>
  );
};

export default Menu;
