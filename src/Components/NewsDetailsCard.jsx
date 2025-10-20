import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ detailedNews }) => {
//   console.log(detailedNews);
  const { image_url, details, title } = detailedNews;
  return (
      <div className="  bg-white p-6 space-y-4 h-fit mt-5">
          
      <img
        className="w-full h-[350px] object-cover rounded-lg"
        src={image_url}
        alt=""
      />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-lg text-gray-500">{details}</p>
      <Link
        to={`/category/${detailedNews.category_id}`}
        className="btn btn-secondary"
      >
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
