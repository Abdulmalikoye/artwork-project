import React from "react";

const FilterComponent = () => {
  return (
    <>
      <div className="flex items-center justify-between px-8">
        <div className="space-x-4">
          <button className="border border-gray-400 px-4 py-2 rounded">
            Category
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded">
            Collection
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded">
            Price Range
          </button>
        </div>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Filter & Sort
        </button>
      </div>
    </>
  );
};

export default FilterComponent;
