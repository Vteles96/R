//Destructuring de 2 o más elementos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        ciudad: "Guadalajara",
        pais: "Mexico",
    },
}

const { nombre } = producto;

// con los : renonmbramos la variable, con los {} accedemos a la propiedad
const { nombre: nombreCliente, direccion: {ciudad} } = cliente;

console.log(ciudad);