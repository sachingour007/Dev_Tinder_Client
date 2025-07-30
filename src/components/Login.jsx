import React from "react";

const Login = () => {
  return (
    <div>
      <h2 className="card-title text-center w-full block font36 font-semibold uppercase mb-5">
        User Login
      </h2>
      <div className="flex gap-2.5 flex-col">
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">Email</legend>
          <input
            type="text"
            className="input py-5 font16"
            placeholder="Enter Email"
            name="email"
          />
        </fieldset>
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">Password</legend>
          <input
            type="text"
            className="input py-5 font16 "
            placeholder="Enter Password"
            name="password"
          />
        </fieldset>
      </div>
      <div className="card-actions mt-8 mb-6">
        <button className="btn tracking-wider font16" >Login</button>
      </div>

      <p className="font16 leading-3.5 tracking-wide ">
        Don't have an account? <strong>Register</strong>.
      </p>
    </div>
  );
};

export default Login;
