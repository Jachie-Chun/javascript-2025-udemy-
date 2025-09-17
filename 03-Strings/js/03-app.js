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
