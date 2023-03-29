import React, { useLayoutEffect, useState } from "react";
import "./GenreLayout.css";
import Ps5 from "../../../Assets/ps5icon.png";
import Ps4 from "../../../Assets/ps4.png";
import Xbox360 from "../../../Assets/xbox-logo.png";
import Xbox1 from "../../../Assets/icons8-xbox-one-x-48.png";
import XboxSX from "../../../Assets/icons8-xbox-series-x-48.png";
import Ps3 from "../../../Assets/playstation3.png";
import Pc from "../../../Assets/icons8-workstation-48.png";
import MacOS from "../../../Assets/macOS.png";
import PlatImgs from "../../../components/UI/PlatImgs";
import Rating from "../../../components/UI/Rating";
import { Link } from "react-router-dom";
const platImages = [
  { name: "PlayStation 5", image: Ps5 },
  { name: "PlayStation 4", image: Ps4 },
  { name: "Xbox 360", image: Xbox360 },
  { name: "Xbox One", image: Xbox1 },
  {
    name: "Xbox Series S/X",
    image: XboxSX,
  },
  { name: "PlayStation 3", image: Ps3 },
  { name: "PC", image: Pc },
  { name: "macOS", image: MacOS },
];
const GenreLayout = (props) => {
  const [platArr, setPlatArr] = useState([]);
  const platforms = props.platforms.map((plat) => plat.platform.name);
  let arr = [];

  platImages.filter((img) => {
    return img.name.includes(
      platforms.map((platform) =>
        platform === img.name
          ? arr.push({ id: Math.random(), image: img.image })
          : false
      )
    );
  });

  useLayoutEffect(() => {
    setPlatArr(arr);
  }, [2]);

  return (
    <>
      <div className="cardAnimator" key={props.gameID}>
        <div className="figure-card">
          <figure className="game-figure">
            <Link to={`/game/${props.gameID}`}>
              <div>
                <img src={props.pic} alt="/" />
                <span>
                  <h5>{props.GameName}</h5>
                </span>
              </div>
            </Link>
            <div className="gameDesc">
              <p>
                <Rating Rating={props.rating} disabled={false} />
              </p>
              <div className="gameText">
                <div className="platform-img">
                  <p>Available on: </p>
                  <div className="platImagesCont">
                    {platArr.map((img) => (
                      <PlatImgs key={img.id} src={img.image} />
                    ))}
                  </div>
                </div>

                <p>
                  Released in: <span>{props.Released}</span>
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default GenreLayout;

// const platFilter = () =>
// platImages.filter((plat) => {
//   let pName = plat.name;
//   let pImg = plat.image;
//   for (let i = 0; i < platforms.length; i++) {
//     if (pName === platforms[i]) {
//       return setPlatArr((prevState) => [...prevState, pImg[i]]);
//     }
//   }
//   return platArr;
// });
