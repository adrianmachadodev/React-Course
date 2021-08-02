import React from "react";

const Footer = () => {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<span className="text-center">
				{" "}
				Adrián Machado - &copy; {new Date().getFullYear()}{" "}
			</span>
		</nav>
	);
};

export default Footer;
