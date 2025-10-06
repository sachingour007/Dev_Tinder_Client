import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { URL } from "../constant/constant.js";
import { ToastContainer, toast } from "react-toastify";

const Body = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userData = useSelector((store) => store.user);

	const fetchUser = async () => {
		if (userData) return;
		try {
			const res = await axios.get(URL + "/profile/view", {
				withCredentials: true,
			});
			dispatch(addUser(res.data));
		} catch (error) {
			if (error.response?.status === 401) {
				dispatch(removeUser());
				navigate("/");
			}
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [userData, dispatch]);

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Outlet />
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default Body;
