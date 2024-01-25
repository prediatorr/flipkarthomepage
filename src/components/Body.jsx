import React from "react";
import Carousel from "./Caraousel";
import Items from "./Items";

function Body({ state, dispatch }) {
  console.log(state);
  return (
    <div className="">
      <Carousel />
      <Items filter={state.filter} />
    </div>
  );
}

export default Body;
