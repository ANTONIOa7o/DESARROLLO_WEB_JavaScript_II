function calcular() {
    /* 
    1º Fase:
        Definir las variables intervinientes y la entrada de las variables: tipoo y valor
        Y tener en cuenta el tratamiento del valor de las propias variables
    */
   
   
   /* var peso=document.getElementById('calculoPeso').value; 
   variables directas              ⇓ */
   var peso = parseFloat(calculoPeso.value);//Por defecto, siempre, Ojo!, entre los valores de tipo String
   //Tendremos que parsearlo. Al haber decimales, opetaremos por parseFloat
   var altura = parseFloat(calculoAltura.value);
   var imc = 0;
   //variables refugio
   imc = peso / (Math.pow(altura, 2));
   console.log(imc);
   /* 3º Fase: 
       Soltar los resultados de manera directa, concreta y ya con los valores de la variable tamizado
   */
   var respuesta = document.getElementById('resultado');
 
   /* 2º Fase:
   Gestion de las variables, ¿Que quiero hacer con las variables?
   
   */
    if (imc <= 18.5) {
        respuesta.innerHTML = " Indice de Extrema delgadez, estas por debajo de 18.5 ";
    } else if (imc <= 24.9) {
        respuesta.innerHTML = "Indice de Masa corporal optimo, estas en el intervalo Standart";
    } else if (imc <= 29.9) {
        respuesta.innerHTML = "Indice critico masa corporal por encima de la media";
    } else {
        respuesta.innerHTML = "Indice critico de salubridad, rasgo claros de Obesidad";
    }





}