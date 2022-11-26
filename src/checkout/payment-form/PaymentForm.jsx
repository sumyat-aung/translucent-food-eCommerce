import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "../review/Review";

const PaymentForm = ({ AddressFormData, Token }) => {
  return (
    <div className="px-5">
      <Review Token={Token} />
    </div>
  );
};

export default PaymentForm;
