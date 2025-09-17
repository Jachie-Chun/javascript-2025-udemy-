// Problemas con objetos: 

// Cambiar el contenido dentro de un objeto(mutar objeto): Podemos cambiar el contenido(propiedades y valores) de un objeto después de haberlo creado. Los objetos son mutables. Estoy es posible incluso si la variable que apunta al objeto fue declarada con "const"

// Ejemplo 1 
const miMascota = {
  nombre: "Fido",
  especie: "perro"
};
console.log("Mascota inicial:", miMascota);

// Cambiamos una propiedad existente
miMascota.nombre = "Rocky";
console.log("Después de cambiar nombre:", miMascota); // Muestra: { nombre: "Rocky", especie: "perro" }

// Añadimos una nueva propiedad
miMascota.edad = 3;
console.log("Después de añadir edad:", miMascota); // Muestra: { nombre: "Rocky", especie: "perro", edad: 3 }

// Eliminamos una propiedad
delete miMascota.especie;
console.log("Después de quitar especie:", miMascota); // Muestra: { nombre: "Rocky", edad: 3 }

// Ejemplo 2

const producto = {
  nombre: "1/4 Pecho",
  pago: "yape",
};
console.log("Producto incial:", producto);

producto.nombre = "1/2 pollo";
console.log("Cambio de producto:", producto);

producto.precio = 46;
console.log("Creamos el precio:", producto);

delete producto.pago;
console.log("Elminamos yape", producto);

// Ejemplo 3

// Uno de los problemas más notorios y recurrentes en JS es la palabra clave 'this'. Su valor se determina en tiempo de ejecución de cómo se llama a la función, lo que puede llevar a comportamientos inesperados.

// a. Contexto Global: Cuando 'this' se usa fuera de cualquier función o funciones que son métodos de un objeto(en modo no estricto), generalmente se refiere al objeto global('window' en los navegadores, 'global' en Node.js). En modo estricto('use strict'), 'this' será 'undefined' en este caso.

// b. Constructores: Cuando una función se llama como un método de un objeto(objeto.metodo() ), 'this' dentro de esa función constructora se refiere al nuevo objeto que está creando.

// c. Funciones 'call', 'apply' y 'bind': Estos métodos permiten establecer explícitamente el valor de 'this' para una función.
// funcion.call(objetoThis, arg1, arg2, ...): Llama a la función con 'this' establecido al 'objetoThis' y los arguemntos individualmente.
// funcion.apply(objetoThis, [arg1, arg2, ...]): Similar a 'call', pero los arguemntos se pasan como un array.
// funcion.bind(objetoThis): Crea una nueva función que, cuando se llama, tiene 'this' permanentemente establecido al 'objetoThis'.

// d. Arrow Functions: Las funciones flecha no tienen su propio 'this'. En lugar, heredan el 'this' del ámbito(scope) en el que fueron definidas. Esto hace muy útiles para el callbacks y funciones dentro de métodos donde se quiere persevar el 'this' del contexto circuntante.

// Prblema común: Perder el contexto de 'this' en callbacks o funciones anidadas.

const objValor = {
  valor: 10,
  mostrarValor: function() {
    console.log(this.valor);  // aquí 'this' es objValor
    setTimeout(function() {
      // En modo no estricto, 'this' aquí es 'window' o 'global'
      // En modo estricto, 'this' es 'underfined'
      // Esto causará un error o mostrará 'underfined'
      console.log(this.valor);
      
    }, 100);
  },
  mostraValorConFlecha: function() {
    console.log(this.valor);  // aqui 'this' es objValor
    setTimeout(() => {
      // 'this' aquí es heredado de 'mostrarValorConFlecha', o sea, objValor
    }, 100);  
  }
};



