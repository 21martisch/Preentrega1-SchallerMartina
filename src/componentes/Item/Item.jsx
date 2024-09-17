import React from 'react'
import {Link} from 'react-router-dom'
import './item.css'

const Item =({id, nombre, precio, img})=> {
  return (
    <div className='cardProducto'>
      <div className='cardImagen'>
        <img src={img} alt={nombre} />
      </div>
      <div className='cardContent'>
        <h3 className='cardTitle'>{nombre}</h3>
        <p className='cardPrice'>${precio}</p>
        <button><Link to={`/item/${id}`} style={{textDecorationLine:'none', color:'white'}} >Ver Detalles</Link></button>
      </div>
    </div>
  )
}

export default Item