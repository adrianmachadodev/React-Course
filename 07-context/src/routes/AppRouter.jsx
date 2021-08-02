import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/About" component={About} />
				<Route path="/" component={NotFound} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
