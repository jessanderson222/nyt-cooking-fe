import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import Nav from "./Nav";
import "./NavBar.scss";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return <div>{width > breakpoint ? <DesktopNav /> : <Nav />}</div>;
};

export default NavBar;
