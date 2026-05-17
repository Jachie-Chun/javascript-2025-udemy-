// como crear string
const nombre = 'gonzalo';
console.log(nombre);

// creacion con la funcion global --> String()
// esta funcion convierte el valor que le pases a su represebtacion en texto
// dato tipo primitivo
// es util cuando necesitas asegurarte de que un valor de otro tipo (como numeros) se conviertan en string
const nombre_a = String('gonzalo delfin yataco');
console.log(nombre_a);

// Constructor --> new String(...)
// crea un 'objeto' tipo String, no un dato primario
// le da propiedades y metodos
// complejo y lento
const nombre_e = new String('Gonzalo Delfín Yataco');
console.log(nombre_e);