// unir 2 o mas objetos
//spread operator

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: "Juan",
    premium: true,

}
 //une un objeto con otro
const carrito ={
    cantidad : 20,
    ...producto  
}

// une 2 objetos por separados en 1 objetos
const nuevo_objeto = {
    producto,
    cliente
}

// une 2 objetos en 1 solo, reescribe las variables
const nuevo_objeto_2 = {
    ...producto,
    ...cliente
}

// object assign
const nuevo_objeto_3 = Object.assign(producto,cliente);

console.log(carrito);
console.log(nuevo_objeto);
console.log(nuevo_objeto_2);
console.log(nuevo_objeto_3);