import React from "react";

import Button from "../UI/Button";
import "./AdContainer.css";
import AdTitle from "./AdTitle";
const AdContainer = (props) => {
  const covers = {
    backgroundImage: `url(${props.Pic})`,
  };
  return (
    <div className="Ad">
      <div className="backgroundImg" style={covers}>
        {/* <img src={props.Pic} alt="/" /> */}
      </div>
      <div className="AdTopicContainer">
        <AdTitle
          title={"Feel a New Real"}
          paragraph={"Immerse yourself in epic worlds that go beyond reality"}
        />
        <Button title={"See Games"} className={"lightBlueBtn"} />
      </div>
    </div>
  );
};

export default AdContainer;
