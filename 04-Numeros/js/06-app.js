// Convertir un string a numero

const n1 = 20;
const n2 = '20';
const n3 = 'Uno';
const n4 = 20.2;

console.log(n1);  // 20
console.log(Number.parseInt(n1));   // 20
console.log(Number.parseFloat(n2));  // 20
console.log(Number.parseInt(n3));    // NaN


// resivar si un numero es entero o no
console.log(Number.isInteger(n4));  // false
console.log(Number.isInteger(n3));   // false
