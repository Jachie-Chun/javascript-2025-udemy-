// cortar espacion en blanco de un string
const producto = '      Monitor LG     ';
console.log(producto);
console.log(producto.length);

// metodos que se usan para eliminar el espacio en blanco

// metodo .trimStar()
console.log( producto.trimStart() );    // 'Monitor LG      ' (solo inicio)

// metodo .trimEnd()    
console.log( producto.trimEnd() );      // '      Monitor LG' (solo final) 

// antiguo metodo .trim
console.log( producto.trim );           // 'Monitor LG' (ambos lados)  

// ejemplo
console.log( producto.trimStart().trimEnd() );  // limpia ambos lados
