document.addEventListener('DOMContentLoaded', () => {
    const generos = document.querySelectorAll('.genero');
    const botonesVolver = document.querySelectorAll('.pie span:last-child');

    generos.forEach(boton => {
        boton.addEventListener('click', () => {
            const panel = boton.nextElementSibling;
            
        if (panel && panel.classList.contains('panelOculto')) {
                panel.classList.add('mostrar');
            }
        });
    });
    botonesVolver.forEach(btn => {
        btn.addEventListener('click', () => {
            const panelActivo = btn.closest('.panelOculto');
            panelActivo.classList.remove('mostrar');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los contenedores principales
    const panelDetalles = document.querySelector('.PanelDetalles');
    const imagenesPeliculas = document.querySelectorAll('.panelOculto .body img'); // Selecciona todas las imágenes
    const botonVolver = document.querySelector('.CajaVolver span');

    // 2. Seleccionamos los elementos donde vamos a volcar la información
    const tituloDetalle = panelDetalles.querySelector('.nombre');
    const imagenDetalle = panelDetalles.querySelector('.imagenes img');
    const sinopsisDetalle = panelDetalles.querySelector('.sinopsis');

    // 3. Programamos el clic para cada imagen
    imagenesPeliculas.forEach(img => {
        img.addEventListener('click', () => {
            // Extraemos la información de los atributos data-* de la imagen clicada
            const nombrePeli = img.getAttribute('data-nombre');
            const sinopsisPeli = img.getAttribute('data-sinopsis');
            const rutaImagen = img.src;

            // Inyectamos la información en el panel de detalles
            tituloDetalle.textContent = nombrePeli; // Ponemos el nombre de la peli
            imagenDetalle.src = rutaImagen;         // Ponemos la misma imagen
            sinopsisDetalle.textContent = sinopsisPeli; // Ponemos la sinopsis

            // Mostramos el panel (asegúrate de tener la clase .mostrar en tu CSS)
            panelDetalles.classList.add('mostrar');
        });
    });

    // 4. Programamos el botón volver
    botonVolver.addEventListener('click', () => {
        panelDetalles.classList.remove('mostrar');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Referencias a los elementos
    const btnCrearCuenta = document.querySelector(".Arriba-box #Cuenta span"); // El span del encabezado
    const btnVolver = document.getElementById("btnVolver");
    
    const loginPanel = document.getElementById("loginPanel"); // El panel principal
    const registrationPanel = document.getElementById("registrationPanel"); // El nuevo panel

    // Función para abrir Registro y ocultar Login
    btnCrearCuenta.addEventListener("click", () => {
        loginPanel.classList.add("hidden");
        registrationPanel.classList.remove("hidden");
    });

    // Función para volver al Login
    btnVolver.addEventListener("click", () => {
        registrationPanel.classList.add("hidden");
        loginPanel.classList.remove("hidden");
    });
});