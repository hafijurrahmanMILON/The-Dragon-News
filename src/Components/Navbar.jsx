import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut()
      .then(() => {
        // console.log(result)
        alert("signout");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="space-x-4 absolute left-1/2 -translate-x-1/2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleSignout}
            className="btn rounded-none btn-primary px-12 font-semibold text-lg hover:bg-gray-800"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn rounded-none btn-primary px-12 font-semibold text-lg hover:bg-gray-800"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
