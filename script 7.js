const comentario = document.getElementById("comentario");
const botonComentar = document.getElementById("botonComentar");
const listaComentarios = document.getElementById("listaComentarios");

botonComentar.addEventListener("click", function() {

    let texto = comentario.value.trim();

    if (texto === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${texto}</span>
        <button class="eliminar">Eliminar</button>
    `;

    listaComentarios.appendChild(li);

    comentario.value = "";

});


listaComentarios.addEventListener("click", function(evento) {

    if (evento.target.classList.contains("eliminar")) {

        const comentario = evento.target.closest("li");

        comentario.remove();

    }

});