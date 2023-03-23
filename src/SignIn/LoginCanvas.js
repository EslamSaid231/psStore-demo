import { render } from "@testing-library/react";
import React, { useEffect, useRef } from "react";

import "./LoginCanvas.css";

const LoginCanvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const CANVAS_WIDTH = (canvas.width = 950);
    const CANVAS_HEIGHT = (canvas.height = 720);
    const render = () => {
      draw(context, CANVAS_WIDTH, CANVAS_HEIGHT);
    };
    render();
  }, []);
  return <canvas id="canvas1" ref={canvasRef} {...rest}></canvas>;
};

export default LoginCanvas;
