import React from "react";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="h-[300px] border flex justify-center items-center flex-col">
      <h1 className="text-3xl font-mono tracking-wide text-gray-800">
        Thank You
      </h1>
      <h1 className="text-xl text-gray-700 mt-5">
        Your Order was Completed Successfully
      </h1>
    </div>
  );
};

export default Complete;
