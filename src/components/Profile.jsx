import React, { useState } from "react";
import FeedCard from "./FeedCard";
import MultiSelectComponent from "./MultiSelectComponent";
import { skillOptions } from "../constant/skillList";
import { useSelector } from "react-redux";

const Profile = () => {
  const userProfile = useSelector((store) => store.user);
  if (!userProfile || !userProfile.user) {
    return;
  }
  const { firstName, lastName, age, gender, photoUrl, about } =
    userProfile?.user || {};

  const [updateProfile, setUpdateProfile] = useState({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    photoUrl: photoUrl,
    about: about,
  });
  const [skills, setSkills] = useState([]);

  const textHandler = (e) => {
    setUpdateProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  return (
    userProfile?.user && (
      <div className="hero flex-1 ">
        <div className="hero-content px-5 flex-col items-start lg:flex-row border border-cyan-700 rounded-2xl w-full gap-[100px] bg-base-300">
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
                      name="firstName"
                      value={updateProfile.firstName}
                      onChange={textHandler}
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
                      name="lastName"
                      value={updateProfile.lastName}
                      onChange={textHandler}
                    />
                  </fieldset>
                </div>

                <div className="flex flex-row items-center gap-2.5 w-full">
                  <div className="w-1/2">
                    <legend className="fieldset-legend font18 mb-1 tracking-wide">
                      Gender
                    </legend>
                    <select
                      defaultValue="Gender"
                      className="select"
                      name="gender"
                      value={updateProfile.gender}
                      onChange={textHandler}
                    >
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
                      value={updateProfile.age}
                      onChange={textHandler}
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
                    value={updateProfile.photoUrl}
                    onChange={textHandler}
                  />
                </fieldset>
                <fieldset className="fieldset p-0 w-full">
                  <legend className="fieldset-legend font18 mb-1 tracking-wide">
                    About
                  </legend>
                  <textarea
                    className="textarea font16 w-full"
                    placeholder="Bio"
                    value={updateProfile.about}
                    name="about"
                    onChange={textHandler}
                  ></textarea>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm w-1/2 flex items-center justify-center">
            <FeedCard feedData={userProfile?.user} />
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
