import React from "react";

import shot1 from "../../Static/Speakers/Screenshot1.png";
import shot2 from "../../Static/Speakers/Screenshot2.png";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

export default prop => {
  const getImages = () => {
    let listOfImages = [];
    for (let i = 0; i < 100; i++) {
      listOfImages.push(
        <div key={i}>
          <ImageToggleOnScroll primaryImage={shot1} secondaryImage={shot2} />
        </div>
      );
    }
    return listOfImages;
  };

  return <div>{getImages()}</div>;
};
