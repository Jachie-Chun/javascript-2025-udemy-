// Comparar valores
const n1 = 20;
const n2 = '20';
const n3 = 30;

// Revisar si 2 numeros son iguales
console.log(n1 == n3);  // false
console.log(n1 == n2);  // true ya que el operador == hace una comparacion no estricta


// comparador estricto 
console.log(n1 === n2);  // false y
console.log(n1 === parseInt(n2));  // true porque parseInt convierte un string a un numero entero
console.log(n1 === Number(n2));  // true porque Number convierte un string a un numero entero
console.log(n1 === n2);  // false porque son de diferente tipo
console.log(n1 === n3);  // false porque son de diferente valor

console.log(typeof n1);  // number
console.log(typeof n2);  // string
console.log(typeof n3);  // number


// != y !==
const cliente_1 = 'Pedro';
const cliente_2 = 'pedro';

console.log(cliente_1 != cliente_2);  // true porque son diferentes
console.log(cliente_1 !== cliente_2);  // true porque son diferentes   
console.log(cliente_1.toLowerCase() !== cliente_2.toLowerCase());  // false porque son iguales al convertirlos a minusculas
console.log(n1 !== parseInt(n2));  // false porque son iguales al convertirlos a numeros enteros