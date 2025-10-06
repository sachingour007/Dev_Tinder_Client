import axios from "axios";
import React, { useEffect } from "react";
import { URL } from "../constant/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice.js";
import RequestCard from "./RequestCard.jsx";

const AllConnections = () => {
	const dispatch = useDispatch();
	const connectionUsers = useSelector((store) => store.connection);
	console.log(connectionUsers);

	const getConnections = async () => {
		const res = await axios.get(URL + "/user/all/connections", {
			withCredentials: true,
		});

		dispatch(addConnections(res.data.requestUserDetails));
	};

	useEffect(() => {
		getConnections();
	}, []);

	if (connectionUsers === null) {
		return;
	}

	return (
		<section className=" flex-1">
			<div className="text-center my-10">
				<h2 className="font36 uppercase font-semibold tracking-wider mx-auto">
					{" "}
					All Connections{" "}
				</h2>
			</div>
			{connectionUsers.length === 0 ? (
				<p className="text-center font18">No Data Found</p>
			) : (
				<div className="flex flex-col items-center ">
					{connectionUsers.map((card) => (
						<RequestCard key={card._id} card={card} isConnection={true} />
					))}
				</div>
			)}
		</section>
	);
};

export default AllConnections;
