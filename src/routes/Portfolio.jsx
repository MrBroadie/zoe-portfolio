import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  beautyImages,
  btsImages,
  filmImages,
  sfxImages,
} from "../components/data";
import ImageList from "../components/ImageList";

const Portfolio = () => {
  const h3Style = "text-4xl font-normal leading-normal mt-0 mb-2 underline";
  const imageContainerStyle =
    "grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 align-items-center";
  const sectionStyle = "flex flex-col md:m-2 p-4";

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-beige pt-4">
      <h1 className=" ml-6 text-4xl tracking-tight  md:text-5xl lg:text-6xl text-start">
        Zoe Broad
      </h1>
      <h2 className=" ml-6 text-lg font-normal lg:text-xl text-start">
        Makeup and SFX Artist
      </h2>
      <section className={sectionStyle}>
        <h3 className={h3Style}>SFX</h3>
        <div className={imageContainerStyle}>
          {sfxImages.map((image) => (
            <ImageList key={image.id} image={image} />
          ))}
        </div>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>Films</h3>
        <div className={imageContainerStyle}>
          {filmImages.map((image) => (
            <ImageList key={image.id} image={image} />
          ))}
        </div>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>Beauty</h3>
        <div className={imageContainerStyle}>
          {beautyImages.map((image) => (
            <ImageList key={image.id} image={image} />
          ))}
        </div>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>Behind the scenes</h3>
        <div className={imageContainerStyle}>
          {btsImages.map((image) => (
            <ImageList key={image.id} image={image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
