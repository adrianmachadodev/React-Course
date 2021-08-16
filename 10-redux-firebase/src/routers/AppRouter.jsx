import React, { useEffect, useState } from "react";
import { Login } from "../actions/auth";
import { firebase } from "../farebase/config-firebase";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppScreen from "../pages/AppScreen";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import { useDispatch } from "react-redux";

import PublicRouter from "./PublicRouter";
import { loadData } from "../helpers/loadData";
import { leerRegistros } from "../actions/nomina";

const AppRouter = () => {
	const dispatch = useDispatch();

	const [log, setLog] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(Login(user.uid, user.displayName));
				setLog(true);

				const nominaData = await loadData(user.uid);

				dispatch(leerRegistros(nominaData));
			} else {
				setLog(false);
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<PublicRouter path="/auth" component={AuthRouter} log={log} />
				<PrivateRouter exact path="/" log={log} component={AppScreen} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
