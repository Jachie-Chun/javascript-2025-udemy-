// destructuring de arrays: Para extraer elementos de una array.
// destructuring de objetos: Para extraer propiedades de un objato.

// desctructuring para objetos
const producto = {
    nombre: "PC Gamer",
    precio: 100,
    disponible: true
}

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);


// otros ejemplos con array

// Sintaxis básica: Se utiliza corchetes [] en el lado izquierdo de la asignación para definir las variables que recibirán los valores del array.
const numeros = [10, 20, 30];
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Omitir Elementos: Puedes ignorar elementos del array utilizando comas consecutivas.
const colores = ["rojo", "verde", "azul", "amarillo"];
const [primerColor, , tercerColor] = colores;
console.log(primerColor);  
console.log(tercerColor);
console.log(colores);

// Valores por Defecto: Puedes asignar valores por defecto a las variables en caso de que el elemento correspondiente en el array no exista(sea undefined).
const frutas = ["manzana", "pera"];
const [fruta1, fruta2, fruta3 = "naranja"] = frutas;
console.log(fruta1);  
console.log(fruta2);
console.log(fruta3);  // naranjas

// Operardor Rest(...): Permite agrupar los elementos restantes de una array en una nueva variable(que será un array). Deber ser el último elemento en la desentructuración.
const puntos = [1, 2, 3, 4, 5];
const [primerPunto, segundoPunto, ...restoPuntos] = puntos;
console.log(primerPunto);  // 1
console.log(segundoPunto); // 2
console.log(restoPuntos);  // 3, 4, 5

// Intercambio de Variables: Una forma elegante de intercambiar los valores de dos variables sin necesidad de una variable temporal.
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x);  // 10
console.log(y);  // 5

// Destructuring en Funciones(Parámetros): Puedes desestructurar arrays directamente en los parámetros de una función.
function obtenerCooerdenadas([lat, lon]) {
    console.log(`Latitud: ${lat}, Longitud: ${lon}`);
}
const punto = [10.99, -74.78];
obtenerCooerdenadas(punto);

// Arrays anidados
const matriz = [1, 2, [3, 4]];
const [val1, val2, [val3, val4]] = matriz;
console.log(val1); // 1
console.log(val3); // 3

// Destructuring de Objetos: Permite extraer propiedades de un objeto y asignarlas a variables con el mismo nombre que la propiedad, o con un nombre diferente.

// Sintaxis Básica: Se utiliza llaves {} en el lado izquierdo de la asignación para definoir las variables que recibirán los valores de las propiedades del objeto. Los nombres de las variables deben coincidir con los nombres de las propiedades.
const persona = {
    apellido: "Quispe",
    edad: 30,
    ciudad: "Madrid"
};
const { apellido, edad, ciudad } = persona;
console.log(nombre); 
console.log(edad);
console.log(ciudad);

// Asignación a nuevos nombres de variables: Asignar el valor de una propiedad a una variable con un nombre diferente.
const mercaderia = {
    id: "Platano seda",
    precio: 19.99,
    descripcion: "Producto organico"
};
const { id: codigo, precio: valor, descripcion: detalle } = mercaderia;
console.log(codigo);  // cambia id por codigo
console.log(valor);
console.log(detalle);  // producto organico

// Valores por defecto: Al igual que con los arrays, puedes asginar valores por defecto a las variables si la propiedad correspondiente no existe en el objeto o su valor es 'undefined'.
const tema = {
    color: "negro"
};
const { color, idioma = "español", notificaciones = true } = tema;
console.log(color); // negro
console.log(idioma); // español (valor por defecto)
console.log(notificaciones); // true (valor por defecto)

// Operador Rest(...): Permite 'agrupar' las propiedades restantes de un objeto en una nueva variable(que será un 'objeto').
const user = {
    id: 10,
    nombreUsuario: "admin",
    email: "deljuin@gmail.com",
    genero: "Masculino"
}
const { id, nombreUsuario, ...extra} = user;
console.log(id);  // 1
console.log(nombreUsuario); // admin
console.log(extra); //  { email: deljuin@gmail.com, genero: Masculino }

// destructuring en funciones(parámetros): Muy útil para extraer propiedades de un objeto pasado como argumento a una función. Esto hace que el acceso a las propiedades dentro de la función sea más directo.

function infoUsuario({ nombre, edad, profesion = "Sin datos"}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Profesión: ${profesion}`);
}
const dev = {
    nombre: "Carlos",
    edad: 25,
    profesion: "Abogado"
};
infoUsuario(dev);  //  Nombre: Carlos, Edad: 25, Profesión: Abogado

const estudiante = {
    nombre: "Laura",
    edad: 20
    // no hay dato de profesion
};
infoUsuario(estudiante);  // Nombre: Laura, Edad: 20, Profesión: Sin datos

// Destructuring en Objetos anidados: Puedes destructurar objetos que se encuentran dentro de otros objetos.
const pedido = {
    idPedido: "P001",
    cliente: {
        nombreCliente: "Gonzalo",
        direccion: {
            calle: "Tambo Real 325A",
            distrito: "Chorrillos"
        }
    },
    total: 150.76
};

// destructuring
const { idPedido, cliente: { nombreCliente, direccion: { calle, distrito } }, total } = pedido;
console.log(idPedido);       // P001
console.log(nombreCliente);  // Gonzalo
console.log(calle);          // Tambo Real 325A
console.log(distrito);       // Chorrillos
console.log(total);          // 150.76

// Destructuring en blucle 'for...of': Se puede utilizar para extraer valores de arrays de objetos o arrays de arrays dentro de un bucle.

const lista = [
    { id: 1, nombre: "Elena"},
    { id: 2, nombre: "Mario"},
    { id: 3, nombre: "Sofía"}
];
for (const { id, nombre} of lista) {
    console.log(`ID: ${id}, Nombre: ${nombre}`); // itirea la lista con nuevo valor id y nombre
}

