// destructuring de objetos

// ejemplo 1
const producto = {
    nombre: "PC Gamer",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: "China"
        }
    }
};
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais }}} = producto;
console.log(nombre);  // pc gamer
console.log(informacion); // 
console.log(fabricacion);
console.log(pais);

// ejemplo 2 nivel medio 

const usuario = {
    id: 123,
    informacionPersonal: {
        nombre: 'Ana',
        edad: 30,
        direccion: {
            calle: 'calle. poseidon',
            numero: 456,
            ciudad: 'Lima'
        }
    },
    preferencias: {
        tema: 'blanco',
        notificaciones: true
    }
    //rol no está definido en el objeto original
};

// Destructuring en el objeto usuario
const {
    id: indetificadorUsuario, // renombrando 'id' a 'indentificadorUsiario'
    informacionPersonal : {
        nombre: nombreCompleto, // renombrando 'nombre' a 'nombreCompleto'
        edad,                   // La variable se llamará 'edad'
        direccion: {
            calle,
            ciudad: ciudadResidencia // renombrando a 'ciudadResidencia'
        }
    },
    preferencias: {
        tema: temaPreferido = 'negro', // valor por defecto 'claro' si 'tema' no existe
        idioma = 'es' // valor por defecto 'es' para 'idioma' que no existe en el objeto
    },
    rol = 'invitado' // valor por defecto 'invitado' para 'rol' que no existe en el objeto
} = usuario;

console.log(indetificadorUsuario);  // 123
console.log(nombreCompleto); // Ana
console.log(edad); // 30
console.log(calle); // calle. poseidon
console.log(ciudadResidencia);  // lima
console.log(temaPreferido);  // blanco
console.log(idioma); // es
console.log(rol); // invitado

// ejemplo de como se podria usar en una funcion
function mostrarDetalles( {informacionPersonal: {nombre, edad}, preferencias: { tema = 'blanco'}}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Tema: ${tema}`);
};
mostrarDetalles(usuario); // ana , 30, blanco

