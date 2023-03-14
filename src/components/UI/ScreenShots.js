import React from "react";
import "./ScreenShots.css";
const ScreenShots = (props) => {
  const clicking = () => {
    props.thumb(props.src);
  };
  return (
    <div className="screenShots" onClick={clicking}>
      <img src={props.src} alt="/" />
    </div>
  );
};

export default ScreenShots;
