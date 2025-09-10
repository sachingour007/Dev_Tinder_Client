import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { URL } from "../constant/hpCardData";
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const inputHandler = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const signupFormHandler = async () => {
    try {
      const res = await axios.post(
        URL + "/signup",
        { ...formDetails },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.user));
      toast.success("SignUp Successfully !");
      navigate("/profile");
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.error("Backend said:", err.response.data.error);
        setError(err.response.data.error);
      } else {
        console.error("No response from server");
        setError("No response from server");
      }
    }
  };

  return (
    <div className="xl: w-4/5 my-0 mx-auto">
      <h2 className="card-title text-center w-full block font36 font-semibold uppercase mb-5">
        User Signup
      </h2>
      <div className="flex gap-2.5 flex-col">
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">
            FirstName
          </legend>
          <input
            type="text"
            className="input py-5 font16 min-w-3/4"
            placeholder="Enter Email"
            name="firstName"
            value={formDetails.firstName}
            onChange={inputHandler}
          />
        </fieldset>
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">
            LastName
          </legend>
          <input
            type="text"
            className="input py-5 font16 min-w-3/4"
            placeholder="Enter Email"
            name="lastName"
            value={formDetails.lastName}
            onChange={inputHandler}
          />
        </fieldset>
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">
            Email
          </legend>
          <input
            type="text"
            className="input py-5 font16 min-w-3/4"
            placeholder="Enter Email"
            name="emailId"
            value={formDetails.emailId}
            onChange={inputHandler}
          />
        </fieldset>
        <fieldset className="fieldset p-0">
          <legend className="fieldset-legend font20 mb-1 tracking-wide">
            Password
          </legend>
          <input
            type="password"
            className="input py-5 font16 min-w-3/4"
            placeholder="Enter Password"
            name="password"
            value={formDetails.password}
            onChange={inputHandler}
            autoComplete="off"
          />
        </fieldset>

        {error ? <p className="text-red-600 pl-1">{error}</p> : ""}
      </div>
      <div className="card-actions mt-8 mb-6">
        <button
          className="btn tracking-wider font16"
          onClick={signupFormHandler}
        >
          Sign Up
        </button>
      </div>

      <p className="font16 leading-3.5 tracking-wide ">
        Already have an account? Please
        <strong>
          <Link to={"/login"}> Login</Link>
        </strong>
        .
      </p>
    </div>
  );
};

export default Signup;
