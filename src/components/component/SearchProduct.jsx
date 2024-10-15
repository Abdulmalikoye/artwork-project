// components/SearchBar.js
import React, { useState } from "react";

const SearchProduct = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component for filtering
  };

  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-full py-2 pl-10 pr-4 w-full md:flex "
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {/* Search Icon */}
        <ion-icon
          name="search-outline"
          className="md:p-0 p-4 md:rounded-none rounded-full bg-white md:border-none border-2 border-[#F3F3F3]"
        ></ion-icon>
      </span>
    </div>
  );
};

export default SearchProduct;
