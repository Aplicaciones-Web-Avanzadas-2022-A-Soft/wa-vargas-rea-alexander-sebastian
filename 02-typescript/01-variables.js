//01-variables.ts
//npm install -g typescript
var nombre = 'Alexander'; //primitivo
var nombre2 = 'Alexander2'; //Clase string
//nombre = 1;
nombre = 'Sebastian';
var edad = 32;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
//duck typing
var apellido = 'Vargas'; //string ->
apellido = 'Alexander'; //igual a otros string
apellido.toUpperCase(); //metodos string
//apellido = 1; // error, no es un string
//intentar no usar any
var marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
var edadMultiple = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;
//edadMultiple as Date;
//edadMultiple as string;
//edadMultiple as number;
