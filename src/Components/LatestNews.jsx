import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex bg-base-200 p-3">
      <div className="bg-secondary">
        <p className="text-white px-3 py-1 font-semibold text-xl">Latest</p>
      </div>
      <Marquee className="px-8">
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          minus.
        </p>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          minus.
        </p>
        <p className="font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          minus.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
