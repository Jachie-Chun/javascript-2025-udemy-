// string methods - repeat y split


// repeat(contador)
/**
    A. El metodo repeat() crea y devuelve una nueva cadena que contiene el número especificado de copias de la cadena original.
    B. Sintaxis ---->  string.repeat(contador)
    C. Parametro contador es un número entero entre 0 e infinito positivo que indica cuántas veces repetir la cadena.

    NOTAS: -Si el contador es decimal, se trunca a entero.
           -Si el contador es negativo o infinito, lanza un RangeError
           -Si el contador es NaN, se trata como 0
*/
const producto = 'Monitor 20 pulgadas';
// .repeat te va permitir repetir una cadena de texto
const texto = ' en Promocion'.repeat(4);
console.log(texto);  // repite el string 4 veces
console.log(`${producto} ${texto} !!!`);  


// split([separador[, limite]])
/**
   1.El metodo split divide un objeto string en un array de cadenas mediante la separacionde la cadena en subcadenas.
   2.Sintaxis ---> string.split([separador[, limite]])
   3.Parametros:
      - 'separador'(opcional): Patrón que describe dónde hacer las divisiones. Puede ser un string o expresión regular.
      - 'limite'(opcional): Entero que especifica un límite para el número de diviones. 
*/


// split sirve para divir un string
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' '));  // array(4) {'Estoy','aprendiendo', 'javaScript', 'Moderno'}

// Ejemplo1
'hola mundo' .split(' ');  //  {'hola', 'mundo'}

// Ejemplo con limite
'a,b,c,d' .split(',',2);  //  {'a', 'b'} solo 2 elementos

//Dividir con expresiones regulares
'hola  mundo' .split(/\s+/);    //  ['hola', 'mundo']
'hola1mundo2javascript'.split(/\d/); // ['hola', 'mundo', 'javascript']

// casos especiales 
'hola'.split();             // ['hola'] (array con la cadena completa)
'hola'.split('', 10);       // ['h','o','l','a'] (no excede longitud)
''.split('');               // [] (array vacío)

// consideracion de rendimineto
/**
repeat() es muy eficiente para construir cadenas repetidas

split() puede ser costoso con cadenas muy grandes o expresiones regulares complejas
*/