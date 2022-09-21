import React from 'react'
import { CHANGE_PASSWORD } from '../../graphql/Mutations/Profile'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [changePassword] = useMutation(CHANGE_PASSWORD, {
        onError(err) {
            const error = err.graphQLErrors[0].extensions.exception.stacktrace[0]
            console.log("errorsssss", error)
            toast.error(error)
        }
    })

    const onSubmit = (data, e) => {
        changePassword({
            variables: data,
            onCompleted(res) {
                console.log(res)
                toast.success("Password changed successfully")
                e.target.reset()

            }
        })
    }

  
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
    <div style={{marginTop: "100px"}} className="w-full p-6 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-xl">
      <h1 className="text-3xl font-semibold text-center text-blue-600">
        Change Password
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="mb-2">
          <label
            htmlFor="oldPassword"
            className="block text-sm font-semibold text-gray-800"
          >
            Old Password
          </label>
          <input
          {...register("oldPassword", {required: "Old password is required"})}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p className="text-red-500 text-xs">{errors.oldPassword?.message}</p>

        <div className="mb-2">
          <label
            htmlFor="newPassword"
            className="block text-sm font-semibold text-gray-800"
          >
            New Password
          </label>
          <input
          {...register("newPassword", {required: "New password is required"})}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"

          />
        </div>
        <p className="text-red-500 text-xs">{errors.newPassword?.message}</p>

        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold text-gray-800"
          >
            Confirm Password
          </label>
          <input
          {...register("confirmPassword", {required: "Confirm password is required"})}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>

        <div className="mt-6">
          <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Change password
          </button>
        </div>
      </form>
    </div>
    <ToastContainer />

  </div>
  )
}

export default ChangePassword