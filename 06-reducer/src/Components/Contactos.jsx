import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../reducer/ContactosReducer";
import Formulario from "./Formulario";
import TablaContactos from "./TablaContactos";

const init = () => {
	const Contactos = localStorage.getItem("Contactos");

	return Contactos ? JSON.parse(Contactos) : [];
};

const Contactos = () => {
	// const [state, dispatch] = useReducer(ContactosReducer, []);

	const [state, dispatch] = useReducer(ContactosReducer, [], init);

	useEffect(() => {
		localStorage.setItem("Contactos", JSON.stringify(state));
	}, [state]);

	const [formView, setFormView] = useState(false);

	return (
		<div className="container mt-3">
			<button
				onClick={() => setFormView(!formView)}
				className="btn btn-success"
			>
				{!formView ? "+ Agregar Contacto" : "- Cerra formulario"}
			</button>
			{formView && <Formulario dispatch={dispatch} />}
			<TablaContactos contactos={state} dispatch={dispatch} />
		</div>
	);
};

export default Contactos;
