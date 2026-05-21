document.addEventListener('DOMContentLoaded', () => {
  const primeroPanel = document.getElementById('primeroPanel');
  const registrationPanel = document.getElementById('registrationPanel');
  const btnCrearCuenta = document.getElementById('btnCrearCuenta');
  const btnVolver = document.getElementById('btnVolver');
  const btnSaveAccount = document.getElementById('saveAccount');
  const btnSignIn = document.getElementById('btnSignIn');

  const loginUsuario = document.getElementById('loginUsuario');
  const loginPassword = document.getElementById('loginPassword');
  const togglePasswordLogin = document.getElementById('togglePassword');

  const nombre = document.getElementById('Nombre');
  const apellido = document.getElementById('Apellido');
  const regUsuario = document.getElementById('regUsuario');
  const password = document.getElementById('password');
  const togglePasswordReg = document.getElementById('togglePasswordReg');

  const regInputs = document.querySelectorAll('.CrearCuenta input[required]');

  btnCrearCuenta.addEventListener('click', () => registrationPanel.classList.remove('hidden'));
  btnVolver.addEventListener('click', () => registrationPanel.classList.add('hidden'));

  loginPassword.addEventListener('input', () => {
    if (loginPassword.value.length > 0) {
      togglePasswordLogin.style.display = 'block'; 
    } else {
      togglePasswordLogin.style.display = 'none';  
    }
  });

  if (togglePasswordLogin) {
    togglePasswordLogin.addEventListener('click', () => {
      const isHidden = loginPassword.type === 'password';
      loginPassword.type = isHidden ? 'text' : 'password';
      togglePasswordLogin.textContent = isHidden ? '🙈' : '👁️';
    });
  }

  password.addEventListener('input', () => {
    if (password.value.length > 0) {
      togglePasswordReg.style.display = 'block'; 
    } else {
      togglePasswordReg.style.display = 'none';  
    }
  });

  if (togglePasswordReg) {
    togglePasswordReg.addEventListener('click', () => {
      const isHidden = password.type === 'password';
      password.type = isHidden ? 'text' : 'password';
      togglePasswordReg.textContent = isHidden ? '🙈' : '👁️';
    });
  }

  btnSaveAccount.addEventListener('click', (e) => {
    e.preventDefault(); 
    let hasError = false;

    regInputs.forEach(input => {
      if (input.value.trim() === '') {
        input.style.outline = "2px solid red";
        hasError = true;
      } else {
        input.style.outline = "none";
      }
    });

    if (hasError) {
      alert('Por favor, rellena todos los campos obligatorios (*).');
      return;
    }

    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios_peliflix')) || [];

    const usuarioExiste = usuariosGuardados.some(u => u.usuario === regUsuario.value.trim());
    if (usuarioExiste) {
      alert('Este nombre de usuario ya está en uso. Elige otro.');
      return;
    }

    const newUserData = {
      nombre: nombre.value.trim(),
      apellido: apellido.value.trim(),
      usuario: regUsuario.value.trim(),
      password: password.value.trim()
    };

    usuariosGuardados.push(newUserData);
    localStorage.setItem('usuarios_peliflix', JSON.stringify(usuariosGuardados));
    
    alert('cuenta creada con exito');
    
    registrationPanel.classList.add('hidden');
    primeroPanel.classList.add('hidden');
    regInputs.forEach(input => input.value = '');
    togglePasswordReg.style.display = 'none';
    password.type = 'password';
    togglePasswordReg.textContent = '👁️';
  });


  btnSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios_peliflix')) || [];
    const inputUser = loginUsuario.value.trim();
    const inputPass = loginPassword.value.trim();

    if (usuariosGuardados.length === 0) {
      alert('No existe ninguna cuenta creada.');
      return;
    }

    const usuarioValido = usuariosGuardados.find(u => u.usuario === inputUser && u.password === inputPass);

    if (usuarioValido) {
      primeroPanel.classList.add('hidden'); 
      alert(`¡Inicio de sesión correcto! Bienvenido/a ${usuarioValido.nombre}.`);
      
      loginUsuario.value = '';
      loginPassword.value = '';
      loginPassword.type = 'password';
      togglePasswordLogin.textContent = '👁️';
      togglePasswordLogin.style.display = 'none';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const generos = document.querySelectorAll(".opciones .genero");

  generos.forEach(genero => {
    genero.addEventListener("click", () => {
      const panelOculto = genero.nextElementSibling;
      if (!panelOculto || !panelOculto.classList.contains("panelOculto")) return;

      document.querySelectorAll(".panelOculto").forEach(p => p.classList.remove("mostrar"));
      document.querySelectorAll(".PanelDetalles1, .PanelDetalles2").forEach(p => p.classList.remove("mostrar"));

      panelOculto.classList.add("mostrar");
    });
  });

  document.querySelectorAll(".panelOculto .head").forEach(btn => {
    btn.addEventListener("click", () => {
      const panelOculto = btn.closest(".panelOculto");
      if (panelOculto) panelOculto.classList.remove("mostrar");
    });
  });

  document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("click", () => {
      const panelOculto = img.closest(".panelOculto");
      if (!panelOculto) return;

      const nombre = img.dataset.nombre || "";
      const sinopsis = img.dataset.sinopsis || "";
      const src = img.getAttribute("src") || "";

      const panelDetalles1 = panelOculto.querySelector(".PanelDetalles1");
      const panelDetalles2 = panelOculto.querySelector(".PanelDetalles2");
      const nombreDetalle = panelOculto.querySelector(".PanelDetalles1 .nombre");
      const sinopsisDetalle = panelOculto.querySelector(".PanelDetalles1 .sinopsis");
      const imgDetalle = panelOculto.querySelector(".PanelDetalles2 .imgDetalle img");

      if (nombreDetalle) nombreDetalle.textContent = nombre;
      if (sinopsisDetalle) sinopsisDetalle.textContent = sinopsis;
      if (imgDetalle) imgDetalle.src = src;

      if (panelDetalles1) panelDetalles1.classList.add("mostrar");
      if (panelDetalles2) panelDetalles2.classList.add("mostrar");
    });
  });

  document.querySelectorAll(".PanelDetalles1 .cerrar, .PanelDetalles2 .cerrar").forEach(btn => {
    btn.addEventListener("click", () => {
      const panelOculto = btn.closest(".panelOculto");
      if (!panelOculto) return;

      panelOculto.querySelectorAll(".PanelDetalles1, .PanelDetalles2").forEach(panel => {
        panel.classList.remove("mostrar");
      });
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const panelVideo = document.querySelector(".panelVideo");
  const reproductor = document.querySelector("#reproductorVideo");
  const cerrarVideoBtn = document.querySelector(".btn-cerrar");

  document.querySelectorAll(".enlace-video, .btn-ver").forEach(btn => {
    btn.addEventListener("click", () => {
      const video = btn.dataset.video || btn.getAttribute("src");
      if (!video) return;

      reproductor.src = video;
      panelVideo.classList.add("mostrar");
      reproductor.play();
    });
  });

  function cerrarVideo() {
    panelVideo.classList.remove("mostrar");
    reproductor.pause();
    reproductor.src = "";
  }

  cerrarVideoBtn.addEventListener("click", cerrarVideo);

  panelVideo.addEventListener("click", (e) => {
    if (e.target === panelVideo) cerrarVideo();
  });
});


const preguntas = document.querySelectorAll("footer > div");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", () => {
    const activo = document.querySelector("footer > div.active");

    if (activo && activo !== pregunta) {
      activo.classList.remove("active");
    }

    pregunta.classList.toggle("active");
  });
});