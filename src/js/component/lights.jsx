import React from "react";

const Lights = (props) => {
  return (
    <div className="container text-center">
      <div className="lightsHolder"></div>
      <div className="trafficLights">
        <div className="redLight" onClick={props.redLightClick}></div>
        <div className="yellowLight" onClick={props.yellowLightClick}></div>
        <div className="greenLight" onClick={props.greenLightClick}></div>
      </div>
    </div>
  );
};

export default Lights;
