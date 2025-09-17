// Objetos anidados

// 1.Notación Literal de Objeto 
const persona = {
    nombre: "Laura",
    edad: 30,
    contacto: {
        email: "segovia123@hotmail.com",
        telefono: "257-2646"
    },
    direccion: {
        calle: "av. Siempre Viva 742",
        ciudad: "Springfield",
        pais: "EEUU",
        coordenadas: {
            latitud: 32.34,
            longitud: -12.32
        }
    }
};

// Acceder a las propiedades del objeto anidado
console.log(persona.nombre);  // Laura
console.log(persona.contacto.email); // segovia123@hotmail.com
console.log(persona.direccion.ciudad);  // springfield
console.log(persona.direccion.coordenadas.latitud); // -12.32

// 2.Objetos por separado y luego asignandolos: Se puede crear objetos de forma independiente y luego asignar uno como propiedad de otro.
const infoContacto = {
    email: "porvenir@ejemplo.com",
    telefono: "555-5678"
};

const infoResidencia = {
    calle: "Calle falsa 123",
    ciudad: "Metropolis",
    pais: "EEUU"
};

const empleada = {
    nombre: "Ana",
    puesto: "Dev. Web",
    // Asignando los objetos creados previamente
    contacto: infoContacto,
    direccion: infoResidencia
};

// Acceder a propiedades desde 'empleada'
console.log(empleada.nombre);   // ana
console.log(empleada.contacto.telefono);  // 555-5678
console.log(empleada.direccion.calle)  // calle falsa 123

// añadir un objeto anidado despues  de crear el objeto principal
const producto = {
    id: "XYZ12300",
    nombre: "Laptop Alien"
};

producto.caracteristicas = {
    ram: "16GB",
    disco: "512 GB SSD",
    procesador: "Intel i9"
}
console.log(producto.caracteristicas.ram);  // 16GB



// 3.usando funciones contrstuctoras (new): Al crar múltiples objetos con la misma estructura, las funciones contructoras son una buena opción.
function  Direccion(calle, ciudad, pais) {
    this.calle = calle,
    this.ciudad = ciudad,
    this.pais = pais    
}
function Usuario(nombre, email, calle, ciudad, pais) {
    this.nombre = nombre,
    this.email = email,
    this.direccion = new Direccion(calle, ciudad, pais) // crea un objeto anidado
}
const usuario1 = new Usuario("Juan", "juan@ejemplo.com", "Plaza Mayor 1", "Madrid", "España");
const usuario2 = new Usuario("Maria", "maria@ejemplo.com", "riso 322", "Lince", "Perú");
console.log(usuario1.nombre);   // juan
console.log(usuario1.direccion.ciudad);  // Madrid
console.log(usuario2.direccion.calle);   // riso 322


// falta class
