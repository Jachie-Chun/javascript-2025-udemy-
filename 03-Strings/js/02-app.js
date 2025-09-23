// METODOS - includes y length

const producto = 'Monitor LG XXL';
console.log(producto);  // Monitor LG XXL

// length
// concer la cantidad de letras  de la cadena de texto
console.log(producto.length);  // 14 

// indexOf
/**
Para Strings:
-Se utliza para encontrar la posicion de una subcadena dentro de otra cadena.
-Puedes indicar un segundo argumento(un indice) para empezar la busqueda  desde una posicion especifica.
-Ejemplo -- >"hola mundo".indexOf("mundo") --> 5

Para Arrays:
-Se utliza para encontrar la posicion de un elemento dentro de un array.
-Si el elemento se encutra multiples veces, solo devuelve la posicion de la primera ocurrencia.
-Ejemplo --> [10, 20, 30].indexOf(20) --> 1

*/
console.log(producto.indexOf('Tablet'));  // -1

// includes
/**
-Este es un metodo de los objetos "string" y "array" en js que se usa para buscar un elemento.

*/
console.log(producto.includes('Tablet'));   // false
console.log(producto.includes('Monitor'));  // true

