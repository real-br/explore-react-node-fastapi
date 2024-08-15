// BikeAnimation.js
import React from "react";
import Lottie from "lottie-react";
import bikeAnimation from "../assets/bikeAnimation3.json"; // Path to your animation JSON file

interface Props {
  width: number;
  height: number;
}

const BikeAnimation = ({ width, height }: Props) => (
  <div className="bike">
    <Lottie
      animationData={bikeAnimation}
      loop={true}
      height={width}
      width={height}
    />
  </div>
);

export default BikeAnimation;
