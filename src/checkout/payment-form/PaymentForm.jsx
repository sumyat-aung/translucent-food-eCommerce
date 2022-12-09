import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "../review/Review";
import REACT_APP_STRIPE_KEY from "../../../key/stripe_key";

const PaymentForm = ({
  AddressFormData,
  Token,
  setComplete,
  refreshCart,
  BackBtnHandle,
}) => {
  let stripePromise = loadStripe(REACT_APP_STRIPE_KEY);

  let payButtonHandle = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: Token.line_items,
        customer: {
          firstname: AddressFormData.fname,
          lastname: AddressFormData.lname,
          email: AddressFormData.email,
        },
        shipping: {
          name: "Domestic",
          street: AddressFormData.address,
          town_city: AddressFormData.city,
          postal_zip_code: AddressFormData.postalCode,
          country: AddressFormData.country,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      // (Token.id, orderData) this 2 information have to passed into a function that made payments
      refreshCart();
      setComplete(true);
    }
  };

  return (
    <div className="px-5">
      <Review Token={Token} />
      <div className="mt-10">
        <h1 className="text-xl font-bold leading-none text-gray-900 mb-10">
          Payment Method
        </h1>

        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form>
                <CardElement className="py-4 px-5 border font-mono" />
                <br /> <br />
                <div className="w-full md:flex-row flex-col-reverse flex md:justify-between justify-center items-center px-5 md:h-[100px] h-[150px] md:m-0 -mt-10">
                  <button
                    className="px-12 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800  text-xl border border-yel rounded-md font-mono disabled:bg-blue-800 disabled:cursor-not-allowed "
                    onClick={BackBtnHandle}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!stripe}
                    className="px-12 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800  text-xl border border-yel rounded-md font-mono disabled:bg-blue-800 disabled:cursor-not-allowed md:mb-0 mb-5"
                    onClick={(e) => payButtonHandle(e, elements, stripe)}
                  >
                    Pay {Token.subtotal.formatted_with_symbol}
                  </button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentForm;
