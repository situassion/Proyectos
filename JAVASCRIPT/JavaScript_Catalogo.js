/**ZONA PARA LAS VARIABLES DEL CATALOGO */
let articulo01 = document.getElementById("uno");
let articulo02 = document.getElementById("dos");
let articulo03 = document.getElementById("tres");
let articulo04 = document.getElementById("cuatro");
let articulo05 = document.getElementById("cinco");
let articulo06 = document.getElementById("seis");
let articulo07 = document.getElementById("siete");
let articulo08 = document.getElementById("ocho");
let articulo09 = document.getElementById("nueve");
let articulo10 = document.getElementById("diez");
let articulo11 = document.getElementById("once");
let articulo12 = document.getElementById("doce");
let articulo13 = document.getElementById("trece");
let articulo14 = document.getElementById("qatorce");
let articulo15 = document.getElementById("quince");
let articulo16 = document.getElementById("disiseis");
let articulo17 = document.getElementById("disisiete");
let articulo18 = document.getElementById("disiocho");
let articulo19 = document.getElementById("disinueve");
let articulo20 = document.getElementById("vinte");
let articulo21 = document.getElementById("vintiuno");
let articulo22 = document.getElementById("vintidos");
let articulo23 = document.getElementById("vintitres");
let articulo24 = document.getElementById("vinticuatro");
let articulo25 = document.getElementById("vinticinco");
let articulo26 = document.getElementById("vintiseis");
let articulo27 = document.getElementById("vintisiete");
let articulo28 = document.getElementById("vintiocho");
let articulo29 = document.getElementById("vintinueve");
let articulo30 = document.getElementById("trinta");

/**ZONA PARA LAS VARIABLES DEL DOM(LAS CAJAS) */
let cajaDetalles = document.getElementById("det");
let cajaCarrito = document.getElementById("zonaCarrito");



/**AÑADIMOS EVENTOS */
articulo01.addEventListener('click', ()=> mostrarDetalles(articulo01));
articulo02.addEventListener('click', ()=> mostrarDetalles(articulo02));
articulo03.addEventListener('click', ()=> mostrarDetalles(articulo03));
articulo04.addEventListener('click', ()=> mostrarDetalles(articulo04));
articulo05.addEventListener('click', ()=> mostrarDetalles(articulo05));
articulo06.addEventListener('click', ()=> mostrarDetalles(articulo06));
articulo07.addEventListener('click', ()=> mostrarDetalles(articulo07));
articulo08.addEventListener('click', ()=> mostrarDetalles(articulo08));
articulo09.addEventListener('click', ()=> mostrarDetalles(articulo09));
articulo10.addEventListener('click', ()=> mostrarDetalles(articulo10));
articulo11.addEventListener('click', ()=> mostrarDetalles(articulo11));
articulo12.addEventListener('click', ()=> mostrarDetalles(articulo12));
articulo13.addEventListener('click', ()=> mostrarDetalles(articulo13));
articulo14.addEventListener('click', ()=> mostrarDetalles(articulo14));
articulo15.addEventListener('click', ()=> mostrarDetalles(articulo15));
articulo16.addEventListener('click', ()=> mostrarDetalles(articulo16));
articulo17.addEventListener('click', ()=> mostrarDetalles(articulo17));
articulo18.addEventListener('click', ()=> mostrarDetalles(articulo18));
articulo19.addEventListener('click', ()=> mostrarDetalles(articulo19));
articulo20.addEventListener('click', ()=> mostrarDetalles(articulo20));
articulo21.addEventListener('click', ()=> mostrarDetalles(articulo21));
articulo22.addEventListener('click', ()=> mostrarDetalles(articulo22));
articulo23.addEventListener('click', ()=> mostrarDetalles(articulo23));
articulo24.addEventListener('click', ()=> mostrarDetalles(articulo24));
articulo25.addEventListener('click', ()=> mostrarDetalles(articulo25));
articulo26.addEventListener('click', ()=> mostrarDetalles(articulo26));
articulo27.addEventListener('click', ()=> mostrarDetalles(articulo27));
articulo28.addEventListener('click', ()=> mostrarDetalles(articulo28));
articulo29.addEventListener('click', ()=> mostrarDetalles(articulo29));
articulo30.addEventListener('click', ()=> mostrarDetalles(articulo30));


