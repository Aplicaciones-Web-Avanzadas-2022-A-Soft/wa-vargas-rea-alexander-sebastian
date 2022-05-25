const fs = require ('fs'); //file system
                            //importar el modulo fs
//06-ejemplo.txt -> Hola
console.log('PRIMERO');
//1) Leer archivo :06-ejemplo.txt, luego imprimir en consola
//2) despues del paso 1, leer archivo: 01-variables.js, luego imprimir en consola
//3) Crear un nuevo archivo llamdo 06-nuevo-archivo.txt con el contenido de los otros dos archivos

fs.readFile(
    './06-ejemplo.txt', //1
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if(errorLecturaPrimerArchivo){
            throw new Error('Error leyendo primer archivo');
        }else {
            //console.log('contenido:', contenido);
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                    if(errorLecturaPrimerArchivo){
                        throw new Error('Error leyendo segundo archivo');
                    }else {
                        console.log(contenidoPrimerArchivo, contenidoSegundoArchivo);
                        const contenidonuevo = contenidoPrimerArchivo + contenidoSegundoArchivo;
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            contenidonuevo,
                            (errorEscritura)=>{
                                if(errorEscritura){
                                    console.log(errorEscritura);
                                }
                                else{
                                    console.log('ok');
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);
console.log('TERCERO');