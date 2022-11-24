import React, { useEffect, useState } from "react";

import { commerce } from "../lib/commerce";

// ----------------------//

// creating context => {consumer, provider}
const context = React.createContext();

const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // all fetching func of useEff
  useEffect(() => {
    fetchFood();
    fetchCart();
  }, []);

  // fetch all foods
  let fetchFood = async () => {
    let response = await commerce.products.list();
    setProducts(response.data);
  };

  // fetch cart
  let fetchCart = async () => {
    let response = await commerce.cart.retrieve();
    setCart(response);
  };

  // add to cart func
  let AddToCart = async (id, quan) => {
    let response = await commerce.cart.add(id, quan);
    setCart(response);
  };

  // updateCartQuantity
  let UpdateCartQuantity = async (id, quan) => {
    let response = await commerce.cart.update(id, { quan });
    setCart(response);
  };

  // remove food from cart
  let RemoveFood = async (id) => {
    let response = await commerce.cart.remove(id);
    setCart(response);
    console.log(response);
  };

  // jsx
  return (
    <>
      <context.Provider
        value={{ products, cart, AddToCart, UpdateCartQuantity, RemoveFood }}
      >
        {props.children}
      </context.Provider>
    </>
  );
};

export { context, ContextProvider };
