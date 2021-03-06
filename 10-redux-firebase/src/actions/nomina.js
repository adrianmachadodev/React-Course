import { useDispatch } from "react-redux";
import { db } from "../farebase/config-firebase";
import { types } from "../types/authTypes";

export const crearRegistro = (pago) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const datos = {
			fecha: new Date().toLocaleDateString(),
			pago,
		};

		const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);

		const id = await referencia.id;

		const newData = {
			...datos,
			id,
		};

		dispatch(crear(newData));
	};
};

export const leerRegistros = (data) => {
	return {
		type: types.nominaRead,
		payload: data,
	};
};

export const crear = (data) => {
	return {
		type: types.nominaAdd,
		payload: data,
	};
};

export const borrarRegistro = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		await db.doc(`${uid}/nominas/nomina/${id}`).delete();

		dispatch(borrar(id));
	};
};
//db.collection(``);

export const borrar = (id) => {
	return {
		type: types.nominaDelete,
		payload: id,
	};
};

export const limpiar = () => {
	return {
		type: types.nominaClean,
	};
};
