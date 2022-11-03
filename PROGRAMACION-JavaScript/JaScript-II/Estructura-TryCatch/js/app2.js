/*
Tendremeos de alguna forma dispoibles determinados eventos para ejecutar este tipo de acciones
en la interfaz, comunmente entendidos como:
 click
 keydown
 directivas asociadas a los menus de contexto(paste, copy)

*/
//1º Asignamos el evento (click), y adhiera el texto
document.getElementById('btnCopiar').addEventListener('click', copiarAlPortapapeles);

function copiarAlPortapapeles() {
    var codigoAcopiar = document.getElementById('textoAcopiar');
    var seleccion = document.createRange()//Percibe rango de seleccion, es decir, necesita conciencia de seleccion
    seleccion.selectNodeContents(codigoAcopiar)//Selecciona el texto a copiar

    //Antes de realizar el intervalo de seleccion, necesitamos
    //eliminar otras poibles selecciones pasadas
    window.getSelection().removeAllRanges()

    // ahora si, estamos listos para poder seleccionar el elemento asociado al puntero
    window.getSelection().addRange(seleccion);

    try {
        var res = document.execCommand('copy');//Intento copiado, podemos
                                            //eliminando el eventod e ejecucion 
                                            //Observamos funcion fracaso()
        if (res) {

            exito(); 
            mostrarAlerta();
        } else {

            fracaso();
            mostrarAlerta();
        }

    } catch (ex) {
//Provocar el catch, lo obtendremos corrompiendo las funciones exito y fracaso
        excepcion();
        mostrarAlerta();
    }
    window.getSelection().removeAllRanges(seleccion);
}

//2 Detectar el pegado
document.getElementById('paraPegar').addEventListener('paste', interceptarPegado);
function interceptarPegado() {
    alert('has copiado correctamente el texto.....');
}

/// Configuraciones auxiliares
var divAlerta=document.getElementById('alerta');

function exito(){

    divAlerta.innerText="Codigo copiado al portapapeles ..";
    divAlerta.classList.add('alert-success');
}

function fracaso(){
    divAlerta.innerText="Ha fallado la copiado al portapapeles ..";
    divAlerta.classList.add('alert-warning');

}
function excepcion(){
    divAlerta.innerText="Generado error desconocido ..";
    divAlerta.classList.add('alert-danger');
}

function mostrarAlerta(){

   
    divAlerta.classList.remove('invisible');
    divAlerta.classList.add('visible');
    setTimeout(ocultarAlerta,1500)
}
function ocultarAlerta(){

    divAlerta.innerText="";
    divAlerta.classList.remove('alert-success','alert-warning','alert-danger','visible');
    divAlerta.classList.add('invisible')
}