import React from "react";
import { FaEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-md  rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex bg-base-300 justify-between items-center px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
      </figure>

      {/* Tags and Snippet */}
      <div className="px-4 py-2 text-sm text-gray-600">
        <p className="text-xs mb-2">
          Wednesday, August 24, 2022 | Tags: {tags.join(", ")}
        </p>
        <p>{details.slice(0, 120)}...</p>
        <Link
          to={`/newsDetails/${id}`}
          className="text-orange-500 font-medium cursor-pointer hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
