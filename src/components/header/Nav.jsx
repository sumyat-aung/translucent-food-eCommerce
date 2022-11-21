import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Nav>
        <h1>Translucent</h1>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/review"}>Review</Link>{" "}
        </div>
      </Nav>
    </div>
  );
};

export default Nav;
