import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import axios from "axios";
import { URL } from "../constant/constant.js";
import RequestCard from "./RequestCard";

const AllRequest = () => {
	const dispatch = useDispatch();
	const requestUsers = useSelector((store) => store.request);
	console.log(requestUsers);

	const getRequests = async () => {
		try {
			const res = await axios.get(URL + "/user/requests/received", {
				withCredentials: true,
			});
			console.log(res.data.connectionRequests);

			dispatch(addRequest(res.data.connectionRequests));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getRequests();
	}, []);

	const requestHandler = async (status, _id) => {
		try {
			const res = await axios.post(
				URL + `/request/review/${status}/${_id}`,
				{},
				{
					withCredentials: true,
				}
			);
			dispatch(removeRequest(_id));
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

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
								requestHandler={requestHandler}
								requedId={card._id}
							/>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default AllRequest;
