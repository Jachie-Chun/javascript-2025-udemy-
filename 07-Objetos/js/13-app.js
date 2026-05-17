// Object.keys(), Object.values() y Object.entries();


const producto = {
    nombre: 'Monitor 20 pulgadass',
    precio : 300,
    disponible : true
}

console.log(Object.keys(producto)); // Devuelve un array con las llaves del objeto
console.log(Object.values(producto)); // Devuelve un array con los valores del objeto
console.log(Object.entries(producto)); // Devuelve un array con las llaves y valores del objeto 


// entonces, si queremos recorrer un objeto, podemos usar Object.entries() para obtener un array de pares clave-valor, y luego usar un bucle for...of para iterar sobre ese array. Por ejemplo:

for (let [key, value] of Object.entries(producto)) {
    console.log(`${key}: ${value}`);
}
// Esto imprimirá cada clave y su valor correspondiente en el objeto producto.