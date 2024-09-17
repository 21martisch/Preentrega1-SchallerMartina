import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategorias } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams()
  useEffect(()=>{
    const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;
    funcionProductos(idCategoria)
        .then(res => setProductos(res))
  }, [idCategoria])

  return (
    <div>
        <h2 style={{fontFamily:"sans-serif", color:"#776e79", display:"flex", alignItems:"center", justifyContent:"center", marginTop:'20px'}}>Todos los productos</h2>
        <ItemList productos={productos}></ItemList>
    </div>

  )
}

export default ItemListContainer