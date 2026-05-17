// Elimar elementos con Splice() 
// El método splice() se utiliza para eliminar elementos de un array, y también puede ser utilizado para agregar nuevos elementos en su lugar. La sintaxis básica es: array.splice(indice, cantidad de elementos a eliminar, elemento1, elemento2, ...)

const productos = [];

//definir productor
const caja_00 = {
    nombre: "Marihuna Gelato",
    precio: 500
}

const producto_02 = {
    nombre: "Marihuana Kushh",
    precio: 400
}

console.log(productos);

// Agregar productos al array
productos.push(caja_00);
productos.push(producto_02);

console.log(productos);  // [ { nombre: 'Marihuna Gelato', precio: 500 }, { nombre: 'Marihuana Kushh', precio: 400 } ]

// Eliminar un producto del array
productos.splice(0, 1); // Elimina el elemento en el indice 0, y solo elimina 1 elemento
console.log(productos);

// splice funciona de la siguiente manera: splice(indice, cantidad de elementos a eliminar, elemento1, elemento2, ...)
// Si queremos eliminar un elemento y agregar otro en su lugar, podemos hacerlo así:
productos.splice(0, 1, {
    nombre: "Cocaina pura",
    precio: 1000
});
console.log(productos); // [ { nombre: 'Cocaina pura', precio: 1000 } ]

