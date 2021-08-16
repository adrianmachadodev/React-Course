// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
// import AppRouter from "./AppRouter";
// import PublicRouter from "./PublicRouter";

const AuthRouter = () => {
	return (
		<Switch>
			<Route exact path="/auth/login" component={LoginScreen} />
			<Route exact path="/auth/register" component={RegisterScreen} />

			<Redirect to="/auth/login" />
		</Switch>
	);
};

export default AuthRouter;
