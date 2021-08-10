import React from "react";
import Card from "../Components/Card";
import { Characters } from "../models/Characters";

const WomanScreen = () => {
	const womans = Characters.filter((character) => character.type == "m");

	return (
		<div>
			<h1>Womans</h1>
			<hr />

			<div className="row">
				{womans.map((womans) => (
					<Card key={womans.id} {...womans} />
				))}
			</div>
		</div>
	);
};

export default WomanScreen;
