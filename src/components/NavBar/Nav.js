import React from "react";
import { NavLink } from "react-router-dom";
import Genres from "../../Genres";

const Nav = () => {

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(Genres).map(([key, { title }]) => (
          <NavLink
            to={`/${title}`}
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </NavLink>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 " />
    </nav>
  );
};

export default Nav;
