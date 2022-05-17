// 01-javascript/
// Mutables e Inmutables

//Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
// Vamos a preferir CONST> LET > NUNCA VAR!

// Tipos de variables
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Alxander"; //string
const apellido = "Vargas"; //string
const booleanooo = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number(  "asd"));//number
console.log(Number("asd"));//NaN

//Truty/Falsy
if(true===true){
    console.log("Es verdadero");//!
}else{
    console.log("Es falso");
}
if (true===false){
    console.log("Es verdadero")
}else{
    console.log("Es falso");//!
}
if(""){
    console.log("string vacio Es verdadero");
}else{
    console.log("string vacio es Falsy");
}

if ("Alexander"){
    console.log("String con datos es trusty");
}else {
    console.log("String con datos Falsy")
}

if(-1){
    console.log("Negativos Es trusty");
}else {
    console.log("Negativos es falsy")
}

if(0){
    console.log("Cero es Trusty");
}else{
    console.log("Cero es Falsy");
}

if(1){
    console.log("Positivos es trusty");
}else {
    console.log("cero es falsy");
}

//3) x -> "var"
//objetos Js(JSON)
const Alexander ={
    "nombre": "Alexander",//llave: valor
    'apellido': 'Vargas',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color:'plomo',
        talla:'40',
    },
    mascotas:['Cachetes','Pequitas','Panda'],
};
console.log(Alexander);

//Acceder a las propiedades del objeto
Alexander.nombre; //"Alexander"
Alexander.apellido; //"Vargas"
Alexander["nombre"]; //"Alexander"
//Cambiar valores
Alexander.nombre = "Sebastian";
Alexander["nombre"] = "Alexander";
//Crear nuevos atributos o metodos dentro del objeto
Alexander.sueldo; //undefined
console.log(Alexander.sueldo);
Alexander.sueldo = 1.2;
console.log(Alexander.sueldo); //1.2
Alexander["gastos"] = 0.8;
console.log(Alexander.gastos);
console.log(Alexander);

//Borrar el valor de una propiedad
Alexander.nombre=undefined;
console.log(Alexander);
console.log(Object.keys(Alexander));
console.log(Object.values(Alexander));
//Delete la llave y el valor dentro del objeto
delete Alexander.nombre; //Eliminar la llave "Nombre"
console.log(Alexander);

//Variables por valor o referencia?
//Variables por valor de JS son las primitivas: number, string, boolean

let edadAlex = 32;
let edadSebas = edadAlex; //Guardamos una primitiva en otra variable
                            //Variables por valor
console.log(edadAlex); //32
console.log(edadSebas); //32
edadAlex = edadAlex +1;
console.log(edadAlex); //33
console.log(edadSebas); //32

//Variables por referencia: object ({},{})
let notas={
    total:10
};
let notasSegundoBimestre = notas;
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);
notas.total = notas.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);

//Como clonar objetos
let notasTercerBimestre = Object.assign({},notas);
//Object.assign([],arreglo);
notasTercerBimestre.total = notasTercerBimestre.total + 1;
//console.log();//salto de linea
console.log(notas);
console.log(notasSegundoBimestre);
console.log(notasTercerBimestre);

