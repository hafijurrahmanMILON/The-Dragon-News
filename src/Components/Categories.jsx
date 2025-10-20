import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const allCategories = use(categoryPromise);
  // console.log(allCategories);
  return (
    <div>
      <h1 className="font-bold text-xl flex justify-center">
        All Categories ({allCategories.length})
      </h1>
      <div className="grid grid-cols-1 mt-5">
        {allCategories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="btn btn-outline  text-lg font-semibold  border-0"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
