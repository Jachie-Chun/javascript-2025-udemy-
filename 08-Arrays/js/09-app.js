// forEach es un metodo de los arrays que nos permite iterar sobre ellos y ejecutar una funcion por cada elemento del array, es decir, es una forma de recorrer un array sin necesidad de usar un bucle "for o while", es una forma mas sencilla y legible de recorrer un array.

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Television 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
]

carrito.forEach( producto => console.log(producto.nombre) ); // forEach recibe una funcion como parametro, esa funcion se ejecuta por cada elemento del array, en este caso se ejecuta por cada producto del carrito y se imprime el nombre del producto en la consola

// sintaxis de forEach
// array.forEach( (elemento, indice, array) => {
//     // codigo a ejecutar por cada elemento del array
// } );

// elemento: es el elemento actual del array que se esta iterando, en este caso es cada producto del carrito
// forEach( elemento => {})

// indice: es el indice del elemento actual del array, es decir, la posicion del elemento en el array
// forEach( (elemento, indice) => {})

// array: es el array completo que se esta iterando, en este caso es el carrito completo
// forEach( (elemento, indice, array) => {})

// ejemplo real de forEach


const transacciones = [
  { id: "TX001", monto: 150, estado: "completado" },
  { id: "TX002", monto: 3000, estado: "pendiente" }, // Alerta: monto alto
  { id: "TX003", monto: 45, estado: "completado" }
];

transacciones.forEach((pago, index, listaCompleta) => {
  // 1. Uso de 'pago' (el elemento actual)
  let mensaje = `Procesando ID: ${pago.id} por $${pago.monto}.`;

  // 2. Uso de 'index' (el índice)
  // Lo usamos para dar un feedback visual de la posición
  console.log(`[Registro #${index + 1} de ${listaCompleta.length}]`);

  // 3. Uso de 'listaCompleta' (el array original)
  // Supongamos que queremos saber si hay algún riesgo en toda la tanda
  const hayMontosAltos = listaCompleta.some(t => t.monto > 2000);
  
  if (pago.monto > 2000) {
    console.warn(`${mensaje} -> ¡ALERTA! Requiere revisión manual.`);
  } else {
    console.log(`${mensaje} -> Estado: ${pago.estado}`);
  } 
});

// [Registro #1 de 3]
// Procesando ID: TX001 por $150. -> Estado: completado
// [Registro #2 de 3]
// Procesando ID: TX002 por $3000. -> ¡ALERTA! Requiere revisión manual.
// [Registro #3 de 3]
// Procesando ID: TX003 por $45. -> Estado: completado
// --- Fin del reporte de auditoría ---


// foreach imprime todo el array, pero no devuelve nada, es decir, no podemos asignar el resultado de un forEach a una variable, ya que forEach no devuelve nada, es decir, devuelve undefined, por lo tanto, si queremos obtener un nuevo array con los resultados de la iteracion, debemos usar otro metodo como map o filter.