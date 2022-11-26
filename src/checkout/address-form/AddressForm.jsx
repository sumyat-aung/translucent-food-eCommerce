import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import styled from "styled-components";

const AddressForm = ({ Token, AddressFormData, SetAddressFormData }) => {
  // destruring address Form
  const {
    fname,
    lname,
    address,
    email,
    city,
    postalCode,
    country,
    subdivisions,
    shippingOption,
  } = AddressFormData;

  // updating the state
  const InputOnChangeHandle = (e) => {
    SetAddressFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // -------------------------------------------- //

  // shipping countries & subdivisions State
  const [ShippingCountries, setShippingCountries] = useState();
  const [shippingSubdivision, setshippingSubdivision] = useState();
  const [shippingOptions, setShippingOptions] = useState([]);

  // fetching shipping countries nd setting the state - ( we got the token, when we enter the checkout)
  const fetchShippingCountry = async (tokenId) => {
    let res = await commerce.services.localeListShippingCountries(tokenId);
    setShippingCountries(res.countries);
  };

  // fetching subdivisions nd setting the state - ( we got the country code above in Adress Form )
  const fetchshippingSubdivision = async (countryCode) => {
    const res = await commerce.services.localeListSubdivisions(countryCode);
    setshippingSubdivision(res.subdivisions);
  };

  // fetching shippingOptions nd setting the state - ( we got the country code ,token and region above )
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );
    setShippingOptions(options);
  };

  // -------------------------------------------- //

  // useEff for invoking all the above func
  useEffect(() => {
    fetchShippingCountry(Token);
  }, []);

  useEffect(() => {
    fetchshippingSubdivision(country);
  }, [country]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(Token, country, subdivisions);
  }, [shippingSubdivision]);

  // -------------------------------------------- //

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

          {/* --------------------- */}

          <div className="w-full flex justify-between items-center border-none mt-5">
            <select
              id="countries"
              value={country}
              className="w-[49%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
              name="country"
              onChange={InputOnChangeHandle}
            >
              <option value="" disabled hidden>
                Choose Country
              </option>

              {ShippingCountries &&
                Object.entries(ShippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
            </select>

            {/* --------------------- */}

            <select
              id="subdivisions"
              value={subdivisions}
              className="w-[49%] font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
              name="subdivisions"
              onChange={InputOnChangeHandle}
              disabled={!shippingSubdivision}
            >
              <option value="" disabled hidden>
                Choose Region
              </option>

              {shippingSubdivision &&
                Object.entries(shippingSubdivision)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
            </select>
          </div>
          {/* --------------------- */}

          <select
            id="shippingOption"
            value={shippingOption}
            className="w-[100%] mt-5 font-mono font-medium text-md py-3 px-5  bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-lg"
            name="shippingOption"
            onChange={InputOnChangeHandle}
            disabled={!shippingOptions.length > 0}
          >
            <option value="" disabled hidden>
              Shipping Options
            </option>

            {shippingOptions
              .map((sO) => ({
                id: sO.id,
                label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
              }))
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
          </select>
          {/* --------------------- */}
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
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }
`;
