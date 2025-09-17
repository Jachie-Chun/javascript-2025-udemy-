// como agregar propidades al objeto

const producto = {
    nombre: "PC Gamer",
    precio: 200,
    disponible: true
}

// agregar
producto.imagen = "imagen.jpg";
console.log(producto);
//eliminar
delete producto.disponible;
console.log(producto);