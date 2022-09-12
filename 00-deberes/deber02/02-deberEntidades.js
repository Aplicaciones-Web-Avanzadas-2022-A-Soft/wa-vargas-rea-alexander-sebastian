// 02-deber.js
const fs = require('fs');
const inquirer = require('inquirer');
const path = './02-atributos.txt';
let arregloDatos = []

function leerArchivo(path){
    return new Promise(
        (
            resolve,
            reject
        ) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject('Error leyendo archivo.');
                    }else{
                        resolve(contenido);
                    }
                }
            );
        }
    )
}

function escribirArchivo(path, contenido){
    return new Promise(
        (
            resolve,
            reject
        ) => {
            fs.writeFile(
                path,
                contenido,
                (errorEscritura)=>{
                    if(errorEscritura){
                        reject('Error escribiendo archivo.');
                    }else{
                        resolve('Archivo escrito.');
                    }
                }
            );
        }
    )
}

async function guardarDatos(){
    try{
        await escribirArchivo(path, JSON.stringify(arregloDatos));
    }catch (e) {
        console.log('Error en la escritura de los datos.', e);
    }
}

async function extraerDatos(){
    let contenido = undefined;
    try{
        contenido = await leerArchivo(path);
        if(contenido !== undefined){
            arregloDatos = JSON.parse(contenido);
        }else{
            arregloDatos = [];
        }
    }catch(e){
        console.log('Error en la lectura de los datos', e);
    }
}

async function recibirId(nombreEntidad){
    try{
        const respuesta = await inquirer.prompt(
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el id del'+ nombreEntidad +'que quiere actualizar o eliminar: '
            }
        )
        return respuesta.id;
    }catch (e) {
        console.log('No se pudo recibir el id', e);
    }
}

// let manager = {
//     id: 0,
//     nombre: '',
//     apellido: '',
//     direccion: '',
//     fechaNacimiento: '',
//     disquera: '',
//     sueldo: 0,
//     artistas: []
// }

async function crearConsola(){
    try{
        await leerConsola();
        const respuestas = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingresa el id de la consola:'
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa el nombre de la consola:'
            },
            {
                type: 'input',
                name: 'Marca',
                message: 'Ingresa la marca de la consola:'
            },
            {
                type: 'input',
                name: 'Tipo',
                message: 'Ingresa el tipo de la consola:'
            },
            {
                type: 'number',
                name: 'anio',
                message: 'Ingresa el anio de la consola:'
            },
            {
                type: 'number',
                name: 'precio',
                message: 'Ingresa el precio de la consola:'
            },
            {
                type: 'number',
                name: 'peso',
                message: 'Ingresa el peso de la consola:'
            },
        ])
        const indice = arregloDatos.findIndex(
            elemento => elemento.id === respuestas.id
        )
        if(indice !== -1){
            console.log('\n\nYa existe una Consola con ese identificador.\n')
        }else{
            respuestas.videojuegos = [];
            //respuestas.tipo = 'Consola';
            arregloDatos.push(respuestas);
            console.log('\n\nConsola creada con éxito.\n')
            await leerConsola();
        }
    }catch (e) {
        console.log('\n\nError al crear una Consola.', e);
    }
}

const leerConsola = () => {
    const arregloConsolas = arregloDatos
        .filter(
            (valorActual, indiceActual, arregloCompleto)=>{
                return valorActual.tipo === 'Consola';
            }
        );
    if(arregloConsolas.length !== 0){
        console.log('\n\n\t\tListado de Consolas');
        const arregloFinal = arregloConsolas
            .map(
                (valorActual, indiceActual, arregloCompleto) => {
                    return {
                        id: valorActual.id,
                        nombre: valorActual.nombre,
                        marca: valorActual.marca,
                        videojuegos: JSON.stringify(valorActual.artistas),
                        tipo: valorActual.tipo,
                        anio: valorActual.anio,
                        precio: valorActual.precio,
                        peso: valorActual.peso,
                    };
                }
            );
        console.log(arregloFinal);
    }else{
        console.log('\n\nNo existen consolas.\n');
    }
}

