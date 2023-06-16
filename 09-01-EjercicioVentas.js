class Producto {
    static contadorProducto=0;
    
    constructor(nombre, precio,){
        this._idProducto=++Producto.contadorProducto;
        this._nombre=nombre;
        this._precio=precio;

    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set precio(precio){
        this._precio=precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
        //this._idProducto+ " "+this._nombre+" "+this._precio;
    }
}

class Orden{
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._producto=[];
        //this._contadorProductosAgregados=0; 
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._producto.length < Orden.MAX_PRODUCTOS){
            this._producto.push(producto);
            //this._producto[this._contadorProductosAgregados++]=producto;
        }
        else {
            console.log("No se Pueden agregar mas productos")
        }
    }
    
    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._producto){
            totalVenta += producto.precio;//totalventa = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostraOrden(){
        let productoOrden="";
        for( let producto of this._producto){
            productoOrden += '\n{'+producto.toString()+"}";
        }
        console.log(`Orden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}


let Producto1=new Producto("pantalon", 200);
let Producto2=new Producto("camisa", 100);

let Orden1= new Orden();

Orden1.agregarProducto(Producto1);
Orden1.agregarProducto(Producto2);

Orden1.mostraOrden();

let Orden2=new Orden();
let producto3= new Producto("cinturon", 50);
Orden2.agregarProducto(producto3);
Orden2.agregarProducto(Producto1);
Orden2.agregarProducto(Producto2);
Orden2.agregarProducto(Producto2);
Orden2.agregarProducto(producto3);
Orden2.agregarProducto(Producto1);
Orden2.mostraOrden();