import React from "react";
import instagram from "../data/images/favicons/instagram.png";
import email from "../data/images/favicons/email.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-16 ">
      <div className="flex  ">
        <a
          href="https://instagram.com/zoe_michaelamakeup?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" className="mt-2 mx-4 h-8 w-8" />
        </a>
        <a href="mailto:zoebroad68@gmail.com">
          <img src={email} alt="email" className="mt-2 mx-4 h-8 w-8" />
        </a>
      </div>
      <p className=" text-md ">&#169; Zoe Broad 2023</p>
    </div>
  );
};

export default Footer;
