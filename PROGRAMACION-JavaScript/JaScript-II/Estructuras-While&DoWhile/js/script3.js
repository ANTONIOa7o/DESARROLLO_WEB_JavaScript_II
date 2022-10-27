
function acceso() {

    var clave = "Helsinky";//Expresion regular en si misma
    /* console.log(); */
    var intentos = false;
    contador = 0;
    while (contador < 3 && intentos == false) {
        var claveAcceso = window.prompt("Introduce la clave de Administrador: ");
        //var claveAcceso = id.value; => Recogiera en un formulario,modal, sweetAlert...
        if (clave == claveAcceso) {
            document.getElementById('resultado').innerText = "Acceso Aprobado..!"
            intentos = true;//Planteado para romper el bucle, al primer o segundo o tercer intento 
        }

        contador++;
    }
    if (!intentos) {
        document.getElementById('resultado').innerText = "Lo sentimos, contacta el dept. de Informatica"
    }
}