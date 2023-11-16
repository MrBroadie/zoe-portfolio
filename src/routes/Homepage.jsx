import React from "react";
import wBruised from "../data/images/extras/w-beaten.jpg";
import hIceQ from "../data/images/extras/h-iceq.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-beige flex flex-col w-full h-screen-minus-footer items-center justify-between overflow-y-auto">
      <div className="w-full flex flex-col p-8 justify-center items-center flex-shrink-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">ZOE BROAD</h1>
        <h2 className="text-lg font-normal lg:text-xl">
          Professional Makeup and SFX Artist
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:w-4/6 md:h-4/6 w-full h-full items-center justify-center mb-4  flex-shrink-0">
        <div className="flex md:h-full  md:w-1/2 h-1/2">
          <img
            src={hIceQ}
            alt="Ice Queen"
            className="w-full object-cover overflow-hidden"
          />
        </div>
        <div className="flex md:h-full md:w-full h-1/2">
          <img
            src={wBruised}
            alt="Beaten Up"
            className="w-full object-cover overflow-hidden"
          />
        </div>
      </div>

      <div className="bg-backgroundCol w-full flex h-16 items-center justify-center flex-shrink-0">
        <Link
          to="/portfolio"
          className="font-bold text-white text-center hover:-translate-y-1 hover:scale-110"
        >
          VIEW PORTFOLIO
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
