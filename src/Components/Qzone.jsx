import React from "react";
import swimImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playImg from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-4 rounded-lg">
      <h1 className="font-bold text-xl">Qzone</h1>
      <img src={swimImg} alt="" />
      <img src={classImg} alt="" />
      <img src={playImg} alt="" />
    </div>
  );
};

export default Qzone;
