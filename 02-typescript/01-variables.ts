//01-variables.ts
//npm install -g typescript



let nombre: string = 'Alexander'; //primitivo
let nombre2: String = 'Alexander2'; //Clase string
//nombre = 1;
nombre = 'Sebastian';
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//duck typing
let apellido = 'Vargas'; //string ->
apellido = 'Alexander'; //igual a otros string
apellido.toUpperCase(); //metodos string
//apellido = 1; // error, no es un string

//intentar no usar any
let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;
//edadMultiple as Date;
//edadMultiple as string;
//edadMultiple as number;

//