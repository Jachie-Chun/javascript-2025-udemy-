const autenticado = false;

if(autenticado) {
    console.log('Si pudes ver Netflix')
} else {
    console.log('No pudes verlo');  // este sale
}

// Operador ternario
const pass = true;

console.log( pass ? 'Ingresar' : 'Error');  // ingresar



/**

🔑 Tipos de condicionales en JavaScript


if  
Ejecuta un bloque de código si la condición es verdadera.

if...else  
Permite ejecutar un bloque si la condición es verdadera y otro si es falsa.

if...else if...else  
Evalúa múltiples condiciones en orden hasta que alguna sea verdadera.

switch  
Evalúa una expresión y ejecuta diferentes bloques de código según el valor coincidente.

Operador ternario (condición ? expr1 : expr2)  
Forma corta de escribir un if...else.

Operadores lógicos (&&, ||, !)  
Se usan dentro de condicionales para combinar o negar condiciones.

Optional chaining (?.) y nullish coalescing (??)  
Nuevas formas de manejar valores nulos o indefinidos en condiciones.

*/