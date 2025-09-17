// variable var

// Inicializar una variable con valor
var producto = "Televisor 24 pulgadas";
console.log(producto);

// Las variables se pueden  reasignar 
producto = "Notebook Apple";
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica  tipo de dato
producto = 20;
console.log(producto);  

// Se puede inicializar sin valor  y asignarlo después
var disponible;
disponible = true;
disponible = false;

// Inicializar  múltiples variables

var nombre = 'Gonzalo',
  apellido = 'Delfin Yataco',
  edad = 19;

/**

=== Caracteristicas ===

1. Ámbito de función(function scope)
Las variables declaradas con 'var' solo están disponibles dentro de la función donde fueron declaradas.
Sise declara fuera de una función, es una variable 'global'.

  function ejemplo() {  
    var mensaje = "Hola";
    console.log(mensaje)  // Funciona
  }

  console.log(mensaje); // Error: mensaje está definida

2. Se puede redeclarar 
Puedes declar la misma variable con 'var' más de una vez sin que haya error.

  var nombre = "Gonzalo";
  var nombre = "Lucia";   // no da error
  console.log(nombre);    // Lucía

3. Se eleva(Hosting)

Las variable 'var' se "elevan" al principio de su ámbito. Es decir, puedes usar la variable antes de declararla, pero su valor será 'undefined'.

  console.log(x); // undefined  -  no se puede declar antes
  var x = 5;


4.No respeta bloques(if o for)
Las variables con 'var' nose limitan a bloques dentro de '{}' como 'if', 'for', etc. Solo a "funciones".

  if(true) {
   var saluda = "Hola mundo";
  }

  console.log(saludo); // Hola mundo

  ✅¿Cuándo usar var?
  Hoy en día no se recomienda usar 'var', porque 'let' y 'const' tienen un comportamiento más predecible(respetan el bloque, no se redeclaran tan fácil, etc).
  Se suele usar 'let' si vas a cambiar el valor, y 'const' si no.

 */