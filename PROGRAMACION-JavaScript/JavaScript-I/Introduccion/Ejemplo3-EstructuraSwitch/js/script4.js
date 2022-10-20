var mapa;

function mostrarMapa() {

    //1º Comprobar que el navegador, y la estructra de la interfaz soportan la geolocalizacion

    if (navigator.geolocation) {
        //2º Obtener la ubicacion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);//true*
    } else {
        alert("Tu dispositivo o navegador no puede acceder a la geolocalizacion");
    }
    //3 Genera opiciones de visualizacion a la condición de la variable
    var opciones = {
        zoom: 12,
        mapType: google.maps.MapTypeId.ROADMAP//Tipos: HIBRID, SATELITE,TERRAIN*

    }
    //4º MOSTRAR MAPA
    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);//Objects
}

//5º Estructura de localizacion: En definitiva lat, lng a mostrar
function mostrarLocalizacion(posicion) {
    //5.1 Obtencion de coordenadas
    var pos = new google.maps.LatLng(40.4348589, -3.654170517);//*
    //5.2 Mostrar Ubnicacion
    var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: "Estamos Aqui o negocio"//*content, infoWindow, es su homologo titile en Marker
    });
    //5.3 Otra opcion compatible con el pto 5.1

    var marker = new google.maps.Marker({
        position: { lat: 40.4348589, lng: -3.654170517 },
        map: mapa,
        title: 'negocio?'
    }); 
    //6º Posicion del mapa a visualizar con respecto a la coordenadas
    mapa.setCenter(pos);

}
//6º  Posibles errores que puedan generarse, accederemos a los errores .code, definidos por :
// PERMISSION_DENIED,TIME_OUT,POSSITION_UNVAILABLE, UNKWOWN_ERROR
function manejarError(error){

    switch(error.code){

        case error.PERMISSION_DENIED:
            alert("Permiso denegado");
            break;
            case error.TIME_OUT:
            alert("Tiempo de espera agotado");
            break;
            case error.POSITION_UNAVAILABLE:
            alert("Posición no detectada");
            break;
            case error.UNKNOWN_ERROR:
            alert("#Error desconocido #202#");//Resumen de un default
            break;
            
    }


}