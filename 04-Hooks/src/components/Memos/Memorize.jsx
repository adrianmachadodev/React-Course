import { useMemorizeApp } from "../../hooks/useMemorizeApp";
import Btn from "./Btn";
import Datos from "./Datos";

const Memorize = () => {
	const [counter, view, pesadoMemo, add, hide] = useMemorizeApp();

	// const handleClick = () => {
	// 	setCouter(counter + 1);
	// };
	return (
		<>
			<h1>
				Memorizes: <Datos value={counter} />
			</h1>
			<hr />

			<pre>{pesadoMemo}</pre>

			<Btn add={add} />
			<button onClick={hide}>ver/quitar</button>
		</>
	);
};

export default Memorize;
