import React, { useEffect, useState } from "react";

const MultiSelectComponent = ({ option, skills, setSkills }) => {
  const [open, setOpen] = useState(false);

  const selectHandler = (val) => {
    const skillArr = skills.includes(val)
      ? skills.filter((item) => item !== val)
      : [...skills, val];

    setSkills(skillArr);
  };

  return (
    <div className="relative">
      <div
        className="input py-5 w-full flex justify-between items-center cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <div className="w-[98%]">
          {skills.length <= 0
            ? "Please Select Skills"
            : skills.map((s) => (
                <span key={s} className="border py-1 px-1.5 mr-1.5 rounded-md">
                  {s}
                </span>
              ))}
        </div>
        <div className="">
          <svg
            fill="#ffffff"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 47.255 47.255"
            transform="rotate(90)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z" />{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      {open && (
        <div className="border flex flex-col p-1 max-h-48 overflow-auto absolute w-full bg-base-100 z-10 ">
          {option.map((item) => (
            <label
              className="label p-1"
              key={item.value}
              onChange={() => selectHandler(item.label)}
            >
              <input
                type="checkbox"
                className="checkbox"
                checked={skills.includes(item.label)}
              />
              {item.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectComponent;
