
import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";   

console.clear();


copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);


function copiar(origen, destino) {
    
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
         
            console.error(`Error al leer el archivo: ${err}`);
            return;
        }
        
       
        fs.writeFile(destino, data, 'utf8', (err) => {
            if (err) {
                
                console.error(`Error al escribir el archivo: ${err}`);
            } else {
             
                console.log(`Archivo copiado de '${origen}' a '${destino}'`);
            }
        });
    });
}
