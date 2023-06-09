import React, { useState, useContext, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loginData, setLoginData } = useContext(LoginContext);

  const [showPassword, setShowPassword] = useState(false);

  const { username, password } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem("loginData", JSON.stringify(loginData));
  }, [loginData]);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoginData(formData);
    navigate("/dashboard");
    console.log(loginData);
  };

  return (
    <div className="mx-auto w-11/12 max-w-[500px] py-32">
      <h1 className="text-[3rem] font-semibold leading-[2.375rem] text-blue-100   text-center">
        Track Your Records
      </h1>
      <p className="mt-8 text-[1.5rem] leading-[1.625rem] text-center">
        <span className="text-richblack-100">Login</span>{" "}
        <span className="font-edu-sa font-bold italic  text-pink-50">
          to keep track of your records
        </span>
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="mt-16  flex w-full flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[1rem] leading-[1.375rem] text-richblack-5">
            Username <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="username"
            value={username}
            onChange={handleOnChange}
            placeholder="Enter Your Username"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="mt-2 w-full rounded-[0.5rem] bg-richblack-800 p-[16px] text-richblack-5"
          />
        </label>
        <label className="relative mt-4">
          <p className="mb-1 text-[1rem] leading-[1.375rem] text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="mt-2 w-full rounded-[0.5rem] bg-richblack-800 p-[16px] pr-12 text-richblack-5"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[50px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        <button
          type="submit"
          className="mt-6 text-[1.25rem] rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 hover:bg-yellow-100 transition-all delay-20  "
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
