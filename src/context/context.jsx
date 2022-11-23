import React, { useEffect, useState } from "react";

import { commerce } from "../lib/commerce";

// ----------------------//

// creating context => {consumer, provider}
const context = React.createContext();

const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  // all fetching func of useEff
  useEffect(() => {
    fetchFood();
  }, []);

  // fetch all foods
  let fetchFood = async () => {
    let response = await commerce.products.list();
    setProducts(response.data);
  };

  // jsx
  return (
    <>
      <context.Provider value={{ products }}>{props.children}</context.Provider>
    </>
  );
};

export { context, ContextProvider };
