import { useEffect } from "react";
import axios from "axios";
import { URL } from "../constant/constant.js";
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
		<div className=" flex justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] flex-1 py-10">
			<div className="flex items-center justify-center relative max-w-4/5 xl:max-w-1/4 ">
				{feedData && feedData.length > 0 ? (
					<div className="w-full">
						<FeedCard
							feedData={feedData[0]}
							feedHandler={feedHandler}
							isFeed={true}
						/>
					</div>
				) : (
					<p className="text-center font18">No Data Found</p>
				)}
			</div>
		</div>
	);
};

export default Feed;
