/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import zoeApplyingMakeup from "../images/homepage/homePage1.png";

const Homepage = () => {
  return (
    <div className="bg-beige flex flex-col">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="w-full flex flex-col lg:m-4 p-8 bg-red-100">
          <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl ">
            Zoe Broad
          </h1>
          <h2 className="ml-16 mb-4 md:ml-32 text-lg font-normal lg:text-xl">
            Makeup and SFX Artist
          </h2>
          <div className="flex flex-col mb-4 ">
            <p className="md:w-1/2">
              Welcome to my professional portfolio! My name is Zoe, and I am a
              dedicated makeup and SFX artist based in the London area.
            </p>
            <p className="md:w-1/2 self-end">
              As a final year BA (Hons) student in Hair, Makeup, and Prosthetics
              for Performing Arts, I am committed to enhancing my knowledge and
              skills in the industry. My passion for makeup and SFX artistry
              stems from a lifelong fascination with the transformative power of
              makeup and the ability to create characters through prosthetics. I
              aspire to work in the film and TV industry to expand my knowledge
              and passion even further. Throughout my studies, I have gained
              valuable experience in a wide range of makeup techniques, from
              natural beauty to high fashion and special effects. I have also
              had the privilege of working on a short film and over a year's
              experience as a SFX technician.
            </p>
            <p className="md:w-1/2 ">
              These experiences have complemented my studies and have allowed me
              to hone my skills and showcase my creativity. I am excited to
              embark on a career in the film and TV industry, and I am committed
              to collaborating with like-minded professionals to create
              stunning, impactful special effects. Whether you're a producer,
              director, or fellow artist, I am eager to work with you and bring
              your vision to life. Thank you for visiting my website. Please
              feel free to contact me if you have any inquiries or would like to
              discuss a potential collaboration.
            </p>
            <Link
              to="/portfolio"
              className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded mt-4 md:self-end md:w-1/4 w:1/2 place-self-center text-center hover:-translate-y-1 hover:scale-110"
            >
              Check out my portfolio
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4 ">
          <img
            src={zoeApplyingMakeup}
            alt="applying alien makeup"
            className=" lg:w-4/6  w-1/2 object-cover m-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
