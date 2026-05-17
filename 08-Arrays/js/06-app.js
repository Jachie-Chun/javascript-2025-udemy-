// crear un arreglo con el spred operator
 
const carrito = [];

const producto = {
    nombre: "Cocaina pura",
    precio: 1000
}

const producto2 = {
    nombre: "Marihuana de la buena",
    precio: 500
}

const producto3 = {
    nombre: "Pasta base de cocaina",
    precio: 10
}

let resultado;  // 

resultado = [...carrito, producto]; // Agrega el producto al carrito utilizando el spread operator


console.log(resultado); // Salida: [{ nombre: 'Cocaina pura', precio: 1000 }]

// spred operator  es una forma de copiar un arreglo o un objeto sin modificar el original. En este caso, se crea un nuevo arreglo que contiene los elementos del carrito original y el nuevo producto. Esto es útil para mantener la inmutabilidad de los datos y evitar efectos secundarios no deseados.