const abrirCartera = document.getElementById("accesoCartera");
const CerrarCartera = document.getElementById("CerrarCartera");
const fondoCartera = document.getElementById("fondoCartera");

abrirCartera.addEventListener("click",()=>mostrarVentanamodal(fondoCartera,true));
CerrarCartera.addEventListener("click",()=>mostrarVentanamodal(fondoCartera,false));

/**FUNCIONES */
function mostrarVentanamodal(ventana,encendido){
    if(encendido===true){
        ventana.classList.add("activo")
    }else{
        ventana.classList.remove("activo")

    }
}

function mostrarDetalles(articulo){
    cajaDetalles.innerHTML = `<article class="paneldetalles">
                    <section class="ariba">
                        <h1>${articulo.getAttribute("data-nombre")}</h1>
                        <img src="${articulo.getAttribute("src")}">
                    </section>
                    <section class="abajo">
                        <h2 class="Normal">${articulo.getAttribute("data-genero")}</h2>
                        <p class="sinopsis">${articulo.getAttribute("data-sinopsis")}</p>
                        <p class="precio">${articulo.getAttribute("data-precio")}</p>
                        <div class="comprar" id="boton" >COMPRAR</div>
                    </section>
                            </article>`; 
                            
let btncomprar = document.getElementById("boton");

btncomprar.addEventListener('click', ()=>anadirCarrito(articulo));
}

function anadirCarrito(articuloSeleccionado){
    const nuevoDIV = document.createElement('div');
    nuevoDIV.classList.add("articuloCarrito");
    nuevoDIV.innerHTML = `<img class="imgpequenaCarrito" src="${articuloSeleccionado.getAttribute("src")}" 
                    data-nombre="${articuloSeleccionado.getAttribute("data-nombre")}" 
                    data-genero="${articuloSeleccionado.getAttribute("data-genero")}" 
                    data-sinopsis="${articuloSeleccionado.getAttribute("data-sinopsis")}" 
                    data-precio="${articuloSeleccionado.getAttribute("data-precio")}">`;
    cajaCarrito.appendChild(nuevoDIV);
}


function mostrarVentanaModal(ventana,encendido){
    if(encendido===true){
        ventana.classList.add("activo");
    }else{
        ventana.classList.remove("activo");
        inpIngreso.value="";
        resumenCartera.textContent="";
    }
}

const inpSaldo = document.getElementById('cajasaldo');
const inpIngreso = document.getElementById('cajaingreso');
const btnIngresar = document.getElementById('ingresar');
const saldoVistaGeneral = document.getElementById("vistaSaldo")
const resumenCartera = document.getElementById("saldoresumen");

btnIngresar.addEventListener("click", ()=>ingresarSaldo);

if(inpSaldo.value==""){
        inpSaldo.value = "0 €";
        saldoVistaGeneral.textContent=`💰 0 €`;
    }
    if(resumenCartera.textContent=="Resumen Saldo"){
        resumenCartera.textContent="";
    }

function ingresarSaldo(){
    const saldoActual = Number(inpSaldo.value); 
    if(Number(inpIngreso.value)<0){
        resumenCartera.innerText="El saldo no puede ser negativo";
        return;
    }else if(Number(inpIngreso.value)>1500){
        resumenCartera.innerText="El ingreso no puede ser superior a 1500";
        return;
    }
    saldoActual= saldoActual + Number(inpIngreso.value);
    inpSaldo.value=saldoActual;
    resumenCartera.innerText=`Saldo:${saldoActual}`;
    saldoVistaGeneral.textContent=`💰${saldoActual}`;
}

