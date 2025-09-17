
// Estos son 2 métodos fundamentales para manipular strings en JavaScript que permiten cambiar el caso de los caracteres.

// .toUpperCase() ---> Combierte todos los caracteres de un string a mayúsculas.
let texto = 'Hola mundo';
console.log(texto.toUpperCase());     // 'HOLA MUNDO'
/** 
   a.Características: - No afecto a los caracteres que ya están en mayúscula o que no tienen distinción de caso.
                      - Devuelve un nuevo string (los strings son inmutables en JavaScript).
                      - No modidica el strin original.
*/
let original = 'abc';
let mayusculas = original.toUpperCase()
console.log(original);     // abc no cambia
console.log(mayusculas);   // ABC


// .toLowerCase() ---> Combierte todos los caractres de un string en minúsculas.
let txt = 'Hola Mundo Gatitas';
console.log(txt);
console.log(txt.toLowerCase());   // hola mundo gatitas
/**
    a.Características: - Similir a toUpperCase() pero en minúscula.
                       - También devuelve un nuevo string sin modificar el original.
                       - Maneja adecuadamente caracteres internacionales.
*/
let origen = 'ABC';
let minuscula = original.toLowerCase();
console.log(origen);      // ABC no cambia
console.log(minuscula);   // abc

// Uso común

//Normalización de entradas de usuario:
let respuesta = prompt('¿Quieres continuar? (S/N)').toLowerCase();  // convierte a minúscula la respuesta 
if (respuesta === 's') {                      // evalua si es s extictamente
    console.log('Continuando...');       // si es s ejecuta 
};



