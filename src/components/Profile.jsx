import React, { useState } from "react";
import FeedCard from "./FeedCard";
import MultiSelectComponent from "./MultiSelectComponent";
import { skillOptions } from "../constant/skillList";

const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",

    photoUrl: "",
    about: "",
  });
  const [skills, setSkills] = useState([]);

  return (
    <div className="hero  flex-1 ">
      <div className="hero-content flex-col items-start lg:flex-row border border-cyan-700 rounded-2xl w-full gap-[100px] bg-base-300">
        <div className="text-center lg:text-left w-1/2">
          <h2 className="text-5xl font-bold mb-10 text-center">
            Profile Update
          </h2>
          <div className="">
            <div>
              <div className="flex flex-row gap-2.5 w-full">
                <fieldset className="fieldset p-0 w-1/2">
                  <legend className="fieldset-legend font18 mb-1 tracking-wide ">
                    First Name
                  </legend>
                  <input
                    type="text"
                    className="input py-5 font16 w-full"
                    placeholder="Enter First Name"
                  />
                </fieldset>
                <fieldset className="fieldset p-0 w-1/2">
                  <legend className="fieldset-legend font18 mb-1 tracking-wide">
                    Last Name
                  </legend>
                  <input
                    type="text"
                    className="input py-5 font16 w-full"
                    placeholder="Enter Last Name"
                  />
                </fieldset>
              </div>

              <div className="flex flex-row items-center gap-2.5 w-full">
                <div className="w-1/2">
                  <legend className="fieldset-legend font18 mb-1 tracking-wide">
                    Gender
                  </legend>
                  <select defaultValue="Gender" className="select ">
                    <option disabled={true}>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <fieldset className="fieldset p-0 w-1/2">
                  <legend className="fieldset-legend font18 mb-1 tracking-wide">
                    Age
                  </legend>
                  <input
                    type="number"
                    className="input py-5 font16"
                    placeholder="Enter Last Name"
                    name="age"
                  />
                </fieldset>
              </div>

              <div>
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  Skills
                </legend>
                <div>
                  <MultiSelectComponent
                    option={skillOptions}
                    skills={skills}
                    setSkills={setSkills}
                  />
                </div>
              </div>

              <fieldset className="fieldset p-0 w-full">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  Photo URL
                </legend>
                <input
                  type="text"
                  className="input py-5 font16 w-full"
                  placeholder="Enter Last Name"
                  name="photoUrl"
                />
              </fieldset>
              <fieldset className="fieldset p-0 w-full">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  About
                </legend>
                <textarea
                  className="textarea font16 w-full"
                  placeholder="Bio"
                ></textarea>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm w-1/2">
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
