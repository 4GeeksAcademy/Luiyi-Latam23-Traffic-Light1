import React, { useState } from "react";
import Lights from "./lights";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleLightClick = (color) => {
    setSelectedColor(color);
  };

  const isLightSelected = (color) => {
    return selectedColor === color ? "selected" : "";
  };

  return (
    <div className="container text-center">
      <div className="lightsHolder"></div>
      <div className="trafficLights">
        <div
          className={`redLight ${isLightSelected("red")}`}
          onClick={() => handleLightClick("red")}
        ></div>
        <div
          className={`yellowLight ${isLightSelected("yellow")}`}
          onClick={() => handleLightClick("yellow")}
        ></div>
        <div
          className={`greenLight ${isLightSelected("green")}`}
          onClick={() => handleLightClick("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
