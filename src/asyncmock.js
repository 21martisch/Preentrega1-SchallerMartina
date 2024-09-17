const misProductos = [
    { id: "1", nombre: "Acolchado", stock: 20, precio: 75000, img: "../productsImg/habitacion/acolchado.webp", idCat: "habitacion" },
    { id: "2", nombre: "Juego de sabanas", stock: 10, precio: 56900, img: "../productsImg/habitacion/sabana.webp", idCat:"habitacion" },
    { id: "3", nombre: "Alfombra de baño", stock: 30, precio: 9650, img: "../productsImg/baño/alfombra-baño.webp", idCat:"baño" }, 
    { id: "4", nombre: "Set de baño", stock: 7, precio: 15000, img: "../productsImg/baño/setBaño.webp", idCat:"baño" },
    { id: "5", nombre: "Bateria cocina", stock: 3, precio: 185000, img: "../productsImg/cocina/bateriaCocina.webp", idCat:"cocina" },
    { id: "6", nombre: "Set x6 platos playos", stock: 6, precio: 64000, img: "../productsImg/cocina/setPlatosPlayos.webp", idCat:"cocina" },
    { id: "7", nombre: "Organizador acrilico", stock: 15, precio: 4800, img: "../productsImg/decoracion/organizador.webp", idCat:"decoracion" },
    { id: "8", nombre: "Vasija 3D", stock: 25, precio: 20000, img: "../productsImg/decoracion/vasija3d.webp", idCat:"decoracion" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}