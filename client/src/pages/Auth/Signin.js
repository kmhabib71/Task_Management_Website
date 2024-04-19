import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
function Signin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("user is: ", user);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        user,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log("Success: ", response);
        toast.success("Sign In Succesfull!");
      }
    } catch (error) {
      console.log("Error Message from register: ", error.response);
      //   toast.error(error.response);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="mb-4 text-xl font-bold text-center text-blue-500">
          Sign In
        </h3>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              checked={showPassword}
              id="show-password"
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label
              htmlFor="show-password"
              className="text-xs text-gray-600 ml-1">
              {" "}
              Show Password
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <p className="text-sm text-blue-500 hover:text-blue-700">
            Not registered?{" "}
            <Link to="/register" className="font-bold">
              Register
            </Link>
          </p>
        </div>
        <div>
          <Link to="http://localhost:5000/auth/google">
            <p className="flex items-center justify-center border border-gray-400 text-gray font-bold py-2 px-4 rounded w-full cursor-pointer ">
              <FcGoogle className="mr-2 h-6 w-6" /> Sign In With Google
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
