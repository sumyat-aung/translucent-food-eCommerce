import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assests/logo.png";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col text-primary select-none px-3 sm:px-0">
      <div className="flex items-center">
        <h1 className="text-9xl text-yel tracking-widest font-mono">404</h1>
        <img
          src={logo}
          alt="404"
          className="w-[90px] h-[90px] mx-6 hidden sm:block"
        />
      </div>
      <h3 className="my-4 font-semibold font-mono text-base  text-yel">
        Page Not Found
      </h3>
      <p className="my-6 tracking-widest font-bold leading-6 hidden sm:block text-yel font-mono">
        Sorry, I looked everywhere, and still came up empty handed !
      </p>
      <Link
        to="/"
        className="py-5 px-10 bg-primary text-card bg-yel font-mono font-medium text-xl my-6 active:translate-y-1 transition-all"
      >
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
