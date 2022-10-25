
/*
la llegada de HTML5 , vino acompañada un gran conjunto de API´s de JavaScript.
Ofrendiendo utilidades para resolver muchas situaciones de estilo, de arquitectura habituales.
Entre esas ventajas aparece metodos asociados querySelector() y querySelectorAll()

================
querySelector()
================
Similitudes a getElementById() que podremos tener varios elementos con un mismo id
Especificacion:
    Al ser usado como instancia de document realizamos una busqueda sobre cualquier elemento de la 
    pagina, no obstante tambien sobre instancias al DOM.


==================
querySelectorAll()
==================

En este caso actua de forma similar getElementByTagname.
Especificaciones:
    Tiene acceso a todos los elementos de una o varias consultas(separadas por ,)
*/

var botones = document.querySelectorAll('button');
for (i of botones) {
    i.addEventListener('click', function () {
        document.querySelector('.mensaje').innerHTML =




            "Has seleccionado: " + this.innerHTML;
    })
}

/*
target.addEventListener('tipo de evento*, la funcion a lanzar, booleano);

=> *TIPOS DE EVENTOS:
    1. blur: Pierde el foco en la propia estructura de html, se acerca a llamadas externas
    2. click: El usuario hace un click sobre un elemento 
    3.dbclick: el usuario realiza doble click
    4. focus: El elemento gana el foco
    5.keydown: El usuario presiona una tecla
    6.keyup: El usuario libera la tecla
    7.load: termina la carga del documento
    8.unload  sale de la carga del documento
    9.mouseup, mouseover, mouseout,mousedown,mousemove: Eventos relacionados al movimiento del 
    raton, con respecto a un elemento



*/