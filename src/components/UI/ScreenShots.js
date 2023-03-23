import React from "react";
import "./ScreenShots.css";
const ScreenShots = (props) => {
  const clicking = () => {
    props.thumb(props.src);
  };

  const curImg = () => {
    if (props.curr === props.src) {
      return "this";
    }
  };
  return (
    <div className={`screenShots ${curImg()}`} onClick={clicking}>
      <img className={curImg()} src={props.src} alt="/" />
    </div>
  );
};

export default ScreenShots;
