import React, { useState } from "react";
import Lights from "./lights";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
  const [clickedColor, setClickedColor] = useState("");

  const handlerRedClick = () => {
    setClickedColor("red");
    console.log("You clicked the Red color");
  };

  const handlerYellowClick = () => {
    setClickedColor("yellow");
    console.log("You clicked the Yellow color");
  };

  const handlerGreenClick = () => {
    setClickedColor("green");
    console.log("You clicked the Green color");
  };

  return (
    <React.Fragment>
      <Lights
        redLightClick={handlerRedClick}
        yellowLightClick={handlerYellowClick}
        greenLightClick={handlerGreenClick}
      />
    </React.Fragment>
  );
};

export default TrafficLight;
