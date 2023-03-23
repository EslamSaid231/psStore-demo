import React, { useEffect, useLayoutEffect, useState } from "react";
import { useData } from "../../Store/DataProvider";
import AdContainer from "./AdContainer";
import vrImg from "../../Assets/9777b74a69bdb53eee269fac15ad5793d545a095.webp";
import GameContainer from "../GameContainer/GameContainer";
import CoDImg from "../../Assets/call_of_duty_sony_microsoft_activision_eu.jpg";
import GodOfWar from "../../Assets/god_of_war.jpg";
import LoadingSpinner from "../UI/LoadingSpinner";

const images = [vrImg, CoDImg, GodOfWar];
const MainContainer = () => {
  const [isloading, setIsLoading] = useState(true);
  const { games } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    const identifier = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      return clearTimeout(identifier);
    }, 6000);
  }, [currentIndex, isloading]);

  return !isloading ? (
    <div>
      <AdContainer items={games} Pic={images[currentIndex]} />
      <GameContainer />
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default MainContainer;
