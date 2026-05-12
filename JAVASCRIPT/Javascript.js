Swal.fire("Hola mundo");

alert("Bienvenido a la mandanga");

console.log("Mostramos por consola");

var cajaH1 = document.getElementById('titulo');
cajaH1.innerText += " Ensayo";

let divNewYork = document.getElementById('newyork');
//divNewYork.addEventListener('click', insertarTexto);
divNewYork.addEventListener('mouseenter', insertarImagen);
divNewYork.innerText="ESTOY BUSCANDO";

let sectionTogo = document.getElementById('Togo')
sectionTogo.addEventListener('mouseleave', insertImagen);

function insertImagen(){
    sectionTogo.innerText="togo mon beau pays";
    sectionTogo.innerHTML = '<img src="IMAGENES/togo.jpg"><p>MON BEAU PAYS LE TOGO</p>';
    
}
function insertarImagen(){
    divNewYork.innerText="situ";
    divNewYork.innerHTML = '<img src="IMAGENES/newyork.jpg"><p>mi ciudad preferido<p/>';
}


function insertaImagen(){
    const dinamicBox = document.getElementById("california");
    dinamicBox.innerHTML = '<img src="IMAGENES/BATMAN.png"><p>Este es Batman, este es Batman<p/>';
}

function lanzarConfeti() {
    confetti({
        particleCount: 150, // Cantidad de papelillos
        spread: 70,         // Ángulo de dispersión
        origin: { y: 0.6 }  // Desde dónde sale (0.6 es un poco más abajo del centro)
    });
}