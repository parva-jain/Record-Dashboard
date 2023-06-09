import React, { useContext, useEffect } from "react";
import logo from "../assets/logo-no-background.png";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(LoginContext);

  useEffect(() => {
    setLoginData(JSON.parse(window.localStorage.getItem("loginData")));
  }, [setLoginData]);

  const { username } = loginData;

  return (
    <div className="flex h-16 items-center justify-between border-b-[1px] border-b-richblack-700 bg-richblack-800">
      {/* Image */}

      <img
        src={logo}
        alt="logo"
        width={160}
        height={42}
        loading="lazy"
        className="ml-8"
      />

      <div className="flex gap-10 items-center">
        <span className=" text-[2rem] font-bold  text-blue-50 ">
          {username}
        </span>
        <button
          onClick={() => navigate("/")}
          className="mr-16 text-[1.25rem] rounded-[8px] bg-blue-50   py-[8px] px-[20px] font-medium text-richblack-900 hover:bg-yellow-100 transition-all delay-20  "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
