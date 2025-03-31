let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";

let textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear(); // Borra la pantalla en la consola.

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert(texto1, texto2) {
    let concatenado = texto2 + texto1; // Concatenamos los textos en orden
    let invertido = concatenado.split("").reverse().join(""); // Invertimos el string
    return invertido;
}
