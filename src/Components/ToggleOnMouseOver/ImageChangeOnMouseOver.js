import React from "react";

import shot1 from "../../Static/Speakers/Screenshot1.png";
import shot2 from "../../Static/Speakers/Screenshot2.png";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";

export default prop => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImage={shot1}
        secondaryImage={shot2}
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage={shot2}
        secondaryImage={shot1}
        alt=""
        height="200"
      />
    </div>
  );
};
