const preguntas = document.querySelectorAll(".pregunta");
const respuestas = document.querySelectorAll(".respuesta");

preguntas.forEach(function(pregunta) {

    pregunta.addEventListener("click", function() {

        const respuesta = pregunta.nextElementSibling;

        const estabaAbierta = respuesta.classList.contains("abierta");

        respuestas.forEach(function(respuesta) {
            respuesta.classList.remove("abierta");
        });

        if (!estabaAbierta) {
            respuesta.classList.add("abierta");
        }

    });

});