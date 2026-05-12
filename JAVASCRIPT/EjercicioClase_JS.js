alert("Bienvenido a la mandanga");

console.log("Mostramos por consola");

Swal.fire("Hola mundo");

alert("adasdas");

let boton = document.getElementById("boton");
let cajavideo = document.getElementById("cajavideo");


boton.addEventListener('click',insertarvideo);

function insertarvideo(){
    cajavideo.innerHTML = '<video class="retrato" src="VIDEOS/UEFA-Champions-League-All-Finals.mp4" autoplay muted loop></video>';
    muted=false;
    video.autoplay = true;
}

let boton1 = document.getElementById("boton1");
let imagen1 = document.getElementById("imagen1");

let boton2 = document.getElementById("boton2");
let imagen2 = document.getElementById("imagen2");

boton1.addEventListener('click', insertarimagen);
boton2.addEventListener('click', insertarimagen2);

function insertarimagen(){
    imagen1.innerHTML = '<img class="cajaimag" src="IMAGENES/rambo.jpg"></img>';
}
function insertarimagen2(){
    imagen2.innerHTML = '<img class="cajaimag" src="IMAGENES/bradpit.jpg"></img>';
}

let limpiar = document.getElementById("limpiar");

limpiar.addEventListener('click', deleteimagen);
limpiar.addEventListener('click', deleteimagen2);

function deleteimagen(){
    imagen1.innerHTML = ""; 
}
function deleteimagen2(){
    imagen2.innerHTML = ""; 
}

function lanzarConfeti() {
    confetti({
        particleCount: 150, // Cantidad de papelillos
        spread: 70,         // Ángulo de dispersión
        origin: { y: 0.6 }  // Desde dónde sale (0.6 es un poco más abajo del centro)
    });
}

    function lanzarConfeti() {
    confetti({
        particleCount: 350, // Cantidad de papelillos
        spread: 90,         // Ángulo de dispersión
        origin: { y: 0.6 },
        angle: 120,
        colors: ["#ff0000","#00ff00","#0000ff","#ffff00"],
        zIndex: 99999  // Desde dónde sale (0.6 es un poco más abajo del centro)
    });
}
