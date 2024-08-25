import React from "react";
import Logo from '../assets/MovieLogo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between p-4 border">
      <img className="w-[40px] sm:w-[50px]" src={Logo} alt="Logo" />
      <div className="flex flex-grow justify-end space-x-4 sm:space-x-8">
        <Link to="/" className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-semibold">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-semibold">
          WatchList
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
