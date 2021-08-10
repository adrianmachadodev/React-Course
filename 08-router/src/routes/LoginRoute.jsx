import React, { useContext } from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PublicRouter from "./PublicRouter";
import PrivateRoute from "./PrivateRoute";

const LoginRoute = () => {
	const { log } = useContext(AuthContext);

	return (
		<Router>
			<Switch>
				<PublicRouter path="/login" auth={log} component={LoginScreen} />
				<PrivateRoute path="/" auth={log} component={AppRouter} />
			</Switch>
		</Router>
	);
};

export default LoginRoute;
