import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  // states
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        toast.success("logIn successful");
        // Signed in
        // const user = result.user;
        // console.log(user);
        navigate(location.state ? location.state : "/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        toast.error(errorCode);
        setError(error.code);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <form onSubmit={handleLogin} className="card-body  p-5">
          <h1 className="text-center font-bold text-3xl">Login your account</h1>
          <hr className="text-gray-300 mt-6"></hr>
          <fieldset className="fieldset mt-6">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-error">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center">
              Dont’t Have An Account ?{" "}
              <Link to="/auth/register" className="text-secondary underline">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
