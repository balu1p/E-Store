import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataHandle } from "../utils/DataContext";

const Header = () => {
  const { sortData } = DataHandle();
  const navigate = useNavigate();
  const [sortPrice, setSortPrice] = useState(0);
  const location = useLocation();

  function handleSort(value) {
    setSortPrice(value);
  }

  useEffect(() => {
    if (sortPrice !== 0) {
      sortData(sortPrice);
    }
  }, [sortPrice]);

  const handleButton = () => {
    if (location.pathname === "/") {
      handleSort(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="bg-white p-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="eStore" className="h-14 w-14" />
          </Link>
          <Link to="/">
            <h1 className="text-blue-600 text-2xl font-semibold">E-Store</h1>
          </Link>
        </div>
        <div className="flex space-x-4">
          {location.pathname === "/" ? null : (
            <button
              onClick={handleButton}
              className="bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 rounded-full text-white"
            >
              Back
            </button>
          )}
          {location.pathname === "/" ? (
            <select
              className="px-4 py-2 rounded-full"
              onChange={(e) => handleSort(Number(e.target.value))}
              value={sortPrice}
            >
              <option value={0}>Sort by Price</option>
              <option value={1}>High to Low</option>
              <option value={-1}>Low to High</option>
            </select>
          ) : null}
          {location.pathname === "/" ? (
            <Link to="/addproduct">
              <button className="bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 rounded-full text-white">
                Add Products
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