async function actualizarConsola(){
    await leerConsola();
    let idConsola = await recibirId(' consola ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idConsola
    )
    if(indice !== -1){
        try{
            const respuestas = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre de la consola:'
                },
                {
                    type: 'input',
                    name: 'Marca',
                    message: 'Ingresa la marca de la consola:'
                },
                {
                    type: 'input',
                    name: 'Tipo',
                    message: 'Ingresa el tipo de la consola:'
                },
                {
                    type: 'number',
                    name: 'anio',
                    message: 'Ingresa el anio de la consola:'
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa el precio de la consola:'
                },
                {
                    type: 'number',
                    name: 'peso',
                    message: 'Ingresa el peso de la consola:'
                },
                ])
            arregloDatos[indice].nombre = respuestas.nombre;
            arregloDatos[indice].marca = respuestas.marca;
            arregloDatos[indice].tipo = respuestas.tipo;
            arregloDatos[indice].anio = respuestas.anio;
            arregloDatos[indice].precio = respuestas.precio;
            arregloDatos[indice].peso = respuestas.peso;
            console.log('\n\nConsola actualizada con éxito.\n')
            await leerConsola();
        }catch (e) {
            console.log('\n\nNo se pudo actualizar la Consola.',e)
        }
    }else{
        console.log('\n\nNo existe ninguna consola con ese identificador.\n')
    }
}

async function borrarConsola(){
    await leerConsola();
    let idConsola = await recibirId(' consola ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idConsola
    )
    if(indice !== -1){
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: "confirm",
                    name: "confirmacion",
                    message: "¿Seguro desea eliminar la consola?"
                }
            )
            if(respuesta.confirmacion){
                arregloDatos.splice(indice, 1);
                console.log('\n\nConsola eliminada con éxito.\n');
                await leerConsola();
            }else{
                console.log('\n\nSe canceló la eliminación de la consola.\n');
            }
        }catch (e) {
            console.log('\n\nNo se pudo eliminar la consola.',e)
        }
    }else{
        console.log('\n\nNo existe ninguna consola con ese identificador.\n')
    }
}

// let artista = {
//     id: 0,
//     nombre: '',
//     apellido: '',
//     direccion: '',
//     fechaNacimiento: '',
//     disponibilidad: false,
//     discos: []
// }

async function crearVideojuego(){
    try{
        await leerConsola();
        const respuestas = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingresa el id del videojuego:'
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa el nombre del videojuego:'
            },
            {
                type: 'input',
                name: 'marca',
                message: 'Ingresa la marca del videojuego:'
            },
            {
                type: 'number',
                name: 'anio',
                message: 'Ingresa el anio de lanzamiento del videojuego:'
            },
            {
                type: 'number',
                name: 'precio',
                message: 'Ingresa el precio del videojuego:'
            },
            {
                type: 'input',
                name: 'genero',
                message: 'Ingresa el genero del videojuego:'
            },
            {
                type: 'number',
                name: 'idConsola',
                message: 'Ingresa el id de la Consola:'
            },
        ])
        const indice = arregloDatos.findIndex(
            elemento => elemento.id === respuestas.id
        )
        if(indice !== -1){
            console.log('\n\nYa existe un videojuego con ese identificador.\n')
        }else{
            respuestas.tipo = 'videojuego';
            let objeto = {idVideojuego: respuestas.id,nombre: respuestas.nombre}
            if(arregloDatos[respuestas.idConsola-1].videojuegos=== undefined){
                arregloDatos[respuestas.idConsola-1].videojuegos.push(objeto);
            }else{
                arregloDatos[respuestas.idConsola-1].videojuegos.push(objeto);
            }
            arregloDatos.push(respuestas);
            console.log('\n\nVideojuego creado con éxito.\n')
            await leerVideojuego();
        }
    }catch (e) {
        console.log('\n\nError al crear un videojuego.', e);
    }
}

const leerVideojuego = () => {
    const arregloVideojuego = arregloDatos
        .filter(
            (valorActual, indiceActual, arregloCompleto)=>{
                return valorActual.tipo === 'Videojuego';
            }
        );
    if(arregloVideojuego.length !== 0){
        console.log('\n\n\t\tListado de videojuegos');
        console.log(arregloVideojuego);
    }else{
        console.log('\n\nNo existen videojuegos.\n');
    }
}

