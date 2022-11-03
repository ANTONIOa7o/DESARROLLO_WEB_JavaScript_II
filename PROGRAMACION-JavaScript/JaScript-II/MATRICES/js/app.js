function calcular() {
    var array = document.getElementById('notas').value.split(/,/);//Recoge los datos con coma
    /*  hemos logrado, convertir nuestra variable en un array - var array= [] */

    var suma = 0;
    var media = 0;
    var mayor = 0;

    /* Calcular el sumatorio de los numeros introducidos*/
    for (var i = 0; i < array.length; i++) {

        suma += parseFloat(array[i]);
    }

    /* Calcualr la media  
    media = suma de los elementos/nº elementos
    */
    media = (suma / array.length).toFixed(2);

    /**
     * Calculo de la nota mas alta
  */
    for (i = 0; i < array.length; i++) {
        if (parseFloat(array[i]) > mayor) {
            mayor = array[i];
        }

    }
    //RESULTADO

    document.getElementById('resultado').innerHTML =
    "El sumatorio es: " + suma + "\n"+
    "La nota media es: " + media+ "\n"+
    "La nota mayor es: " + mayor;
}

function reiniciar(){
    location.reload()
}