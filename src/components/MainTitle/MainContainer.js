import React, { useEffect, useState } from "react";
import { useData } from "../../Store/DataProvider";
import AdContainer from "./AdContainer";
import vrImg from "../../Assets/9777b74a69bdb53eee269fac15ad5793d545a095.webp";
import GameContainer from "../GameContainer/GameContainer";
import CoDImg from "../../Assets/call_of_duty_sony_microsoft_activision_eu.jpg";
import GodOfWar from "../../Assets/god_of_war.jpg";
const images = [vrImg, CoDImg, GodOfWar];
const MainContainer = (props) => {
  const { games } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      return clearTimeout(identifier);
    }, 6000);
  }, [currentIndex]);
  return (
    <div>
      <AdContainer items={games} Pic={images[currentIndex]} />
      <GameContainer />
    </div>
  );
};

export default MainContainer;
