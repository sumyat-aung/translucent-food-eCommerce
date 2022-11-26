import React from "react";
// import {
//   Elements,
//   CardElement,
//   ElementsConsumer,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

import Review from "../review/Review";

const PaymentForm = ({ AddressFormData, Token }) => {
  // console.log(Token);
  // console.log(AddressFormData);

  return (
    <div>
      <Review Token={Token} />
    </div>
  );
};

export default PaymentForm;
