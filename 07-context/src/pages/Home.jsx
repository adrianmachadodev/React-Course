import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { dataUsers } from "../helpers/dataUsers";

const Home = () => {
	const { user, setUser } = useContext(UserContext);

	const handleLogin = () => {
		setUser(dataUsers);
	};

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<div className="container text-center mt-5">
			<h1>Home screen</h1>

			{!user ? (
				<button className="btn btn-primary" onClick={handleLogin}>
					Login
				</button>
			) : (
				<button className="btn btn-danger" onClick={handleLogout}>
					Logout
				</button>
			)}
		</div>
	);
};

export default Home;
