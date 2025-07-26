import React from "react";

const HompageCard = ({ imgUrl, heading, para }) => {
  return (
    <div className="card bg-base-100 w-1/3 shadow-sm border border-base-300 hover:bg-base-200 transition">
      <figure className="px-8 pt-7">
        <img src={imgUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center py-5 px-7 ">
        <h2 className="card-title font20">{heading}</h2>
        <p className="font16">{para}</p>
      </div>
    </div>
  );
};

export default HompageCard;
