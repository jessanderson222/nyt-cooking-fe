import React, { useState } from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import logoBlack from "../../images/logo-black.png";
import "./NavBar.scss";

const Nav = () => {
  const [leftNav, setLeftNav] = useState(false);

  const onMenuClick = () => {
    setLeftNav(!leftNav);
  };
  console.log(leftNav);

  return (
    <div>
      <div className="flex nav space-between">
        {leftNav ? (
          <AiOutlineClose
            className="hamburger hamburger--close"
            onClick={onMenuClick}
          />
        ) : (
          <GiHamburgerMenu className="hamburger" onClick={onMenuClick} />
        )}
        <a className="logo-wrap" href="/">
          <img alt="logo" className="logo" src={logoBlack} />
        </a>
        <div>
          <BsFillArchiveFill className="navIcons" />
          <BsSearch className="navIcons" />
        </div>
      </div>
      {leftNav && (
        <div className="left-nav">
          <ul className="pl-12">
            <li>{"Home".toUpperCase()}</li>
            <li>{"Thanksgiving".toUpperCase()}</li>
            <li>{"Your Grocery List".toUpperCase()}</li>
            <li>Your Recipe Box</li>
          </ul>
          <div className="pl-12 flex align-center account pointer">
            <BsFillGearFill className="gear" />
            <span>{"Your Account".toUpperCase()}</span>
          </div>
          <div className="pl-12 logout pointer">Log Out</div>
        </div>
      )}
    </div>
  );
};

export default Nav;
