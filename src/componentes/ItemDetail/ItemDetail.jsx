import React, { useState } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregado:" + cantidad);
  };

  return (
    <div className='productDetail'>
      
        <img src={img} alt={nombre} />
      
      <div className='productInfo'>
        <h1>{nombre}</h1>
        <p className="precio">${precio}</p>

        <div className="pago-opcion">
          <p>6 CUOTAS SIN INTERÉS DE <span className="color">${(precio / 6).toFixed(2)}</span></p>
          <p><strong>10% de descuento</strong> pagando con Transferencia bancaria</p>
          <a href="#">Ver medios de pago</a>
        </div>

        {
          agregarCantidad > 0
            ? <Link to='/' className="comprarBtn">Comprar</Link>
            : <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        }
      </div>
    </div>
  );
};

export default ItemDetail;
