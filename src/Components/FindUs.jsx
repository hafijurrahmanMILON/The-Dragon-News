import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2">Find Us</h1>
      <div className="join-vertical">
        <button className="btn btn-outline font-semibold text-lg border border-gray-200 w-full join-item"> <FaFacebook size={20}></FaFacebook> Facebook</button>
        <button className="btn btn-outline font-semibold text-lg border border-gray-200 w-full join-item"> <FaTwitter></FaTwitter> Twitter</button>
        <button className="btn btn-outline font-semibold text-lg border border-gray-200 w-full join-item"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
