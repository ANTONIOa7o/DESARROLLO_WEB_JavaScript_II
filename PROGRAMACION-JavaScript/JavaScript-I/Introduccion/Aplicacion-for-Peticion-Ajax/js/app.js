
/*
    OBJECT XMLHttpRequest(xhr) Como ha contribuido este objeto representado en
    la interface del Cliente;
    1. Ha permitido que dicho objeto(xhr), acceda a las peticiones de los servidores web
        -mediante la directiva open()
    2. Enviar peticiones concretas
        -mediante la directiva send()
    3. Recibir la respuestas de los servicios web
        -mendiante la propiedad responseText

*/
var xhr;

function buscarPokemon() {

    // 1º Obtener el objeto XMLHttpRequest
    //Y accedo a todas las propiedad de dicho objeto
    xhr = new XMLHttpRequest();

    // 2º Recuperamos el nombre desde su id en html, 
    var dato = nombre.value;

    //3º Preparacion de la peticion
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + dato, true)//true= condicion idempotente, asincronia

    // 4º Indicamos como queremos la respueta, Entendido como la cabecera
    xhr.setRequestHeader("accept", "application/json");

    //5º Creamos la funcion subordinada, para controlar la entrada de los datos, a través de onreadystateChange
    xhr.onreadystatechange = procesarRespuesta;//Asignando a un remitente

    //6º enviamos la peticion
    xhr.send();

    // 7º Gestion de posibles error, que ofrece la propiedad del objeto, onerror
    xhr.onerror = procesarError;

}

function procesarRespuesta() {
    //Primeros pasos de conexion, hemos de asegura que hay enlace , con lo cual partiremos de
    //una condicion if
    if (xhr.readyState = 4) {
        var respuesta = JSON.parse(xhr.responseText);
        //JSON.parse(cadena) => Trasformamos la cadena del json a objetc[visualizacion string]
        console.log(respuesta);
        document.getElementById('resultado').innerText =
            "Nombre: " + respuesta.name + "\n" +
            "Altura: " + respuesta.height + "\n" +
            "Peso: " + respuesta.weight + "\n" +
            "Habilidades: " + "\n"
        var habilidades = respuesta.abilities;
        for (var i in habilidades) {
            document.getElementById('resultado').innerText +=
                "\t" + habilidades[i].ability.name +"\n"
        }

    }

}

function procesarError() {
    document.getElementById('resultado').innerText = "Error#❗"

}