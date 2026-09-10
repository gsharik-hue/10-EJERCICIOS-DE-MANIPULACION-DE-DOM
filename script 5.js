const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento) {
      evento.preventDefault();
      
      let nombreIngresado = nombre.value.trim()
       let correoIngresado = correo.value.trim();
       
       if (nombreIngresado === "" || correoIngresado === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.className = "error";
        return;
    }
    
    if (!correoIngresado.includes("@")) {
        mensaje.textContent = "Revisa los datos: nombre y correo valido son obligatorios.";
        mensaje.className = "error";
        return;
    }

    mensaje.textContent = "¡Registro exitoso, " + nombreIngresado + "!";
    mensaje.className = "exito";

});