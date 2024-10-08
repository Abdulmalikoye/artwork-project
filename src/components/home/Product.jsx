import React from "react";
import ArtCard from "../component/ArtCard";

const Product = () => {
  return (
    <div className="px-32 py-12 grid grid-cols-3 gap-8 p-8 ">
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
      <ArtCard />
    </div>
  );
};

export default Product;
