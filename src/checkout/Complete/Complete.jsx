import React from "react";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="h-[400px] border flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold font-mono tracking-wide text-gray-800">
        Thank You
      </h1>
      <h1 className="text-xl text-gray-700 mt-5 font-mono text-center">
        Your Order was Completed Successfully
      </h1>
      <i className="fa-solid fa-check text-2xl text-green-700 border-2 border-green-700 rounded-full w-[50px] h-[50px] flex justify-center items-center mt-5"></i>

      <Link
        to={"/"}
        className="inline-block px-12 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800  text-xl border border-yel rounded-md font-mono mt-10"
      >
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default Complete;
