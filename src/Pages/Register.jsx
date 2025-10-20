import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        toast.success("Account Created Successfully");
        // console.log(result.user);
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
            toast.error(error.code);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
        setUser(null);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-center font-bold text-3xl">
            Register your account
          </h1>
          <hr className="text-gray-300 mt-6"></hr>
          <fieldset className="fieldset mt-6">
            {/* name */}
            <label className="label font-semibold text-lg">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {/* photo Url */}
            <label className="label font-semibold text-lg">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label font-semibold text-lg">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label font-semibold text-lg">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary underline">
                LogIn
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
