const tareas = document.querySelectorAll(".tarea");
const botonReiniciar = document.getElementById("reiniciar");

tareas.forEach(function(tarea) {
    
    tarea.addEventListener("click", function() {
        
        tarea.classList.toggle("completada");
    
    });

});

botonReiniciar.addEventListener("click", function() {
    
    tareas.forEach(function(tarea) {
        
        tarea.classList.remove("completada");

    });

});