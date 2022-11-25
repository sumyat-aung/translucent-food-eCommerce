import React from "react";
import styled from "styled-components";
import Admin from "../administrator/administrator";

import Nav from "../components/header/Nav";
import data from "../components/review/review-data";

const Review = () => {
  return (
    <div className="bg-bla">
      <Nav />
      <div className="flex justify-center items-center mx-20 flex-wrap pb-20 sm:mt-0 -mt-10">
        {data.map((d) => {
          return (
            <ReviewStyle
              key={d.id}
              className="flex justify-center items-center flex-col mt-20 m-5 "
            >
              <div className="flex justify-center items-center flex-col ">
                <img
                  src={d.img}
                  alt="human"
                  className="rounded-full w-[200px] h-[200px] object-cover"
                />
                <h1 className="text-yel text-3xl mt-5">{d.name}</h1>

                <h2 className="text-gray-50 text-sm w-[350px] mt-5 text-center font-mono">
                  {`" ${d.review} "`}
                </h2>
              </div>
            </ReviewStyle>
          );
        })}
      </div>

      <div className="mb-5">
        <Admin />
      </div>
    </div>
  );
};

export default Review;

// --------------------- //

// styled components

const ReviewStyle = styled.div`
  div {
    box-shadow: 0 4px 8px 0 rgba(12, 11, 8, 0.2),
      0 6px 0px 0 rgba(12, 11, 8, 0.19);
    background-color: #12100d;
    padding: 30px;

    @media all and (max-width: 440px) {
      padding: 30px 10px;
    }

    @media all and (max-width: 360px) {
      padding: 30px 2px;
    }
  }

  h1 {
    font-family: "Cormorant Upright", serif;
  }
`;
