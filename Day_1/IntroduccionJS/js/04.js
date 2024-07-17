                    // objetos
// un objeto es una coleccion de propiedades
// las propiedades son una asociacion de key-value

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// console.table(producto);
// console.log(producto.nombre);

// destructuring

const {nombre, precio, disponible} = producto;


// object literal enhancement

const banda = "Metallica";
const genero = "Heavy Metal";

const metallica = {
    banda, 
    genero};

console.log(metallica);