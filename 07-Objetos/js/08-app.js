// como prevenir que un objeto sea modificado

// 1. Object.freeze() 
/**
-No se pueden agregar nuevas propiedades
-No se pueden eliminar propiedades existentes
-No se pueden modificar los valores de las propiedades existentes
-No se pueden cambiar la configuracion de las propiedades 
*/

const objeto = {
    nombre: "Juan",
    edad: 19
};
Object.freeze(objeto);  // congela

objeto.nombre = "Pedido";   // no tendra efecto
objeto.ciudad = "Madrid";   // no se agregara
delete objeto.edad; // no se elimina

console.log(objeto);  // { nombre: "Juan", edad: "30" }

// Limitacion: solo congela el primero nivel y no congela objetos anidados

// ejemplo udemy

const producto = {
    name: "PC Lenovo",
    precio: 300,
    made: "Taiwan"
};

Object.freeze(producto);  // bota el objeto completo
console.log(Object.isFrozen(producto));  // true  verifica si esta congelado




