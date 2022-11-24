import React, { useContext } from "react";

import Nav from "../components/header/Nav";
import EmptyCard from "../components/cart/EmptyCard";
import FoodInCart from "../components/cart/FoodInCart";
import { context } from "../context/context";

const Cart = () => {
  const contextConsumer = useContext(context);
  const { cart } = contextConsumer;

  let { line_items } = cart;

  return (
    <>
      <Nav />

      {line_items.length <= 0 ? (
        <EmptyCard />
      ) : (
        <div className="flex justify-center items-center flex-wrap my-14">
          {line_items &&
            line_items.map((e) => {
              return <FoodInCart key={e.id} data={e} />;
            })}
        </div>
      )}
    </>
  );
};

export default Cart;
