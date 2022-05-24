//05-destructuracion.js

//Destructuracion de objetos
const alexander ={
    nombre:"Alexander"
};

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};
const alexanderCarolina ={//creando una nueva referencia
    ...carolina, //1el orden es importante para propiedadees que se repiten
    ...alexander,
};
console.log('alexanderCarolina',alexanderCarolina);

//destruturacion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno, //el orden importa
    ...arregloDos,
];
console.log('superArreglo',superArreglo);
console.log(...superArreglo); //console.log(1,2,3,4,5...,10);
console.log(1,2,3);
console.log(1);
console.log(2);
console.log(3);