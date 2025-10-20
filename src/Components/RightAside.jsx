import React from "react";
import LoginWith from "./LoginWith";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import adImg from "../assets/bg.png";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <LoginWith></LoginWith>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <img src={adImg} alt="" />
    </div>
  );
};

export default RightAside;
