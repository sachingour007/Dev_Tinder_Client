import React from "react";
import loginpageIcon from "../assets/loginpageIcon.png";
import Login from "./Login";
import { Outlet } from "react-router-dom";

const LoginSingupWrapper = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <div className="card text-primary-content w-full py-12 items-center justify-center">
        <div className="card-body flex flex-row p-0  w-4/5 gap-5">
          <div className="w-3/6 ">
            <img src={loginpageIcon} alt="" className="animate-wiggle" />
          </div>
          <div className="w-3/6 p-12">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSingupWrapper;
