import React from "react";
import loginpageIcon from "../assets/loginpageIcon.png";
import Login from "./Login";
import { Outlet } from "react-router-dom";

const LoginSingupWrapper = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a]  to-[#334155] flex-1">
      <div className="wrapper card text-primary-content w-full py-7 items-center justify-center">
        <div className="card-body flex flex-col xl:flex-row  items-center w-full p-0 gap-5">
          <div className=" w-full xl:w-3/6 ">
            <img src={loginpageIcon} alt="" className="animate-wiggle" />
          </div>
          <div className="w-full xl:w-3/6 p-5 md:p-10 xl:p-12 border border-cyan-700 rounded-2xl bg-base-300 ">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSingupWrapper;
