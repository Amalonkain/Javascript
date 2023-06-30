const Ingresos=[
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500.00)
];

const Egresos=[
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngreso();
    cargarEgresos();
}

let totalIngresos=()=>{
    let totalIngreso=0;
    for(let ingreso of Ingresos){
        totalIngreso+=ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos=()=>{
    let totalEgreso=0;
    for(let egreso of Egresos){
        totalEgreso+=egreso.valor;
    }
    return totalEgreso;
}
let cargarCabecero=()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());

}

const formatoMoneda=(valor)=>{
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje=(valor)=>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}

const cargarIngreso = ()=>{
    let ingresosHTML='';
    for(let ingreso of Ingresos){
        ingresosHTML+=crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}

const crearIngresoHTML=(ingreso)=>{
    let ingresoHTML =`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)} </div>
            <div class="elemento_eleminar">
                <button class="elemento_eleminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick='eleminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const eleminarIngreso=(id)=>{
    let indiceElminar = Ingresos.findIndex(ingreso=>ingreso.id === id);
    Ingresos.splice(indiceElminar, 1);
    cargarCabecero();
    cargarIngreso();
}

const cargarEgresos=()=>{
    let egresosHTML='';
    for(let egreso of Egresos){
        egresosHTML+=crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}

const crearEgresoHTML=(egreso)=>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())} </div>
            <div class="elemento_eleminar">
                <button class="elemento_eleminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                </button>
            </div>
        </div>    
    </div>
    `;
    return egresoHTML;
}

const eliminarEgreso=(id)=>{
    let indiceElminar = Egresos.findIndex(egreso=>egreso.id===id);
    Egresos.splice(indiceElminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato=()=>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['Valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            Ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngreso();
        }
        else if(tipo.value === 'Egreso'){
            Egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}