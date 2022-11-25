import React, { useState } from "react";
import "./checkout.css";
// import styled from "styled-components";

const Chechout = () => {
  const steps = ["Customer Info", "Shipping Info"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="md:w-1/2 w-full rounded-sm shadow-md">
        {/* -------------------------- */}

        <div className="flex justify-center">
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
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>
        {currentStep === 1 && <h1>Step 1</h1>}
        {currentStep === 2 && <h1>Step 2</h1>}
        {!complete && (
          <button
            className="px-5 py-3 text-yel text-xl border border-yel mt-10 rounded-md"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}

        {/* -------------------------- */}
      </div>
    </div>
  );
};

export default Chechout;
