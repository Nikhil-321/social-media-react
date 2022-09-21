import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { USER_LOGIN } from "../graphql/Mutations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
      const {login} = useContext(AuthContext)
      const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [loginUser] = useMutation(USER_LOGIN, {
      onError(err) {
        const error = err.graphQLErrors[0].extensions.exception.stacktrace[0]
        toast.error(error)
      }
    })


    const onSubmit = (data) => {
        loginUser({
          variables: data,
          onCompleted(res) {
            login(res)  
            navigate("/post")
            localStorage.setItem("jwtToken", res.loginUser.token)
          }
        })
    }

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div style={{marginTop: "100px"}} className="w-full p-6 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-600">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
            {...register("email", {required: "Email is required"})}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <p className="text-red-500 text-xs">{errors.email?.message}</p>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
            {...register("password", {required: "Password is required"})}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"

            />
          </div>
          <p className="text-red-500 text-xs">{errors.password?.message}</p>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
