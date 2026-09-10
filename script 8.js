const botones = document.querySelectorAll("button");
const vistaPrevia = document.getElementById("vistaPrevia");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let tema = boton.dataset.tema;

        vistaPrevia.classList.remove("tema-claro");
        vistaPrevia.classList.remove("tema-oscuro");

        vistaPrevia.classList.add("tema-" + tema);

    });

});