import React, { Fragment } from "react";
import LearnUseState from "./Components/LearnUseState";
import ImageChangeOnMouseOver from "./Components/ToggleOnMouseOver/ImageChangeOnMouseOver";
import LearnUseEffect1 from "./Components/LearnUseEffect1";
import ImageChangeOnScroll from "./Components/ToggleOnScroll/ImageChangeOnScroll";

export default () => (
  <Fragment>
    <LearnUseState />
    <ImageChangeOnMouseOver />
    <LearnUseEffect1 />
    <ImageChangeOnScroll />
  </Fragment>
);
