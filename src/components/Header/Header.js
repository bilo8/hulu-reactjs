import React from "react";
import {
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "../HeaderItem/HeaderItem";

import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <NavLink to="/">
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </NavLink>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <NavLink to="/Search">
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
        </NavLink>
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <img
        src="images/hulu-white.png"
        alt="hulu"
        className="object-contain cursor-pointer"
        width={200}
        onClick={() => history.push("/")}
      />
    </header>
  );
};

export default Header;
