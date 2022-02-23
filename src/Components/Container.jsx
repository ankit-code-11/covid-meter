import React, { useState, useEffect } from "react";
import Image from "@material-tailwind/react/Image";
import Button from "@material-tailwind/react/Button";

import Cards from "./Cards";

function Container() {
  const [country, setCountry] = useState("India");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const fetchData = () => {
    fetch(
      `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query =`
    )
      .then((data) => data.json())
      .then((resp) => setData(resp));
  };
  const handleClick = () => {
    fetchData();
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="m-3 pt-0">
        <input
          type="text"
          onChange={handleChange}
          placeholder="enter the country name"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-gray-900 outline-none focus:outline-none focus:ring "
        />
      </div>
      <div className="mb-2 ml-10">
        <Button
          color="lightBlue"
          buttonType="outline"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={() => handleClick()}
        >
          Search
        </Button>
        <div className="flex justify-center">        {data.countryInfo && data.countryInfo.flag ? (
          <Image
            src={data.countryInfo.flag}
            rounded={false}
            raised={true}
            alt="Rounded Raised Image"
          />
        ) : (
          <div className="flex justify-center">
            <div className="flex items-center w-1/2 px-6 py-4 text-yellow-700 bg-yellow-100 rounded">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </span>
              <p className="ml-2 text-medium">
                This country is not present in our data.
              </p>
            </div>
          </div>
        )}</div>
      </div>

      <Cards data={data} />
    </>
  );
}

export default Container;
