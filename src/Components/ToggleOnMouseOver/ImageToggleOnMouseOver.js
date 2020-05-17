import React, { useRef } from "react";

export default ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null);

  return (
    <img
      src={primaryImage}
      alt=""
      height="200"
      onMouseOver={() => {
        imageRef.current.src = secondaryImage;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImage;
      }}
      ref={imageRef}
    />
  );
};
