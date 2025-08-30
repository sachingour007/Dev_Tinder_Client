import React from "react";

const RequestCard = ({ card, isConnection, requestHandler, requedId }) => {
  const { _id, firstName, lastName, photoUrl, about, age, gender } = card;
  return (
    <div className="card card-side bg-base-300 shadow-sm flex items-center border max-w-1/2 min-w-1/3 p-2.5 gap-3.5 mb-3.5 last:mb-0">
      <div className="w-20 h-20 rounded-full overflow-hidden ">
        <img src={photoUrl} alt="user photo" />
      </div>
      <div
        className={`card-body w-[calc(100%-120px)] p-0 flex flex-row  gap-3.5 ${
          isConnection ? "" : "justify-between"
        }`}
      >
        <div>
          <div className="flex items-center gap-2">
            <h2 className="card-title font28 font-medium tracking-wide capitalize">
              {firstName + " " + lastName}
            </h2>
            <div className="flex gap-1 capitalize font-semibold">
              <span className="font16">{age + " " + gender.charAt(0)}</span>
            </div>
          </div>
          <p>{about}</p>
        </div>
        {isConnection ? (
          ""
        ) : (
          <div className="flex gap-5 items-center">
            <button
              className="btn btn-primary font16 tracking-wide leading-0.5"
              onClick={() => requestHandler("accepted", requedId)}
            >
              Accept
            </button>
            <button
              className="btn btn-error text-white font16 tracking-wide leading-0.5"
              onClick={() => requestHandler("rejected", requedId)}
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;
