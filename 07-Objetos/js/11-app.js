// 1. this --->  es una palabra reservada en JavaScript que hace referencia al objeto actual en el contexto de ejecución. El valor de this puede variar dependiendo de cómo se invoque la función o el método. Es una forma de acceder a las propiedades y métodos del objeto al que pertenece la función o método en ejecución.


const nombre = 'Luis';
const producto = 'PC Gamer';
const codigo = {
    nombre: 'PC Lenovo',
    precio : 1500,
    distponible: false,
    mostrarInfo: function() {
        console.log(`El producto es: ${this.nombre} y su precio es: ${this.precio}`);
    }
}

codigo.mostrarInfo();  // El producto es: PC Lenovo y su precio es: 1500

// En este ejemplo, this.nombre y this.precio hacen referencia a las propiedades del objeto codigo, lo que permite acceder a su información dentro del método mostrarInfo.
