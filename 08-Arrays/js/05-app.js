// Añadir nuevos elementos al fin o inicio de un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const semana_1 = {
    nombre: 'Lunes',
    año: 2024
}

const semana_2 = {
    nombre: 'Martes',
    año: 2024
}


// push()---> Añade un nuevo elemento al final del array
meses.push('Julio'); // Añade 'Julio' al final del array meses  

// el objeto semana_1 se añade como un nuevo elemento al final del array meses
// semana_1 se añade como un nuevo elemento al final del array meses
meses.push(semana_1);  // salida es un array con los meses y el objeto semana_1 al final

console.log(meses);  // Salida: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', { nombre: 'Lunes', año: 2024 }]

// ============================================================================================

// unshift()---> Añade un nuevo elemento al inicio del array
meses.unshift('Diciembre'); // Añade 'Diciembre' al inicio del array meses

meses.unshift(semana_2); // Añade el objeto semana_2 al inicio del array meses

console.log(meses); // Salida: [{ nombre: 'Martes', año: 2024 }, 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', { nombre: 'Lunes', año: 2024 }]

// El método push() y unshift() modifican el array original meses, añadiendo nuevos elementos al final o al inicio respectivamente.


