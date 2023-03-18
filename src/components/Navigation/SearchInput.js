import React, { useState } from "react";
import "./SearchInput.css";
const SearchInput = (props) => {
  const changeHandler = (e) => {
    props.inputs(e.target.value);
  };
  return (
    <div className="search-input">
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default SearchInput;
