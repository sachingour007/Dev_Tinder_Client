import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import axios from "axios";
import { URL } from "../constant/hpCardData";
import RequestCard from "./RequestCard";

const AllRequest = () => {
  const dispatch = useDispatch();
  const requestUsers = useSelector((store) => store.request);
  console.log(requestUsers);

  const getRequests = async () => {
    const res = await axios.get(URL + "/user/requests/received", {
      withCredentials: true,
    });
    console.log(res.data);

    dispatch(addRequest(res.data.connectionRequests));
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (requestUsers === null) {
    return;
  }
  return (
    <section className=" flex-1">
      <div className="text-center my-10">
        <h2 className="font36 uppercase font-semibold tracking-wider mx-auto">
          All Requests
        </h2>
      </div>
      {requestUsers.length === 0 ? (
        <p className="text-center font18">No Data Found</p>
      ) : (
        <div className="flex flex-col items-center ">
          {requestUsers.map((card) => {
            const { fromUserId } = card;
            return (
              <RequestCard
                key={card._id}
                card={fromUserId}
                isConnection={false}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default AllRequest;
