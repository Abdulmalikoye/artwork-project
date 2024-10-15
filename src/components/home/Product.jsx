import React from "react";
import ArtCard from "../component/ArtCard";
import Footer from "../sublanding/Footer";
import ArtGallery from "../component/ArtGallery";
import FilterComponent from "../component/FilterComponent";
import SearchBar from "../component/SearchBar";
import SearchProduct from "../component/SearchProduct";

const Product = () => {
  return (
    <div>
      <div className="md:px-32 md:py-24 px-6 py-12  gap-8  ">
        <div className="flex justify-between items-center">
          <FilterComponent />
          <SearchProduct />
        </div>
        <ArtGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
