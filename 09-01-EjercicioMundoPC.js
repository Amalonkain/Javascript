class DispositivoEntrada {
    
    constructor(TipoEntrada, marca){
        this._TipoEntrada=TipoEntrada;
        this._marca=marca;
    }
    get TipoEntrada(){
        return this._TipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set TipoEntrada(TipoEntrada){
        this._TipoEntrada=TipoEntrada;
    }
    set marca(marca){
        this._marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(TipoEntrada, marca){
        super(TipoEntrada, marca);
        this._idRaton=++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return`Raton: [idRaton: ${this._idRaton}, TipoEntrada: ${this._TipoEntrada}, Marca: ${this._marca}] `;
    }
}




class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;
    constructor(TipoEntrada, marca){
        super(TipoEntrada, marca),
        this._idTeclado=++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado [idTeclado: ${this._idTeclado}, TipoEntrada: ${this._TipoEntrada}, Marca: ${this._marca}]`;
    }
}



class Monitor {
    static contadorMonitores=0;

    constructor(marca, tamaño){
        this._marca=marca;
        this._tamaño=tamaño;
        this._idMonitor=++Monitor.contadorMonitores;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString (){
        return `idMonitor ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}




class Computador {
    static contadoComputadoras=0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputador=++Computador.contadoComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }
    toString(){
        return `Computadora ${this._idComputador}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computador=[];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputador(computador){
        this._computador.push(computador);
    }
    mostrarOrden(){
        let computadorOrden = '';
        for(let computador of this._computador){
            computadorOrden += `\n${computador}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadores ${computadorOrden} `);
    }

}

let raton1 =new Raton("usb", "HP");
let raton2 =new Raton("Bluetooth","Dell");
console.log(raton1.toString());
console.log(raton2.toString());

let Teclado1 = new Teclado ("usb", "genius");
let Teclado2 = new Teclado ("blootooth", "Dell");
console.log(Teclado1.toString());
console.log(Teclado2.toString());

let Monitor1 = new Monitor ("samsung",53);
let Monitor2 = new Monitor ("AOC", 32);
console.log(Monitor1.toString());
console.log(Monitor2.toString());

let Computador1 = new Computador ("HP", Monitor1, raton1, Teclado1);
console.log(`${Computador1}`);
let Computador2 = new Computador ("Armada", Monitor2, raton2, Teclado2);
console.log(`${Computador2}`);

let orden1 = new Orden();
orden1.agregarComputador(Computador1);
orden1.agregarComputador(Computador2);
orden1.agregarComputador(Computador2);
orden1.mostrarOrden();

let Orden2 = new Orden();
Orden2.agregarComputador(Computador2);
Orden2.agregarComputador(Computador2);
Orden2.agregarComputador(Computador2);
Orden2.mostrarOrden();