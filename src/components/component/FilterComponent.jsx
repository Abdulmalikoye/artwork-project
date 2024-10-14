import React from "react";

const FilterComponent = () => {
  return (
    <>
      {/* <div className="flex items-center justify-between gap-12 px-8 w-full"> */}
      <div className=" flex gap-6">
        <button className="border border-gray-400 px-4 py-2 rounded">
          Latest
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded md:block hidden">
          Oldest
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded md:block hidden">
          Price Range
        </button>
      </div>

      {/* </div> */}
    </>
  );
};

export default FilterComponent;
