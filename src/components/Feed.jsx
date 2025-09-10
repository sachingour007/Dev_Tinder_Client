import { useEffect } from "react";
import axios from "axios";
import { URL } from "../constant/hpCardData";
import { useDispatch, useSelector } from "react-redux";
import FeedCard from "./FeedCard";
import { addFeed, removeFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data.users));
    } catch (error) {
      console.log(error);
    }
  };

  const feedHandler = async (status, toUserId) => {
    try {
      const res = await axios.post(
        URL + `/request/send/${status}/${toUserId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(toUserId));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feedData === null) {
    return <p className="text-center">Loading feed...</p>;
  }

  return (
    <div className=" flex justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] flex-1 ">
      <div className="flex items-center justify-center relative w-1/4">
        {feedData && feedData.length > 0 ? (
          feedData.map((card) => (
            <div key={card._id} className="absolute w-full">
              {" "}
              <FeedCard
                feedData={card}
                feedHandler={feedHandler}
                isFeed={true}
              />{" "}
            </div>
          ))
        ) : (
          <p className="text-center font18">No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
