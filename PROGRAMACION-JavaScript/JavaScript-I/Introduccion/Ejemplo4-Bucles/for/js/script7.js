function cambiarDisplay() {
    var respuesta = resultado;//será otra forma de exprestar la asignacion al id , el html

    switch (event.target.id) {//Llamando al evento que esté asiciado al id
        case "1":
            respuesta.innerText = "Pulsado 1º planta...";
            break;
        case "2":
            respuesta.innerText = "Pulsado 2º planta...";
            break;
        case "3":
            respuesta.innerText = "Pulsado 3º planta...";
            break;
    }

    //Metodos de Busqueda de elmentos en HTML, excusa los botones
    // Metodo por referencias principal en la localizacion de elementos del DOM

    var botones = document.getElementsByTagName('button');

    //Recorrido que contiene todos los botones

    for (var indice in botones) {
        if (botones[indice].id== event.target.id) {//Condicion true
            document.getElementById(event.target.id).className='rojo'
        
    }else{
        botones[indice].className="azul";
    }
}



}