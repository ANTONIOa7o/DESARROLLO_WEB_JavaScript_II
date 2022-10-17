function calcular() {

    /*    var sueldoInicial = parseFloat(window.prompt("Introduce sueldo"));
       var sexo = window.prompt("Escribe mujer/hombre");
       var hijos = (window.prompt("Numero de hijos")); */
    var sueldoNuevo = 0;

    var sueldoInicial = parseFloat(sueldo.value);
    var sexo = genero.value;
    var hijos = descendencia.value;

    if (sueldoInicial < 15000) {
        sueldoNuevo = (sueldoInicial * 0.15) + sueldoInicial;
    } else {
        sueldoNuevo = (sueldoInicial * 0.12) + sueldoInicial;
    }

    if ("mujer" == sexo) {
        sueldoNuevo += sueldoInicial * 0.02;
    }

    if (hijos > 0) {
        sueldoNuevo += hijos * (sueldoInicial * 0.01);
    }
    /*     document.getElementById('resultado').innerHTML="Tu nuevo salario será de "+ sueldoNuevo */
    swal("Tu nuevo sueldo: " + sueldoNuevo);
}