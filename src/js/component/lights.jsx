import React from "react";

const Lights = (props) => {
  return (
    <div className="container text-center">
      <div className="lightsHolder"></div>
      <div className="trafficLights">
        <div className="redLight">{props.redLightClick}</div>
        <div className="yellowLight">{props.yellowLightClick}</div>
        <div className="greenLight">{props.greenLightClick}</div>
      </div>
      {props.clickedColor && (
        <p>You clicked the {props.clickedColor} color!!</p>
      )}
    </div>
  );
};

export default Lights;
