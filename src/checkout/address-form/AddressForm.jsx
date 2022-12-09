import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import styled from "styled-components";

const AddressForm = ({ AddressFormData, SetAddressFormData }) => {
  // destruring address Form
  const { fname, lname, address, email, city, postalCode, country } =
    AddressFormData;

  // updating the state
  const InputOnChangeHandle = (e) => {
    SetAddressFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <InputsStyling className="m-5">
          {/* --------------------- */}

          <div className="w-full flex justify-between items-center border-none ">
            <input
              type="text"
              className="w-[49%] font-mono  font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
              placeholder="First Name"
              name="fname"
              value={fname}
              onChange={InputOnChangeHandle}
            />
            <input
              type="text"
              className="w-[49%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
              placeholder="Last Name"
              name="lname"
              value={lname}
              /* A function that is called when the input is changed. */
              onChange={InputOnChangeHandle}
            />
          </div>

          {/* --------------------- */}

          <input
            type="text"
            className="w-[100%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none mt-5 focus:bg-gray-300 rounded-lg"
            placeholder="Address"
            name="address"
            value={address}
            onChange={InputOnChangeHandle}
          />

          {/* --------------------- */}

          <input
            type="email"
            className="w-[100%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none mt-5 focus:bg-gray-300 rounded-lg"
            placeholder="Email"
            name="email"
            value={email}
            onChange={InputOnChangeHandle}
          />

          {/* --------------------- */}

          <div className="w-full flex justify-between items-center border-none mt-5">
            <input
              type="text"
              className="w-[49%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
              placeholder="City"
              name="city"
              value={city}
              onChange={InputOnChangeHandle}
            />
            <input
              type="number"
              className="w-[49%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
              placeholder="ZIP or Postal Code (783 83)"
              name="postalCode"
              value={postalCode}
              onChange={InputOnChangeHandle}
            />
          </div>

          <input
            type="text"
            className="w-[100%] font-mono font-medium text-md py-3 px-5 mt-5 bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
            placeholder="Country"
            name="country"
            value={country}
            onChange={InputOnChangeHandle}
          />
        </InputsStyling>
      </div>
    </>
  );
};

export default AddressForm;

// --------------------- //

// styled components

const InputsStyling = styled.div`
  input,
  select {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 800;
  }
`;
