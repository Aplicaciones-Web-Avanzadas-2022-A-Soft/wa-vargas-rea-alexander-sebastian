// 04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = '';//Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + '' + apellidoParametro;
    }
    private mostrarNombreApellido(): string {
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,//Parametros del constructor
        apellidoParametro: string,//Parametros del constructor
        public cedula: string, //modificador de acceso -> Propiedad de la clase
        public estadoCivil: string, //modificador de acceso -> Propiedad de la clase
    ) {
        super(nombreParametro,apellidoParametro);
    }
}
const alexander = new Usuario(
    'Alexander',
    'Vargas',
    '1719790220',
    'Soltero'
);
alexander.nombre;
alexander.apellido;
alexander.cedula;//'1719790220'
alexander.estadoCivil;//'Soltero'

