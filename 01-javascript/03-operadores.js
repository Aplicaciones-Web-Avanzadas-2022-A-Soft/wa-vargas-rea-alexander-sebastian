//03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//Funciones como parametros
//Find
//enviamos una expresion -> truty falsy
//devuelve el primero que cumpla esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian"; // =  = =
        }
    );
console.log('respuestaFind',respuestaFind); //Cristian //Si no encuentra devuelve undefined


//FINDINDEX
//enviamos una expresion -> Truty Falsy
//devuelve el primero que cumpla con esa condicion
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log();
console.log('respuestaIndex',respuestaIndex);//indice->6//no encuentra->-1

//FOREACH
//Itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual,indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
        }
    );
console.log('respuestaForEach',respuestaForEach);//undefined

//MAP (Modificar o MUTAR el arreglo y devuelve un nuevo arreglo
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual,indiceActual,arregloCompleto)=>{
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota+1,
                casado: false
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap',respuestaMap);
console.log('arreglo',arreglo);

//FILTER (filtrar el arreglo)
//enviamos EXPRESION TRUTY FALSY
//DEVUELVE LOS ELEMENTOS QUE CUMPLEN ESTA FUNCION

const respuestaFilter = arreglo
    .filter(
        (valorActual,indiceActual,arregloCompleto)=>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo',arreglo);

//some -> expresion
//DEVUELVE BOOLEANO
//Hay ALGUNA nota menor a nueve? SI NO
//OR
const respuestaSome = arreglo
    .some(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome',respuestaSome);
console.log('arreglo',arreglo);

//EVERY ->  EXPRESION
//DEVUELVE BOOLEANO
//TODAS las notas son mayores a 14? SI NO
//AND

const respuestaEvery = arreglo
    .every(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nota>1;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//REDUCE        IZQ->DER
//REDUCE RIGHT  DER->IZQ
//100 <3 puntos de vida
//100 -1-2-3-4-5-6-5-4-3-1=
//01 +2+3+4+6+5+4+3+1=
//[1,2,3,5,6,5,4,3,1]

const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado,valorActual,indice,arreglo){
            return (valorAcumulado + valorActual.nota);
        },
        0//acummulador
    );
console.log('respuestaReduce',respuestaReduce);//100-x=-46

