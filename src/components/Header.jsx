import React from "react";

import { useState } from "react";
import data from "../assets/data";
// console.log(data);

function Header({ state, dispatch }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <>
      <div className=" flex justify-between bg-blue-600 p-9 ">
        <div className="flex">
          <img
            className="bg-white "
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="logo"
          />
          <input
            onChange={(event) => {
              event.preventDefault();
              dispatch({ type: "SEARCH", payload: event.target.value });
            }}
            id="search"
            className="p-2 bg-blue-600 w-96 border-solid border-2 border-white ml-16"
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <a href="" className=" text-white">
          Cart
        </a>
      </div>
      <div className="flex ">
        {data.map((category) => (
          <div
            className="border-solid border-2 border-black w-full flex flex-col items-center  h-48 pt-4 "
            key={category.id}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <img src={category.image} alt="" className=" w-16 h-16" />

            <h2>{category.name}</h2>

            {hoveredCategory === category && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>{subcategory.name}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
