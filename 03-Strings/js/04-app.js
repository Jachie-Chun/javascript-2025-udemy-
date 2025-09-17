// cortar espacion en blanco de un string
const producto = '      Monitor LG     ';
console.log(producto);
console.log(producto.length);

// metodos que se usan para eliminar el espacio en blanco

// metodo .trimStar()
console.log( producto.trimStart() );

// metodo .trimEnd()
console.log( producto.trimEnd() );

// antiguo metodo .trim
console.log( producto.trim );

// ejemplo
console.log( producto.trimStart().trimEnd() );
