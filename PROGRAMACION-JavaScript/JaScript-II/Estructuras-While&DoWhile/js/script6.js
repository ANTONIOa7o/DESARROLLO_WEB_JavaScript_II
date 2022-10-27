function cantidad() {
    //Otra manera de acceder al DocType, ahorrando recurso id
    var num = document.repetir.numero.value;
    //Otra referencia de parseo directo a parseInt
    var num = Number(num);

    var texto = document.getElementById('resultado');
    var i = 0;

    if (num < 1 || num > 20 || isNaN(num) == true) {
        texto.innerHTML = "No, has introducio un numero del 1 al 20 "
    } else {// el nº es valido

        while (i < num) {//Una repeticion hasta llegar al nº de veces indicado
            i++//
            var precio = 10.95;
            var total = precio * num;
            texto.innerHTML = "<strong> el importe a abonar será de: <strong>one" + total.toFixed(2) + "€"
        }

    }
}