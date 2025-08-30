import React, { useEffect, useState } from "react";
import FeedCard from "./FeedCard";
import MultiSelectComponent from "./MultiSelectComponent";
import { skillOptions } from "../constant/skillList";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../constant/hpCardData";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((store) => store.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userProfile) {
      setFirstName(userProfile.firstName || "");
      setLastName(userProfile.lastName || "");
      setGender(userProfile.gender || "");
      setAge(userProfile.age || "");
      setPhotoUrl(userProfile.photoUrl || "");
      setAbout(userProfile.about || "");
      setSkills(userProfile.skills || []);
    }
  }, [userProfile]);

  const updateHandler = async () => {
    try {
      const res = await axios.patch(
        URL + "/profile/edit",
        {
          firstName,
          lastName,
          gender,
          age,
          photoUrl,
          about,
          skills,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      toast.success("Profile Update Sucessfully !");
      setError(null);
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.error("Backend said:", err.response.data.error);
        setError(err.response.data.Error);
      } else {
        console.error("No response from server");
        setError("No response from server");
      }
    }
  };

  return (
    <div className="hero flex-1 ">
      <div className="hero-content px-5 flex-col items-start lg:flex-row border border-cyan-700 rounded-2xl w-full gap-[100px] bg-base-300">
        <div className="text-center lg:text-left w-1/2">
          <h2 className="text-5xl font-bold mb-10 text-center">
            Profile Update
          </h2>
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-full">
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset p-0 w-full">
                <legend className="fieldset-legend font18 mb-1 tracking-wide">
                  About
                </legend>
                <textarea
                  className="textarea font16 w-full"
                  placeholder="Bio"
                  value={about}
                  name="about"
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </fieldset>
            </div>
            {error ? <p className="text-red-600 pl-1">{error}</p> : ""}
            <button className="btn btn-primary" onClick={updateHandler}>
              Submit
            </button>
          </div>
        </div>
        <div className="card bg-base-200 shadow-sm w-1/2 flex items-center justify-center po">
          <FeedCard
            feedData={{
              firstName,
              lastName,
              gender,
              age,
              photoUrl,
              about,
              skills,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
