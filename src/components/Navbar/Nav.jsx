import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Dropdown from "../common-components/Dropdown";

const Nav = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-100 mb-3">
        <div className="container flex items-center justify-between">
          <div className="flex justify-between">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              to={"/post"}
            >
              Social Media App
            </Link>
          </div>
          <div>
            {!user && (
              <Link to={"/login"} className="px-4">
                Login
              </Link>
            )}
            {!user && (
              <Link className="px-4" to={"/register"}>
                Register
              </Link>
            )}
            <div className="flex">
              {user && <Dropdown />}
              <h5 className=" font-xs mx-2"></h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
