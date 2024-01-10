import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

import Main from "./Main";
import Search from "./Search";

function Header() {
  return (
    <div>
      <header className="header-nav">
        <div className="left-header">
          <span>Payments</span>
          <div className="left-worker">
            <span>
              <i>
                <CiCircleQuestion />
              </i>
            </span>
            <span>How it works</span>
          </div>
        </div>
        <div className="header-middle">
          <span className="search-wrapper">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search Features, tutorials, etc." />
          </span>
        </div>
        <div className="right-header">
          <i>
            <RiMessage2Fill />
          </i>
          <i>
            <MdOutlineArrowDropDown />
          </i>
        </div>
      </header>
      <Main />
      <Search />
    </div>
  );
}

export default Header;
