import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
	const dispatch = useDispatch();
	const [viewForm, setViewForm] = useState(false);

	// const [precioHora, setPrecioHora] = useState(0);
	// const [horas, setHoras] = useState(0);

	const [cantidadPago, setCantidadPago] = useState({
		precioHora: 0,
		horas: 0,
	});

	const { precioHora, horas } = cantidadPago;

	const handleAdd = () => {
		setViewForm(!viewForm);
	};

	const handleChange = (e) => {
		setCantidadPago({
			...cantidadPago,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = () => {
		const cantidadFinal = horas * precioHora;

		dispatch(crearRegistro(cantidadFinal));

		setCantidadPago({
			precioHora: 0,
			horas: 0,
		});
	};

	return (
		<div>
			<button onClick={handleAdd} className="btn btn-green">
				{!viewForm ? "Agregar" : "Cerrar"}
			</button>

			{viewForm && (
				<>
					<input
						type="text"
						placeholder="Ingresa cantidad por pago por hora"
						value={precioHora}
						onChange={handleChange}
						name="precioHora"
					/>

					<input
						type="text"
						placeholder="Ingrese cantidad de horas"
						value={horas}
						onChange={handleChange}
						name="horas"
					/>

					<button onClick={handleSave} className="btn purple">
						Calcular y guardar
					</button>
				</>
			)}
		</div>
	);
};

export default FormAdd;
