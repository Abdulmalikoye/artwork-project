import React from "react";
import ArtCard from "../component/ArtCard";
import Footer from "../sublanding/Footer";
import ArtGallery from "../component/ArtGallery";

const Product = () => {
  return (
    <div>
      <div className="md:px-32 md:py-12 px-6 py-4  gap-8  ">
        <ArtGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
