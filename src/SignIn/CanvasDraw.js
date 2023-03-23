import React from "react";
import LoginCanvas from "./LoginCanvas";
import backgroundImage from "./gamesbackground.jfif";
const CanvasDraw = () => {
  let positionX = 0;
  let positionX2 = 1250;
  let frames = 0.1;
  const draw = (ctx, CANVAS_WIDTH, CANVAS_HEIGHT) => {
    const gamesImage = new Image();
    gamesImage.src = backgroundImage;
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(gamesImage, positionX, 0);
      ctx.drawImage(gamesImage, positionX2, 0);
      positionX < -1249 ? (positionX = 1250 - frames) : (positionX -= frames);
      positionX2 < -1249
        ? (positionX2 = 1250 - frames)
        : (positionX2 -= frames);

      requestAnimationFrame(animate);
    }
    animate();
  };

  return <LoginCanvas draw={draw} />;
};

export default CanvasDraw;

// const gameImage = new Image();
// gameImage.src = backgroundImage;
// const spriteWidth = 142.86;
// const spriteHeight = 179.25;
// let imageFrames = 0;
// let staggerFrames = 50;
// const spriteFrames = [];
// const rowState = [
//   {
//     name: "first-row",
//     frames: 7,
//   },
//   {
//     name: "second-row",
//     frames: 7,
//   },

//   {
//     name: "third-row",
//     frames: 7,
//   },
//   {
//     name: "fourth-row",
//     frames: 7,
//   },
// ];
// let x = 0;
// rowState.forEach((state, index) => {
//   let frames = {
//     loc: [],
//   };
//   for (let i = 0; i < state.frames; i++) {
//     let positionX = i * spriteWidth;
//     let positionY = index * spriteHeight;
//     frames.loc.push({ x: positionX, y: positionY });
//   }
//   spriteFrames[state.name] = frames;
// });
// console.log(spriteFrames);
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   let position =
//     Math.floor(imageFrames / staggerFrames) %
//     spriteFrames[rowIndex].loc.length;
//   let frameX = spriteWidth * position;
//   let frameY = spriteFrames[rowIndex].loc[position].y;

//   ctx.drawImage(
//     gameImage,
//     frameX,
//     frameY,
//     spriteWidth,
//     spriteHeight,
//     0,
//     0,
//     spriteWidth,
//     spriteHeight
//   );

//   frameX < 1000 ? frameX =1000- imageFrames : (frameX -= imageFrames);
//   requestAnimationFrame(animate);
