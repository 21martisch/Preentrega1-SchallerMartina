import React from 'react'
import { BsCart3 } from "react-icons/bs";
import './CardWidget.css'

const CartWidget = () => {
  return (

    <div>
        <BsCart3 className='icon-carrito'></BsCart3>
        <strong>2</strong>
    </div>
  )
}

export default CartWidget