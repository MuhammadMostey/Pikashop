import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

function Header() {
  return (
    <>
      <header>
        <div className="content pt-4 main-header gap-2 items-center">


          <div className="basis-1/5 justify-start items-center block">
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block">PikaExpress</span>
          </div>


          <div className="flex search-div basis-1/2 ">
            
            <input
              type="text"
              className="search-text m-2 pl-2 "
              placeholder="Search for your product now 👋🏻"
              aria-label="Search for your product now"
              autoComplete="off"
              maxlength="60"
            />

            <span className="mr-2 self-center">
              <BiSearchAlt className="w-12 h-8 bg-black rounded-2xl p-1" />{" "}
            </span>
          </div>


          <div className="flex basis-1/3 justify-end">Hi</div>
        </div>
      </header>
    </>
  );
}

export default Header;
