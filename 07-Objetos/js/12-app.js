// Object Constructor ---> es una funcion especial que actúa como un "molde" pra crear multiples objetos del mismo tipo. Es la forma clásica de hacer programación orientada a objetos en JavaScript antes de la introducción de las clases en ES6.

// ¿Cómo funciona? definimos una función que actúa como constructor, y dentro de esa función utilizamos la palabra clave "this" para asignar propiedades y métodos al objeto que se va a crear. Luego, para crear un nuevo objeto, utilizamos la palabra clave "new" seguida del nombre del constructor.


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = false;
}

const producto_1 = new Producto('PC Gamer', 500);
console.log(producto_1);

const producto_2 = new Producto('Televisor', 100);
console.log(producto_2);
