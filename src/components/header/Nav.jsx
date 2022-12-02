import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { context } from "../../context/context";

const Nav = () => {
  const contextConsumer = useContext(context);
  const { cart } = contextConsumer;

  let [click, setClick] = useState(false);

  // --------------------- //

  // disable the window scroll when click is true

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  click && disableScroll();
  click === false && enableScroll();

  // --------------------- //

  // jsx

  return (
    <NavStyle className="flex justify-between items-center bg-bla text-gray-50 py-5 xl:px-20 lg:px-11 px-5">
      {/* ---------- */}

      <Link
        to={"/"}
        className="text-xl font-mono uppercase logo flex items-center sm:text-3xl"
      >
        Translucent
        <i className="fa-solid fa-pizza-slice text-xl text-yel ml-4"></i>
      </Link>

      {/* ---------- */}

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
          {cart.line_items && (
            <div className="badge">{cart.line_items.length}</div>
          )}
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

      {/* ----- */}

      <div className=" lg:hidden flex">
        <i
          className="fa-solid fa-bars-staggered text-xl cursor-default lg:cursor-pointer"
          onClick={() => setClick(true)}
        ></i>

        {click && (
          <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-bla small-screen ">
            <i
              className="fa-solid fa-xmark text-xl absolute top-6 right-11 cursor-default lg:cursor-pointer"
              onClick={() => setClick(false)}
            ></i>
            <Link
              to={"/"}
              className="px-6 text-sm hover:text-gray-300 tracking-widest my-6"
            >
              Home <i className="fa-solid fa-house ml-2 text-yel"></i>
            </Link>

            <Link
              to={"/menu"}
              className="px-6 text-sm hover:text-gray-300 tracking-widest my-6"
            >
              Menu
              <i className="fa-solid fa-utensils ml-2 text-yel"></i>
            </Link>

            <Link
              to={"/cart"}
              className="px-6 text-sm hover:text-gray-300 tracking-widest relative my-6"
            >
              Cart
              <i className="fa-solid fa-cart-shopping ml-2 text-yel"></i>
              {cart.line_items && (
                <div className="badge">{cart.line_items.length}</div>
              )}
            </Link>

            <Link
              to={"/review"}
              className="px-6 text-sm hover:text-gray-300 tracking-widest my-6"
            >
              Review
              <i className="fa-sharp fa-solid fa-magnifying-glass ml-2 text-yel"></i>
            </Link>

            <Link
              to={"/contact-us"}
              className="px-6 text-sm hover:text-gray-300 tracking-widest my-6"
            >
              Contact Us
              <i className="fa-solid fa-location-pin ml-2 text-yel"></i>
            </Link>
          </div>
        )}
      </div>
      {/* ----- */}
    </NavStyle>
  );
};

export default Nav;

// --------------------- //

// styled components

const SmallScreenAnimation = keyframes`
 0% {
    -webkit-transform: translateY(-75%);
            transform: translateY(-75%);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  } 
`;

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

  .small-screen {
    transition: all 0.5s ease;
    z-index: 5;
    animation: ${SmallScreenAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }
`;
