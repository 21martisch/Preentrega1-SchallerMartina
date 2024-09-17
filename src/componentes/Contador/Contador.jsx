import React, { useState } from 'react'
import './Contador.css'

const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);
  
    const sumarContador = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };
  
    const restarContador = () => {
      if (contador > inicial) {
        setContador(contador - 1);
      }
    };
  
    return (
      <>
        <div className="contador-container">
          <button className="contador-btn" onClick={restarContador}> - </button>
          <strong className="contador-numero">{contador}</strong>
          <button className="contador-btn" onClick={sumarContador}> + </button>
        </div>
        <button className="AgregarCarritoBtn" onClick={() => funcionAgregar(contador)}> Agregar al carrito</button>
      </>
    );
  };
  
  export default Contador;