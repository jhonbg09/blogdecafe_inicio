datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

const leerTexto = (e) => {
  datos[e.target.id] = e.target.value;
  // console.log(datos);
};

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //Validar el formulario

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarError("Todos los campos son obligatrios");
    return;
  }

  //Enviar el formulario

  mostrarMensaje("Mensaje enviado correctamente");
});

// Muestra de error en pantalla

function mostrarError(mensaje) {
  //Verificacion si ya hay un error mostrandose

  if (document.querySelector(".error")) {
    return;
  }

  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");

  formulario.appendChild(error);
  // eliminar la alerta

  setTimeout(() => {
    error.remove();
  }, 4000);
}

//Mensaje de envio de mensaje correctamente

function mostrarMensaje(mensaje) {
    // verificacion de un enviado mostrandose 
    if(document.querySelector('.enviado')){
        return
    }

  const enviado = document.createElement("P");
  enviado.textContent = mensaje;
  enviado.classList.add("enviado");

  formulario.appendChild(enviado);

  setTimeout(()=>{
    enviado.remove();
  }, 6000)
}

// Siempre se debe refactorizar el codigo
