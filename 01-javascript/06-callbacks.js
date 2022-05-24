const fs = require ('fs'); //file system
                            //importar el modulo fs
//06-ejemplo.txt -> Hola
console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', //1
    'uft-8',
    (error, contenido) => {
        console.log('SEGUNDO');
    }
);
console.log('TERCERO');