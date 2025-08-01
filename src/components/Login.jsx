import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("mona@gmail.com");
  const [password, setPassword] = useState("Mona@123");
  const dispatch = useDispatch();

  const loginFormHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
    } catch (error) {
      console.log("Axios error:", error.response?.status, error.message);
    }
  };

  return (
    <div className="xl: w-4/5 my-0 mx-auto">
      <h2 className="card-title text-center w-full block font36 font-semibold uppercase mb-5">
        User Login
      </h2>
      <div className="flex gap-2.5 flex-col">
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">
            Email
          </legend>
          <input
            type="text"
            className="input py-5 font16"
            placeholder="Enter Email"
            name="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">
            Password
          </legend>
          <input
            type="text"
            className="input py-5 font16 "
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
      </div>
      <div className="card-actions mt-8 mb-6">
        <button
          className="btn tracking-wider font16"
          onClick={loginFormHandler}
        >
          Login
        </button>
      </div>

      <p className="font16 leading-3.5 tracking-wide ">
        Don't have an account? <strong>Register</strong>.
      </p>
    </div>
  );
};

export default Login;