async function actualizarVideojuego(){
    await leerVideojuego();
    let idVideojuego = await recibirId(' videojuego ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idVideojuego
    )
    if(indice !== -1){
        try{
            const respuestas = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre del videojuego:'
                },
                {
                    type: 'input',
                    name: 'marca',
                    message: 'Ingresa la marca del videojuego:'
                },
                {
                    type: 'number',
                    name: 'anio',
                    message: 'Ingresa el anio de lanzamiento del videojuego:'
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa el precio del videojuego:'
                },
                {
                    type: 'input',
                    name: 'genero',
                    message: 'Ingresa el genero del videojuego:'
                },
                {
                    type: 'number',
                    name: 'idManager',
                    message: 'Ingresa el id de la consola:'
                },
            ])
            arregloDatos[indice].nombre = respuestas.nombre;
            arregloDatos[indice].marca = respuestas.marca;
            arregloDatos[indice].anio = respuestas.anio;
            arregloDatos[indice].precio = respuestas.precio;
            arregloDatos[indice].genero = respuestas.genero;
            console.log('\n\nVideojuego actualizado con éxito.\n')
            await leerVideojuego();
        }catch (e) {
            console.log('\n\nNo se pudo actualizar el videojuego.',e)
        }
    }else{
        console.log('\n\nNo existe una consola con ese identificador.\n')
    }
}

async function borrarVideojuego(){
    await leerVideojuego();
    let idVideojuego = await recibirId(' videojuego ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idVideojuego
    )
    if(indice !== -1){
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: "confirm",
                    name: "confirmacion",
                    message: "¿Seguro desea eliminar el videojuego?"
                }
            )
            if(respuesta.confirmacion){
                let idConsola = arregloDatos[indice].idConsola;
                arregloDatos.splice(indice, 1);
                const indiceArreglo = arregloDatos[idConsola-1].videojuegos.findIndex(
                    elemento => elemento.id === idVideojuego
                );
                arregloDatos[idConsola-1].videojuegos.splice(indiceArreglo, 1);
                console.log('\n\nVideojuego eliminado con éxito.\n');
                await leerVideojuego();
            }else{
                console.log('\n\nSe canceló la eliminación del videojuego.\n');
            }
        }catch (e) {
            console.log('\n\nNo se pudo eliminar el videojuego.',e)
        }
    }else{
        console.log('\n\nNo existe un videojuego con ese identificador.\n')
    }
}

async function menu(){
    await extraerDatos();
    let opcion = -1;
    while(opcion !== 0){
        console.log(
            '\t\tMenu Principal\n'
            +'\n0. Salir.'
            +'\n1. Crear Consola.'
            +'\n2. Listar Consolas.'
            +'\n3. Actualizar Consola.'
            +'\n4. Borrar Consola.'
            +'\n5. Crear videojuego.'
            +'\n6. Listar  videojuego.'
            +'\n7. Actualizar videojuego.'
            +'\n8. Borrar videojuego.');
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: 'number',
                    name: 'opcion',
                    messaje: 'Escoja una opción: '
                }
            )
            opcion = respuesta.opcion;
            switch (opcion) {
                case 0:
                    await guardarDatos();
                    return;
                case 1:
                    await crearConsola();
                    await guardarDatos();
                    break;
                case 2:
                    leerConsola();
                    break;
                case 3:
                    await actualizarConsola();
                    await guardarDatos();
                    break;
                case 4:
                    await borrarConsola();
                    break;
                case 5:
                    await crearVideojuego();
                    await guardarDatos();
                    break;
                case 6:
                    leerVideojuego();
                    break;
                case 7:
                    await actualizarVideojuego();
                    await guardarDatos();
                    break;
                case 8:
                    await borrarVideojuego();
                    break;
                default:
                    console.log('No es una orden del menú.')
                    break;
            }
        }catch (e) {
            console.log('No se puede acceder al menú.', e);
        }
    }
}

menu();