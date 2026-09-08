let num= 0;
const boton= document.getElementById ('miboton')
const spanContador=  document.getElementById ('contador')
boton.addEventListener("click", function() {
     num ++ ;

    spanContador. textContent = num;
});
