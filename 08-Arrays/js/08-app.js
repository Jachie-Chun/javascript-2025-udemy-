// destructuring arrays 
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo] = numeros; // remplaza const primero = numeros[0]; const segundo = numeros[1]; y se llama destructuring porque se desestructura el array para obtener solo los elementos que nos interesan, en este caso el primero y el segundo elemento del array
console.log(primero);   // 10
const [ , , tercero] = numeros; // remplaza const tercero = numeros[2]; y se llama destructuring porque se desestructura el array para obtener solo el elemento que nos interesa, en este caso el tercer elemento del array
console.log(tercero);   // 30  
const [primero, ...terceros] = numeros; // remplaza const primero = numeros[0]; const terceros = numeros.slice(1); y se llama destructuring porque se desestructura el array para obtener solo el primer elemento y el resto de los elementos del array
console.log(primero);   // 10
console.log(terceros);   // [20, 30, 40, 50]


// destructuring objects
const producto = {
    nombre: "Monitor LG",
    precio: 200,
    disponible: true
}

const { nombre } = producto;    // remplaza const nombre = producto.nombre; y se llama destructuring porque se desestructura el objeto para obtener solo la propiedad que nos interesa, en este caso el nombre del producto
console.log(nombre); // Monitor LG

