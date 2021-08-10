import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../Components/Navbar";

const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const ManScreen = lazy(() => import("../pages/ManScreen"));
const Search = lazy(() => import("../pages/Search"));
const WomanScreen = lazy(() => import("../pages/WomanScreen"));

const AppRouter = () => {
	return (
		<>
			<Navbar />
			{/* <Suspense fallback={<h1 className="text-center">Loading ...</h1>}> */}
			<Suspense
				fallback={
					<h1 className="spinner-border text-primary mt-3" role="status">
						<span className="visually-hidden"></span>
					</h1>
				}
			>
				<Switch>
					<Route exact path="/man" component={ManScreen} />
					<Route exact path="/woman" component={WomanScreen} />
					<Route exact path="/search" component={Search} />

					<Route exact path="/character/:id" component={CharacterScreen} />
					<Redirect to="/login" />
				</Switch>
			</Suspense>
		</>
	);
};

export default AppRouter;
