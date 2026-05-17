// Agregar nuevos valores a un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
meses[0] = 'nuevo mes'; // Reemplaza el valor del indice 0
meses[10] = 'Ultimo mes'; // Agrega un nuevo valor en el indice 10, pero los indices del 6 al 9 quedan vacios
console.log(meses); // [ 'nuevo mes', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', <4 empty items>, 'Ultimo mes' ]