class Persona {
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._idPersona=++Persona.contadorPersona;
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return this._idPersona+ " "+this._nombre+" "+this._apellido+" "+this.edad;
    }
}
class Empleado extends Persona{

    static contadorEmpleado=0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado=++Empleado.contadorEmpleado;
        this._sueldo=sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return super.toString()+" "+this._idEmpleado+" "+this._sueldo;
    }
}
class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente=++Cliente.contadorCliente;
        this._fechaRegistro=fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }
    toString(){
        return super.toString()+" "+this._idCliente+" "+this._fechaRegistro;
    }
}

//Pruebas

let Persona1 = new Persona("Juan", "Perez", 28);
console.log(Persona1.toString());

let Persona2 = new Persona("Carlos","Ramires", 35);
console.log(Persona2.toString());

let Empleado1 = new Empleado ("karla", "gomez", 25, 5000);
console.log(Empleado1.toString());

let Empleado2 = new Empleado("Laura", "Quintero", 33, 7000);
console.log(Empleado2.toString());


let Cliente1 = new Cliente ("Miguel", "Cervantes", 30, new Date());
console.log(Cliente1.toString());

let Cliente2 = new Cliente ("Maria", "Lara", 32, new Date());
console.log(Cliente2.toString());