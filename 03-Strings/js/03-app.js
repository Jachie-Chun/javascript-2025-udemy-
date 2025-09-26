// concatenar un string y temple string

// metodo 'concat'
const producto = 'Chocolate Iberica ';
const precio = '30 soles ';

console.log(producto.concat(precio));            // Chocolate Iberica 30 soles  
console.log(producto.concat('En descuento'));    // Chocolate Iberica En descuento

//  con signo suma '+'
const galleta = 'Oreo';
const stock = '30 unidades';

console.log('El producto ' + galleta + 'la cantidad es de: ' + stock );

// con signo coma ','
console.log('La galleta' , galleta , 'existe en alamancen' , stock);

// template string ... recomendable
console.log(`Tenemos ${stock} de galleta ${galleta}`);


// Concepto: Usan acentos graves `` 
// CaracteristicasJS
const abc = 5;
const def = 10;
const resultado = `La suma de ${abc} + ${def} es ${abc + def}`;
console.log(resultado);

// String Multilínea 
const texto = "Linea 1\n" +
              "Linea 2\n" +
              "linea 3";
//con template string
const texto2     = `Linea 1
linea 2
linea 3`;


// Metodo
const user = "Carmen";
const saludo = `Hola ${user.toUpperCase()}!`;
console.log(saludo); // "Hola CARMEN"

// Funcion
function duplicar(x) {
    return x * 4;
}
const respuesta = `El doble es 4 es ${duplicar(4)}`;
console.log(respuesta); // es 16 xd lo multiplica

// Anidados
const esMayor = true;
const edad = 25;
const mensaje = `Eres ${edad >= 18 ? 'mayor' : 'menor'} de edad. ${esMayor ? 'Puedes entrar.' : 'No puedes entrar.'}`;
console.log(mensaje);

// Condicionales 
const usuario = { nombre: "Ana", premium: true };
const mensaje2 = `Hola ${usuario.nombre}! ${usuario.premium ? 'Eres usuario premium' : 'Considera upgrade a premium'}`;
console.log(mensaje2);

// Tagged Template (plantillas etiquetadas)
function etiqueta(strings, ...values) {
    console.log(strings);  // Array con partes estaticas
    console.log(values);   // Array con los valores dinamicos
    return "Texto procesado";
};
const nombre = "Carlos";
const años = 30; 
const respuesta2 = etiqueta`Hola ${nombre}, tienes ${años} años`;
console.log(respuesta2);    