import React from "react";
import PropTypes from "prop-types";

export const Image = ({ src, alt, className, width, height, ...attrs }) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`image ${className}`}
      width={width}
      height={height}
      {...attrs}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: "",
  alt: "image",
  width: 100,
  height: 100,
  className: "",
};
