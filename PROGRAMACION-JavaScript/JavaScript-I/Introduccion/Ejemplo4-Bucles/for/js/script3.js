

function multiplicacion(){
    var numero = parseInt(document.getElementById('numero').value);
    var tabla="";
    for(var i=1 ;i<=10;i++){
        tabla +=numero + "x"+ i + "=" + numero*i + "<br>";
        /* //Operador Asignacion
        Suma el valor que se encuentra a la derecha, lo acomoda a la variable
       que se encuentra a su izq
       Y continuando su recorrido */
  
       
    }
    //11
document.getElementById('resultado').innerHTML=(tabla)
}