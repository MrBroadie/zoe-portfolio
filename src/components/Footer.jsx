import React from "react";
import instagram from "../images/favicons/instagram.png";
import email from "../images/favicons/email.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex mt-2">
        <a
          href="https://instagram.com/zoe_michaelamakeup?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagram}
            alt="instagram"
            className="my-2 mx-2 h-16 w-16"
          />
        </a>
        <a href="mailto:zoebroad68@gmail.com">
          <img src={email} alt="email" className="my-2 mx-2 h-16 w-16" />
        </a>
      </div>
      <p className="m-2 lg:text-lg text-md ">&#169; Zoe Broad 2023</p>
    </div>
  );
};

export default Footer;
