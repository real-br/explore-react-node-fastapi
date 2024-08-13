// BikeAnimation.js
import React from "react";
import Lottie from "lottie-react";
import bikeAnimation from "./bikeAnimation3.json"; // Path to your animation JSON file

const BikeAnimation = () => (
  <div className="bike">
    <Lottie animationData={bikeAnimation} loop={true} />
  </div>
);

export default BikeAnimation;
