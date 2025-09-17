// Strings Methods - Replace, Slice, Substring y charAt

/**
1.replace() ideal para modificar texto.
2.slice() y substring() son para extracción.
3.charAt() es para acceso directo a caracteres.
*/

// A. replace(valorBuscado, nuevoValor);
const producto = 'Libro de Programacion';
console.log(producto.replace('Programacion', 'Cocina'));  // cambia la palabra programacion por cocina
/** 
    1.Propósito: Remplazar 'la primera coincidencia' de un substring o patrón (expresión regular) en un string.
    2.Retorna: Un nuevo string con el remplazo aplicado.
    3.Características: - Si 'valorBuscado' es un string, solo replaza la 'primera coincidenci'.
                       - Si 'valorBuscando' es una expresíon regular(regex) con el flag '/g', remplaza 'todas las coincidenciaso'.
                       -'No modifica el string original'(los strings en JavaScript son 'inmutables').
    4.Función: Remplaza una parte de un string por otro.
    5.Sintaxis: ---> string.replace(valorBuscado, nuevoValor).
*/
// NOTA: No solo remplaza la primera coincidencia. Para remplazar todas, usan una expresión regular con flag 'g'.
let texto = 'Perro, Gato, Perro';
let nuevoTexto = texto.replace(/Perro/g, 'Lince');
console.log(nuevoTexto);  //   'Lince, Gato, Lince';


// B. slice(incio, fin)
const nombre = 'Tengo la mejor gata del mundo';
console.log(nombre.slice(0, 10));   //  'Tengo la me'
console.log(nombre.slice(8));       //  'mejor gata del mundo'
console.log(nombre.slice(2, 1));    //   empty string
/**
    1.Propósito: Extraer una parte del string(desde 'inicio' hasta 'fin', sin incluir 'fin'). 
    2.Retorna: Un nuevo string con la parte extraída.
    3.Características: - Acepta índices negativos(cuenta desde el final del string).
                       - Si 'fin' se omite, extrae hasta el final     
    4.Función: Extraer una parte de un string  y devuelve uno nuevo
    5.Sintaxis: ---> string.slice(inicio, fin) - 'inicio'--> índice donde empieza la extracción (incluido)
                                               - 'fin' --> índice donde termina(no incluido). Si se omite, va hasta el final.
*/
// NOTA: Índices negativos cuentan hasta el final
let lenguaje = 'JavaScript';
console.log(lenguaje.slice(-6, -1));   // Script 


// C. substring(incio, fin)
const frase = 'Pedrito clavo un clavito';
console.log(frase.substring(0, 10));   // Pedrito cl
console.log(frase.substring(2, 1));    // e
/**
    1.Propósito: Similar a slice, pero 'no acepta indices negativos'.
    2.Retorna: Un nuevo string con la parte extraída.
    3.Diferencia clave
        - Si 'inicio > fin', substring intercambia los argumentos.
        - Índice negativos se tratan  como 0.
*/
let str = 'JavaScript';
console.log(str.substring(4, 0));  // 'Java' (intercambia 4 y 0)
console.log(str.substring(-3));    // 'JavaScript' (negativo se trata como 0)
/**
    4.Función: Similiar a slice, pero no acepta indices negativos.
    5.Sintaxis: ---> string.substring(incio, fin).
    6.Diferencia con slice()
         - Si 'incio > fin', subrstring intercambia los valores.
         - slice no lo hace y devuelve un string vacio.
*/
let txt = 'World Of Warcraft Classic';
console.log(txt.substring(10, 4));  //    d Of W
console.log(txt.slice(10, 4));      // '' vacio


// D. charAt(posición)
const usuario = 'Juan';
console.log(usuario.charAt(0));  // J
console.log(usuario[2]);         // a  alternativa moderna 
// Diferencia: charAt() devuelve un string si el indice no existe, mientras que [] devuelve 'undefined'.
/**
    1.Propósito: Obtener un carácter específico de un string.
    2.Retorna: - El carácter en la posición indicada(como un string).
               - si la posición no existe(fuera de rango), retorna un string vacio ''.
    3.Función: Devuelve el carácter en una posición especifica.
    4.Sintaxis: ---> string.charAt(índice)
*/