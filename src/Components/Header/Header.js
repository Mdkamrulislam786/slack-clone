import React from "react";
import "./Header.css";

//mATREIAL ui
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {/* avatar */}
        <Avatar
          className="header__avatar"
          alt="kamrul" //{user?.displayName}
          //{user?.photoURL}
        />
        <AccessTimeIcon />
        {/* icon */}
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchIcon />
        {/* inputs */}
        <input placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
