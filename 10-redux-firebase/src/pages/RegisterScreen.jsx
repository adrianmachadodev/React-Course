import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		email: "",
		password: "",
		password2: "",
		username: "",
	});

	const { email, username, password, password2 } = data;

	const handleChange = (e) => {
		const value = e.target.value;

		setData({
			...data,
			[e.target.name]: value,
		});
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (email.trim() === "" || !email.trim().includes("@")) {
			return;
		}

		if (username.trim().length < 2) {
			return;
		}

		if (password.trim().length < 6) {
			return;
		} else {
			if (password.trim() !== password2.trim()) {
				return;
			}
		}

		dispatch(register(email, password, username));
	};

	return (
		<div className="container">
			<h3>Login</h3>
			<hr />

			<div className="row container">
				<form onSubmit={handleRegister} className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">email</i>
							<input
								onChange={handleChange}
								value={email}
								id="icon_prefix1"
								className="materialize-textarea"
								type="email"
								name="email"
							/>
							<label htmlFor="icon_prefix1">Email</label>
						</div>

						<div className="input-field col s12">
							<i className="material-icons prefix">assignment_ind</i>
							<input
								onChange={handleChange}
								value={username}
								id="icon_prefix2"
								className="materialize-textarea"
								type="text"
								name="username"
							/>
							<label htmlFor="icon_prefix2">Username</label>
						</div>

						<div className="input-field col s12">
							<i className="material-icons prefix">vpn_key</i>
							<input
								onChange={handleChange}
								value={password}
								id="icon_prefix3"
								className="materialize-textarea"
								name="password"
								type="password"
							/>
							<label htmlFor="icon_prefix3">Password</label>
						</div>
					</div>

					<div className="input-field col s12">
						<i className="material-icons prefix">vpn_key</i>
						<input
							onChange={handleChange}
							value={password2}
							id="icon_prefix4"
							className="materialize-textarea"
							type="password"
							name="password2"
						/>
						<label htmlFor="icon_prefix4">Confirm Password</label>
					</div>

					<button
						className=" waves-effect waves-light btn orange "
						type="submit"
					>
						Registrarse
					</button>
					<hr />
					<Link to="/auth/Login">Login into account</Link>
				</form>
			</div>
		</div>
	);
};

export default RegisterScreen;
