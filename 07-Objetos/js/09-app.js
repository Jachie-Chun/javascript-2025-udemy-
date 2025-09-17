// Object.seal() sella un objecto (menos restrictivo que freeze)
/**
-No se puede agregar nuevas propiedades
-No se puede eliminar propiedades existentes
-Se pueden 'modificar' los valores de las propiedaes existentes
*/

const fruta = {
    name: "Uva",
    organico: true
};
Object.seal(fruta);      // sella el objecto
fruta.name = "Platano";  // modifica el nombre de uva a platano
fruta.pais = "Perú";     // no agregar propiedad
delete fruta.organico;   // no lo elimina

console.log(fruta);

// Ejemplo udemy
 const producto = {
    marca: "Lenovo",
    disponible: true,
    made: "Taiwan"
 };

 Object.seal(producto);
 producto.name = "PC Xiomi";
 console.log(producto);
 console.log(Object.isSealed(producto));