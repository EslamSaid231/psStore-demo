import React from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import "./AdContainer.css";
import AdTitle from "./AdTitle";
const AdContainer = (props) => {
  const covers = {
    backgroundImage: `url(${props.Pic})`,
  };
  return (
    <div className="Ad">
      <div className="backgroundImg" style={covers}></div>
      <div className="AdTopicContainer">
        <AdTitle
          title={"Feel a New Real"}
          paragraph={"Immerse yourself in epic worlds that go beyond reality"}
        />
        <Link to="/games">
          <Button title={"See Games"} className={"lightBlueBtn"} />
        </Link>
      </div>
    </div>
  );
};

export default AdContainer;
