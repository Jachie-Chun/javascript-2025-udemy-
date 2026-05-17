// Recorrer un Array ---> Antiguo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses);
console.log(meses[0]); // enero
console.log(meses[1]); // febrero

// Cuanto mide el array
console.log(meses.length); // 6 es solo la cantidad de elementos que tiene el array, no el indice

// usando for
for (let i=0; i < meses.length; i++) {
    console.log(meses[i]); // Enero, Febrero, Marzo, Abril, Mayo, Junio
}

