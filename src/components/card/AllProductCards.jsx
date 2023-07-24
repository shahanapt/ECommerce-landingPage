import React from "react";
import ShoeProductCards from "./ShoeProductCards";
import BackpackProductCards from "./BackpackProductCards";
import WatchProductCards from "./WatchProductCards";

const AllProductCards = () => {
  return (
    <div>
      <WatchProductCards />
      <ShoeProductCards />
      <BackpackProductCards />
    </div>
  );
};

export default AllProductCards;
