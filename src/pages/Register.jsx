import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../graphql/Mutations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser] = useMutation(REGISTER_USER, {
    onError(err){
      const error = err.graphQLErrors[0].extensions.exception.stacktrace[0]
      console.log("errorsssss", error)
      toast.error(error)
    }
  });
  const navigate = useNavigate()  


  const onSubmit = (data) => {
    console.log("data", data);
    registerUser({
      variables: data,
      onCompleted() {
        navigate("/login")
        toast.success("User registered successfully")

      }
    });
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div
        style={{ marginTop: "50px" }}
        className="w-full p-6 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-xl"
      >
        <h1 className="text-3xl font-semibold text-center text-blue-600">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-800"
            >
              Firstname
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("firstName", { required: "Firstname is required" })}
            />
          </div>
          <p className=" text-red-500 text-xs">{errors.firstName?.message}</p>
          <div className="mb-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-800"
            >
              Lastname
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("lastName", { required: "Lastname is required" })}
            />
          </div>
          <p className=" text-red-500 text-xs">{errors.lastName?.message}</p>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <p className=" text-red-500 text-xs">{errors.email?.message}</p>

          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("userName", { required: "Username is required" })}
            />
          </div>
          <p className=" text-red-500 text-xs">{errors.userName?.message}</p>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          <p className=" text-red-500 text-xs">{errors.password?.message}</p>

          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
            />
          </div>
          <p className=" text-red-500 text-xs">
            {errors.confirmPassword?.message}
          </p>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Register
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Register;
