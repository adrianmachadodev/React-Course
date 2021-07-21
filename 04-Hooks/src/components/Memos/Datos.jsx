import React from "react";

const Datos = React.memo(({ value }) => {
	return <p>{value}</p>;
});

export default Datos;
