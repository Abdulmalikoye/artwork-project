import React from "react";
import ArtCard from "../component/ArtCard";
import Footer from "../sublanding/Footer";

const Product = () => {
  return (
    <div>
      <div className="md:px-32 md:py-12 px-6 py-4 grid md:grid-cols-3 grid-cols-1 gap-8 p-8 ">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
