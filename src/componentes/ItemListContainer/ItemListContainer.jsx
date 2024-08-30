import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 style={{fontFamily:"sans-serif", color:"pink", display:"flex", alignItems:"center", justifyContent:"center"}}>{greeting}</h2>
    </div>

  )
}

export default ItemListContainer