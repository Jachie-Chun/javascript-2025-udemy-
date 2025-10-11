// ===== flags mas comunes en replace ====

// g - global

let texto = 'Perro , Gato, Perro';
// CON flag 'g' - Remplaza TODAS las ocurrencias
let nuevoTexto_1 = texto.replace(/Perro/g, 'Lince');        // 'Lince, Gato, Lince'

// SIN flag 'g' - Remplaza solo la PRIMERA ocurrencia
let nuevoTexto_2 = texto.replace(/Perro/, 'Lince');    // 'Lince, Gato, Perro'


// i - case insensitive (sin destinguir mayúsculas/minúsculas)

let productos = 'Leche, Matequilla, leche';

// con flag 'i'
texto.replace(/leche/gi, 'Queso');  // 'Queso, Mantequilla, Queso'

// sin flag 'i' - solo coincide exacatamente
texto.replace(/leche/g, 'Queso');  // 'Leche, Mantequilla, Queso'
    