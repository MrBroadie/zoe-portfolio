import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { beautyImages, projectImages, sfxImages } from "../data/images";
import SectionList from "../components/portfolio/SectionList";

const Portfolio = () => {
  const sectionStyle = "flex flex-col md:m-2 p-4";

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-beige pt-4">
      <h1 className=" ml-6 text-4xl tracking-tight md:text-5xl lg:text-6xl text-start ">
        Zoe Broad
      </h1>
      <h2 className=" mx-6 text-lg font-normal lg:text-xl text-start border-b-2">
        Makeup and SFX Artist
      </h2>
      <section className={sectionStyle}>
        <SectionList title="Projects" images={projectImages} />
      </section>
      <section className={sectionStyle}>
        <SectionList title="SFX" images={sfxImages} />
      </section>
      <section className={sectionStyle}>
        <SectionList title="Beauty" images={beautyImages} />
      </section>
    </div>
  );
};

export default Portfolio;
