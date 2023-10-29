import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle =
    "ml-8 underline text-lg md:text-2xl text-slate-100 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 fadeInAnimation";

  return (
    <div className="flex justify-center items-center h-16">
      <Link className={linkStyle} to="/">
        Home
      </Link>
      <Link className={linkStyle} to="/portfolio">
        Portfolio
      </Link>
      <Link className={linkStyle} to="/">
        About
      </Link>
      <Link className={linkStyle} to="/portfolio">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
