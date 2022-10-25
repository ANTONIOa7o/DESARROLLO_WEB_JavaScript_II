
var telefonos = [
    "+34-2-916549800",
    "+34-2 620111092 ",
    "+34-2-565321004",
    "+34-2-616254789",
    "+34 2 620457003 ",
    "+56-2-659987963",
    "34-2-878541303",
    "+44-2-621444772",
    "+34-2-936545475",
    "+34-2-96354785"
];


var expresion = /^\+34(\-2\-|2)\d{9}$/;

//Recorrido de la variable
for (var tlf of telefonos) {
    var fila = "<tr>";
    fila += "<td>" + tlf ;
    fila += "<td>" + expresion.test(tlf)+ "</td>";
    //El metodo test(), nos facilita la busqueda de ocurrencias entre entre una expresion regular
    //y una cadena especifica, devolviendo true o false, con respecto a la evaluacion de la expresion
    fila += "<tr>";
    document.getElementById('resultado').innerHTML += fila;
}
