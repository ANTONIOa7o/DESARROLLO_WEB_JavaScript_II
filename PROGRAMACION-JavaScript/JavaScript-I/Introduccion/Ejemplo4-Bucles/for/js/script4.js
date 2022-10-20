function inicio() {

    var hoy = new Date();
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();


    var dia = hoy.getDate();
    var mes = hoy.getMonth();
    var ano = hoy.getFullYear();

   m = chequeoTiempo(m);
    s = chequeoTiempo(s);
    ap = chequeoAmPm(h); 

    document.getElementById('reloj').innerHTML = "🕗 " + h + ":" + m + ":" + s +  ap; 
    switch (mes) {
        case (0):
            mes = "Enero";
            break;
        case (1):
            mes = "Febreo";
            break;
        case (2):
            mes = "Marzo";
            break;
        case (3):
            mes = "Abril";
            break;
        case (4):
            mes = "Mayo";
            break;
        case (5):
            mes = "Junio";
            break;
        case (6):
            mes = "Julio";
            break;
        case (7):
            mes = "Agosto";
            break;
        case (8):
            mes = "Septiembre";
            break;
        case (9):
            mes = "Octubre";
            break;
        case (10):
            mes = "Noviembre";
            break;
        case (11):
            mes = "Diciembre";
            break;
        default:
            mes="Error de carga";
            break;

    }
document.getElementById('calendario').innerHTML="📅"+dia+"/"+ mes+"/"+ ano;

}

//Traslade el digito delante en unidades
 function chequeoTiempo(i){
    if(i<10){
        i="0"+i
    }
    return i;

 }
function chequeoAmPm(h){
    if(h<12){
        ap = "am ☀"; //am
    }else{
        ap = "pm 🌗";//pm
    }
    return ap;
}
