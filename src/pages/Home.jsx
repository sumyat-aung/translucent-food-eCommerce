import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Nav from "../components/header/Nav";
import spoon from "../assests/spoon.svg";
import food from "../assests/food.png";
import Admin from "../administrator/administrator";

const Home = () => {
  return (
    <div className="bg-bla h-auto lg:h-[100vh]">
      <Nav />

      <LandingStyle className="h-[88%] flex justify-between flex-col lg:flex-row lg:mt-2 mt-8">
        <div className="lg:w-1/2 w-[100%] h-full flex justify-center flex-col px-5 lg:pl-16 lg:pr-8 ">
          <p className="text-gray-50 text-xl tracking-widest">
            Chase The New Flavour
          </p>
          <img src={spoon} alt="spoon" className="w-[50px] mb-5" />
          <h1 className="text-yel text-8xl w-[100%] lg:w-[110%] xl:w-[80%]">
            The Key To Fine Dining
          </h1>
          <p className="text-gray-50 capitalize mt-10 tracking-wider">
            Our resturant,
            <span className="text-yel uppercase">translucent</span> is the
            perfect place to enjoy fresh and healthy food. Our talented chef
            only uses the best ingredients to create delicious dishes that are
            sure to please any appetite. Plus, we offer both online services and
            dinning room options so you can enjoy our food in the way that best
            suits your needs.
          </p>
          <Link
            to={"/menu"}
            className="px-10 text-2xl mt-8 inline-block py-2 bg-yel text-gray-900 w-60 hover:bg-yellow-200"
          >
            Order Now ⇀
          </Link>
        </div>

        <div className="w-[100%] lg:w-[35%] xl:w-1/2 h-full flex justify-center items-center lg:pr-20 xl:pr-10 lg:mt-0 mt-20 mb-10">
          <img
            src={food}
            alt="food"
            className="xl:h-[80%] h-auto w-[350px] lg:w-auto"
          />
        </div>
      </LandingStyle>
      <Admin />
    </div>
  );
};

export default Home;

// --------------------- //

// styled components

const LandingStyle = styled.div`
  h1,
  a,
  p:first-child,
  span {
    font-family: "Cormorant Upright", serif;
  }

  p {
    font-family: "Open Sans", sans-serif;
  }

  @media all and (min-width: 1700px) {
    padding-left: 60px;
  }
`;
