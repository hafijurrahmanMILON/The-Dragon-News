import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 space-y-3">
      <img src={logo} alt="" />
      <p className="text-accent text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl ">
        {format(new Date(), "EEEE, MMMM  dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
