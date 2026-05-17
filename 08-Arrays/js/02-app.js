// Acceder a valores de un array
const numeros = [10, 20, 30, 40, 50];
console.table(numeros); // Muestra el array en formato de tabla
console.log(numeros); // [10, 20, 30, 40, 50]

// como acceder a un valor del array
console.log(numeros[2]);  // 30
console.log(numeros[0]); // 10
console.log(numeros[20]);  // undefined

// un array dentro de otro array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', ['Lunes', 'Martes']];
console.log(meses[5]); // ['Lunes', 'Martes']
console.log(meses[5][0]); // Lunes es 0

