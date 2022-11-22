import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavStyle className="flex justify-between items-center bg-bla text-gray-50 py-5 xl:px-20 px-11 ">
      <Link
        to={"/menu"}
        className="text-3xl font-mono uppercase logo flex items-center"
      >
        Translucent{" "}
        <i className="fa-solid fa-pizza-slice text-xl text-yel ml-4"></i>
      </Link>

      <div className="lg:flex hidden">
        <Link
          to={"/"}
          className="px-6 text-sm hover:text-gray-300 tracking-widest"
        >
          Home <i className="fa-solid fa-house ml-2 text-yel"></i>
        </Link>

        <Link
          to={"/menu"}
          className="px-6 text-sm hover:text-gray-300 tracking-widest"
        >
          Menu
          <i className="fa-solid fa-utensils ml-2 text-yel"></i>
        </Link>

        <Link
          to={"/cart"}
          className="px-6 text-sm hover:text-gray-300 tracking-widest relative"
        >
          Cart
          <i className="fa-solid fa-cart-shopping ml-2 text-yel"></i>
          <div className="badge">6</div>
        </Link>

        <Link
          to={"/review"}
          className="px-6 text-sm hover:text-gray-300 tracking-widest"
        >
          Review
          <i className="fa-sharp fa-solid fa-magnifying-glass ml-2 text-yel"></i>
        </Link>

        <Link
          to={"/contact-us"}
          className="px-6 text-sm hover:text-gray-300 tracking-widest"
        >
          Contact Us
          <i className="fa-solid fa-location-pin ml-2 text-yel"></i>
        </Link>
      </div>
      <div className=" lg:hidden flex">
        <i className="fa-solid fa-bars-staggered text-xl"></i>
      </div>
    </NavStyle>
  );
};

export default Nav;

// --------------------- //

// styled components

const NavStyle = styled.nav`
  .logo {
    font-family: "Cormorant Upright", serif;
  }

  div {
    font-family: "Open Sans", sans-serif;
  }

  .badge {
    background-color: #d64835;
    color: white;
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    position: absolute;
    font-family: monospace;
    font-weight: 700;
    top: -7px;
    right: 10px;
  }
`;
