import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Dropdown = () => {
    const [show, setShow] = useState("hidden")
    const {logout} = useContext(AuthContext)

    const logoutUser = () => {
        logout()
        console.log("Hello")

    }
  return (
    <div>
      <div className="inline-flex bg-white border rounded-md">

        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            onClick={() => setShow(show === "hidden" ? "" : "hidden")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className={`absolute ${show} right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg`}>
            <div className="p-2">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
                Profile
              </Link>

              <Link
                to="/change-password"
                className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
                Change Password
              </Link>
              <button
              onClick={logoutUser}
                className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
               Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
