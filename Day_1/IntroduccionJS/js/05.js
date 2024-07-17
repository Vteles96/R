// objetos manipulacion

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//prevenir que un objeto sea modificado 
Object.freeze(producto);

//solo se puede modificar si se congela el objeto
Object.seal(producto);


//reescribir un valor
producto.disponible = false;

//agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//eliminar propiedades
delete producto.precio;

console.log(producto);