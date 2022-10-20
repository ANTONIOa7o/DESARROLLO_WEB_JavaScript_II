
function ejecutar() {//Asociacion 

    var option = document.getElementById('opciones').value;//Asociacion del inpùt al boton
    var respuesta = document.getElementById('resultado');


    switch (option) {

        case "1":
            respuesta.innerText = "FORMATEANDO EL DISCO, espere por favor...";
            break;
        case "2":
            respuesta.innerText = "RECOPILANDO DATOS PARA SU ELIMINACION, espere por favor...";
            break;
        case "3":
            respuesta.innerText = "CAMBIO DE UBICACIO IP, espere por favor...";
            break;
        case "4":
            respuesta.innerText = "NAVEGADOR MONOTORIZADO, espere por favor..."
            + navigator.userAgent;//Sumando a la respuesta variables, 
          
            break;
        case "5":
            respuesta.innerText = "FORMATEANDO EL DISCO, espere por favor...";
            break;
        default:
            respuesta.innerText = "Es necesario elegir una de las opciones del 1 al 5";
            break;
    }

}