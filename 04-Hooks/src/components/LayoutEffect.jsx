import React, { useState, useLayoutEffect, useEffect } from "react";

const LayoutEffect = () => {
	const [data, setData] = useState([]);

	const efecto = data.length;

	const newData = [
		{
			name: "Adrian",
			email: "adrian@gmail.com",
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setData(newData);
		}, 5000);
	}, [newData]);

	// useLayoutEffect(() => {
	// 	setTimeout(() => {
	// 		setData(newData);
	// 	});
	// }, 5000);

	return (
		<>
			<h1>useLayoutEffect</h1>
			<hr />
			<p>Valores {efecto}</p>
		</>
	);
};

export default LayoutEffect;
