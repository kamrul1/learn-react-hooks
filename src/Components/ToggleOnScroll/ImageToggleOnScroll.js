import React, { useRef, useEffect, useState } from "react";

export default ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHander);
    setInView(isInView());
    setIsLoading(false);
    return () => {
      window.removeEventListener("scroll", scrollHander);
    };
  });

  //calculate based on image size
  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  //is the image in view
  const scrollHander = () => {
    setInView(() => {
      return isInView();
    });
  };

  const [inView, setInView] = useState(false);

  return isLoading ? null : (
    <img
      src={inView ? secondaryImage : primaryImage}
      alt=""
      height="200"
      ref={imageRef}
    />
  );
};
