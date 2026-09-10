const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const botonAgregar = document.getElementById("agregar");
const buscar = document.getElementById("buscar");
const listaContactos = document.getElementById("listaContactos");


botonAgregar.addEventListener("click", function() {

    let nombreIngresado = nombre.value.trim();
    let telefonoIngresado = telefono.value.trim();

    if (nombreIngresado === "" || telefonoIngresado === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="datos">
            <span class="nombre">${nombreIngresado}</span>
            - 
            <span class="telefono">${telefonoIngresado}</span>
        </span>

        <button class="eliminar">Eliminar</button>
    `;

    listaContactos.appendChild(li);

    nombre.value = "";
    telefono.value = "";

});

listaContactos.addEventListener("click", function(evento) {

    if (evento.target.classList.contains("eliminar")) {

        const contacto = evento.target.closest("li");

        contacto.remove();

    }

});

buscar.addEventListener("input", function() {

    let textoBuscado = buscar.value.toLowerCase().trim();

    const contactos = listaContactos.querySelectorAll("li");

    contactos.forEach(function(contacto) {

        let textoContacto = contacto.querySelector(".datos").textContent.toLowerCase();

        if (textoContacto.includes(textoBuscado)) {
            contacto.style.display = "flex";
        } else {
            contacto.style.display = "none";
        }

    });

});