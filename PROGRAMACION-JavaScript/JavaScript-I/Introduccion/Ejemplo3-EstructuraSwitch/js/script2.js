function ejecutar() {

    /*  var respueta = document.getElementById('resultado');//Independiente */
    /* Crearemos el objeto
     sintaxis:
     var nombre = new Nombre(); Representado la variable objeto */
    var fecha = new Date();
    var dia = fecha.getDay();// definira del 0 al 6
    var menu = "";

    switch (dia) {
        case 0:
            /*    menu = "Arroz con Bogavante, al vino"; */
            respuesta.innerText = "Arroz con Bogavante"
            break;
        case 1:
            menu = "Cerrado por descanso";
            break;
        case 2:
            menu = "Cocido madrileño";
            break;
        case 3:
            menu = "Pote Gallego";
            break;
        case 4:
            menu = "Caldereta";
            break;
        case 5:
            menu = "Cocido Montañes";
            break;
        case 6:
            menu = "Lubina a la Sal";
            break;
        default:
            menu = "#Error de Conexion";

    }
    document.getElementById('resultado').innerText = "El menu del dia es " +
        menu;

}