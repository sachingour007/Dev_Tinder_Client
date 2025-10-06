import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Links, useNavigate } from "react-router-dom";
import { URL } from "../constant/constant.js";
import { removeUser } from "../utils/userSlice";
import { cleanFeed } from "../utils/feedSlice";

function Header() {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	const dispatch = useDispatch();

	const logoutHandler = async () => {
		try {
			await axios.post(URL + "/logout", {}, { withCredentials: true });
			dispatch(removeUser());
			dispatch(cleanFeed());
			return navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const logoHandler = () => {
		if (user === null) {
			navigate("/");
		} else {
			navigate("/feed");
		}
	};

	return (
		<div className="navbar bg-neutral shadow-sm md:px-5 flex-none">
			<div className="flex-1">
				<div
					className="btn btn-ghost text-[18px] md:text-xl px-2 md:px-4"
					onClick={logoHandler}
				>
					👨‍💻 DevTinder
				</div>
			</div>
			{user ? (
				<div className="flex items-center">
					<p className="mr-2.5 capitalize font-semibold">
						Welcome {user.firstName}
					</p>
					<div className="flex gap-2">
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img alt="User Photo" src={user.photoUrl} />
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								<li>
									<Link to={"/profile"} className="justify-between">
										Profile
									</Link>
								</li>
								<li>
									<Link to={"/connections"}>connections</Link>
								</li>
								<li>
									<Link to={"/requests"}>Requests</Link>
								</li>
								<li onClick={logoutHandler}>
									<Link>Logout</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : (
				<Link to={"/login"} className="btn btn-outline btn-primary">
					Login
				</Link>
			)}
		</div>
	);
}

export default Header;
