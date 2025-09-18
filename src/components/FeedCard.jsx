import React from "react";

const FeedCard = ({ feedData, feedHandler, isFeed }) => {
  const { _id, firstName, lastName, photoUrl, about, age, gender, skills } =
    feedData;

  return (
    <div className="card bg-base-200 shadow-sm overflow-hidden  w-full">
      <div className="relative flex items-center justify-center overflow-hidden">
        <img src={photoUrl} alt="photo" />
      </div>
      <div className="card-body w-full p-3.5">
        <div className="flex items-center gap-2">
          <h2 className="card-title text-[20px] xl:font36 font-medium tracking-wide capitalize">
            {firstName + " " + lastName}
          </h2>
          <div className="flex gap-1 capitalize font-semibold">
            <span className="font16">{age + " " + gender?.charAt(0)}</span>
          </div>
        </div>
        <p className="font16 font-medium tracking-wide">{about}</p>
        <div className="flex gap-2 mb-2.5">
          <p className="font16 font-semibold tracking-wider w-[55px]">
            Skills :
          </p>
          <ul className="flex flex-wrap gap-2 w-[calc(100%-55px)]">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow-sm uppercase tracking-wide"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {isFeed ? (
          <div className="card-actions justify-end ">
            <ul className="flex items-center justify-evenly w-full">
              <li
                className="btnLiFeed"
                onClick={() => feedHandler("ignored", _id)}
              >
                <svg
                  width="34px"
                  height="34px"
                  viewBox="-2 -2 29.00 29.00"
                  version="1.1"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <defs> </defs>
                    <g
                      id="Page-1"
                      stroke-width="0.1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-469.000000, -1041.000000)"
                        fill="#F82A96"
                      >
                        <path
                          d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                          id="cross"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
              <li
                className="btnLiFeed"
                onClick={() => feedHandler("interested", _id)}
              >
                <svg
                  width="34px"
                  height="34px"
                  viewBox="-0.64 -0.64 17.28 17.28"
                  fill="none"
                  stroke="#000000"
                  stroke-width="0.00016"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.064"
                  >
                    <path
                      d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                      fill="#75CE37"
                    />
                  </g>

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                      fill="#75CE37"
                    />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FeedCard;
