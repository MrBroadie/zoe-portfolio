import React from "react";
import ImageList from "./ImageList";
import PropTypes from "prop-types";

const SectionList = ({ images, title }) => {
  const h3Style = "text-4xl font-normal leading-normal mt-0 mb-2 underline";
  const imageContainerStyle =
    "grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 align-items-center";
  return (
    <>
      <h3 className={h3Style}>{title}</h3>
      <div className={imageContainerStyle}>
        {images.length &&
          images.map((image) => <ImageList key={image.id} image={image} />)}
      </div>
    </>
  );
};

SectionList.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionList;
