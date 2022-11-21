import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact-us"}>Contact Us</Link>
      <Link to={"/review"}>Review</Link>
    </div>
  );
};

export default Nav;
