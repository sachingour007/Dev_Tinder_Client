import React, { useEffect } from "react";
import axios from "axios";
import { URL } from "../constant/hpCardData";
import { useDispatch, useSelector } from "react-redux";
import FeedCard from "./FeedCard";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data?.users));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(feedData);

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feedData && (
      <div className=" flex justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] flex-1 ">
        <div className="flex items-center justify-center">
          <FeedCard feedData={feedData[0]} />
        </div>
      </div>
    )
  );
};

export default Feed;
