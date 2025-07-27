import React from "react";

const Login = () => {
  return (
    <div>
      <h2 className="card-title text-center w-full block">User Login</h2>
      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email </legend>
          <input type="text" className="input" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="text" className="input" placeholder="Type here" />
        </fieldset>
      </div>
      <div className="card-actions justify-end">
        <button className="btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Login;
