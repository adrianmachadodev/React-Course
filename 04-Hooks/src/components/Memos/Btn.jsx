import React from "react";

const Btn = React.memo(({ add }) => {
	console.log("Add se agrego");
	return <button onClick={add}>+1</button>;
});

export default Btn;
