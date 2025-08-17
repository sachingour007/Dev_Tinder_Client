import React from "react";
import FeedCard from "./FeedCard";

const Profile = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col items-start lg:flex-row border border-white">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-10">Profile Update</h2>
          <div className="">
            <div>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  First Name
                </legend>
                <input
                  type="text"
                  className="input py-5 font16"
                  placeholder="Enter First Name"
                  name=""
                  value=""
                />
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  Last Name
                </legend>
                <input
                  type="text"
                  className="input py-5 font16"
                  placeholder="Enter Last Name"
                  name=""
                  value=""
                />
              </fieldset>
              <div className="flex gap-5 pt-3.5 items-baseline">
                <p className="font18 tracking-wide font-semibold">Gender :</p>
                <label htmlFor="male">
                  Male
                  <input
                    type="radio"
                    name="radio-1"
                    id="male"
                    className="radio ml-1.5"
                    defaultChecked
                  />
                </label>
                <label htmlFor="female">
                  Female
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio ml-1.5"
                    id="female"
                  />
                </label>
              </div>

              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  Age
                </legend>
                <input
                  type="number"
                  className="input py-5 font16"
                  placeholder="Enter Last Name"
                  name="age"
                  value=""
                />
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  Photo URL
                </legend>
                <input
                  type="number"
                  className="input py-5 font16"
                  placeholder="Enter Last Name"
                  name="photoUrl"
                  value=""
                />
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  About
                </legend>
                <textarea
                  className="textarea font16"
                  placeholder="Bio"
                ></textarea>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
