import React, { useState, Fragment } from "react";

export default props => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <Fragment>
      <input
        placeholder="Enter Some Text"
        onChange={e => {
          e.preventDefault();
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
      />
      <br />
      {inputText}
      <hr /> <br />
      <ul>
        {historyList.map(rec => {
          return <div>{rec}</div>;
        })}
      </ul>
    </Fragment>
  );
};
