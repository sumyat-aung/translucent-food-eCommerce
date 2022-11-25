import React, { useContext, useEffect, useState } from "react";

import AddressForm from "./address-form/AddressForm";
import PaymentForm from "./payment-form/PaymentForm";
import Complete from "./Complete/Complete";
import "./checkout.css";
import { context } from "../context/context";

const Chechout = () => {
  const steps = ["Shipping Address", "Payment Details"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  // context using
  const contextConsumer = useContext(context);
  const { token, generateTokenFunc, cart } = contextConsumer;

  // generatating token
  useEffect(() => {
    generateTokenFunc();
  }, [cart]);

  // Handle Next OR Finsih button
  const NextBtnHandle = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="md:w-1/2 w-full rounded-sm shadow-md bg-gray-50">
        {/* -------------------------- */}
        <h1 className="font-mono text-5xl mb-5 mt-7 text-center">Checkout</h1>
        <div className="flex justify-center pt-4 pb-10">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  i + 1
                )}
              </div>
              <p className="text-gray-800 font-mono">{step}</p>
            </div>
          ))}
        </div>

        {/* -------------------------- */}

        {currentStep === 1 && <AddressForm token={token} />}
        {currentStep === 2 && !complete && <PaymentForm />}
        {complete && <Complete />}

        {/* -------------------------- */}

        {!complete && (
          <div className="w-full flex justify-end items-center border pr-40 h-[100px]">
            <button
              className="px-12 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800  text-xl border border-yel rounded-md font-mono"
              onClick={NextBtnHandle}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        )}

        {/* -------------------------- */}
      </div>
    </div>
  );
};

export default Chechout;
