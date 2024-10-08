import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let path = "";
  const crums = location.pathname
    .split("/")
    .filter((x) => x != "")
    .map((item, index) => {
      path = path += `/${item}`;
      return (
        <Link to={path} className="text-blue-400 " key={index}>
          {item} &gt;
        </Link>
      );
    });
  return <p className="px-8 w-fit">{crums}</p>;
};

export default BreadCrumbs;
