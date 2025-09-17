// 1. Operador Spread(...)
/**
-Crea una copia superficial(shallow copy) de un objeto.
-Permite combinar propiedades de múltiples objetos en uno nuevo.

VENTAJAS:
-Mas legible y moderno.
-No modifica el objeto original.
LIMITACIONES:
-Solo copia propiedades enumerables y propias (no heredadas)
-No es una copia profunda
*/

// sintaxis básica para copiar un objeto
const objetoOriginal = {
    a: 1,
    b: 2
};
const copia = { ... objetoOriginal };
console.log(copia);  // { 1, 2}

// 2. Combinar objetos con Spread: Si quieres fusionar dos objetos.
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado); // { a: 1, b: 2, c: 3, d: 4 }

// ¿Que pasa si hay propiedades repetitivas?  El último objeto sobreescribe las propiedades anteriores:
const numeros1 = {
    a: 1,
    b: 2
};
const numeros2 = {
    b: 99,
    c: 3
};
const combinado = { ...numeros1, ...numeros2 };
console.log(combinado);   // { a: 1, b: 99, c: 3 } --> b se actualiza

// 3. Combinar 2 objetos con ' Object.assing() '
const cliente1 = { a: 1, b: 2 };
const cliente2 = { c: 3, d: 4 };
const clientesJuntos = Object.assign({}, cliente1, cliente2);
console.log(clientesJuntos);   // { a: 1, b: 2, c: 3, d: 4 } 

// ¿Propiedes repetitivas? Igual que spread, el último objeto gana.
const fruta1 = { a: 1, b: 2 };
const fruta2 = { b: 99, c: 3 };
const jutamos = Object.assign({}, objeto1, objeto2 );
console.log(jutamos); // { a: 1, b: 99, c: 3}
