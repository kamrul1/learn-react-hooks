import React, { useState, useEffect } from "react";

export default () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  //takes two parameters, second begin an array e.g. [checkBoxValue]
  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect Cleanup");
    };
  }, [checkBoxValue]);

  return (
    <div>
      <input
        type="checkbox"
        onChange={e => {
          setCheckBoxValue(e.target.value);
        }}
      />
    </div>
  );
};
