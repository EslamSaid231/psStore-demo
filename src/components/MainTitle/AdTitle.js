import React from "react";
import "./AdTitle.css";
const AdTitle = (props) => {
  return (
    <>
      <div className="AdTopic">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default AdTitle;
