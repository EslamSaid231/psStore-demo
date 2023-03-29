import React, { useEffect, useState } from "react";
import "./Slider.css";
const Slider = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
    if (length === children.length) {
      setLength(0);
    }
  }, [children, currentIndex]);
  const nextImg = () => {
    if (currentIndex <= length) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const prevImg = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {currentIndex > 0 && (
          <button className="left-arr" onClick={prevImg}>
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 28}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex <= length && (
          <button className="right-arr" onClick={nextImg}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
