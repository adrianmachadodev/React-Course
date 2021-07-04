import { useState } from "react";


const contador = ({inicial, factor}) => {

    const [contador, setcontador] = useState(inicial);

    const aumentar = () => {
        setcontador((actual) => actual + factor);
    };

    const disminuir = () =>{
        setcontador(contador - factor);
    }

    return (
        <div>
            <h1>contador {contador} </h1>
            <hr />

            <button onClick={aumentar}> aumentar</button>
            <button onClick={disminuir}> disminuir</button>
        </div>
    );
};


export default contador;
