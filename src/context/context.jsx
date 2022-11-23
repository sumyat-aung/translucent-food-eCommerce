import React, { useEffect, useState } from "react";

import { commerce } from "../lib/commerce";

// ----------------------//

// creating context => {consumer, provider}
const context = React.createContext();

const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFood();
  }, []);

  let fetchFood = async () => {
    let response = await commerce.products.list();
    setProducts(response.data);
  };

  return (
    <>
      <context.Provider value={{products}}>{props.children}</context.Provider>
    </>
  );
};

export { context, ContextProvider };
