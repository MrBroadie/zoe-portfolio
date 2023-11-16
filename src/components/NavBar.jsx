import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle =
    "md:m-8 m-2 underline text-md md:text-2xl text-slate-100 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 fadeInAnimation";

  return (
    <div className="flex justify-center items-center h-16">
      <Link className={linkStyle} to="/">
        HOME
      </Link>
      <Link className={linkStyle} to="/portfolio">
        PORTFOLIO
      </Link>
      <Link className={linkStyle} to="/about">
        ABOUT
      </Link>
      <Link className={linkStyle} to="/contact">
        CONTACT
      </Link>
    </div>
  );
};

export default NavBar;
