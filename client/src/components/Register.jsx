import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext.js";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await registerUser(data.email, data.password);
      alert("User registed successfully");
    } catch (error) {
      console.log(error)
      setMessage("Please provide a valid email and password", error.message);
    }
  };

  const handleGoogleSignIn = () => {};
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="flex flex-wrap space-y-2.5 items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <p className="inline-block align-baseline font-medium mt-4 text-sm">
          Have an account? Please
          <Link to="/login" className="text-blue-500 hover:text-blue-800">
            {" "}
            Login
          </Link>
        </p>
        <div className="mt-4">
          <button
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy;2025 GetBook. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
