const boton= document.getElementById ('miboton')
const texto= document.getElementById ('miparrafo')

boton.addEventListener ("click", function () {
    texto.classList.toggle ('oculto');
})
