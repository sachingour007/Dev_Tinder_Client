import React from "react";

const HompageCard = ({ imgUrl, heading, para }) => {
  return (
    <div className="card bg-base-100 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] shadow-sm border border-base-300 hover:bg-base-200 transition">
      <figure className="px-3.5 pt-3.5 md:px-8 md:pt7">
        <img src={imgUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title font24  font-semibold">{heading}</h2>
        <p className="font18">{para}</p>
      </div>
    </div>
  );
};

export default HompageCard;
