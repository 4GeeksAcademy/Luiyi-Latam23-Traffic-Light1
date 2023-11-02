import React from "react";
import Lights from "./lights.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
  return (
    <React.Fragment>
      <Lights />
    </React.Fragment>
  );
};

export default TrafficLight;
