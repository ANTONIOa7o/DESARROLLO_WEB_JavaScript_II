/*              ============
                VALIDACIONES
                ============
            
    Estructuras definidas por un patron de condicion necesaria
    Resumiralas:
 1. Texto Obligatorio
        valor= id.value;
        if(valor == null || valor.lenght == 0 || /^\s+$/.test(valor)){
            true
        }esle{
            false
        }
Añadir, que el metodo test, asociado a la valor de la variable, realizará un comparacion con dicho
pattern o expresion regular 
    
2.Valor numerico
    valor=id.value;
    if(isNaN(valor)){
        true
    }else{
        false
    }
3.Opciones Lista*
    valor = id.seletedIndex
    if(valor == null || valor == 0){
        true
    }else{
        false
    }

4.Email
    valor = id.value
    if( /^\w+([-+.']\w+)*@\w+[(-.]\w+\.\w+([-.]\w+)$/.test(valor)){

    }

5.fecha
    var año;
    var mes;
    var dia;
    valor = new Date(año,mes,dia);
    if(!isNaN(valor)){
        true
    }else{
        false
    }

6.Dni
    valor=id.value;
    if(/^\d{8}[A-Z]$/.test(valor)){
        true
    }esle{
        false
    }

7.Telefonos
valor=id.value
    if(/^\+d{9}/$/.test(valor)){

    }
8.Checkbox
valor=id.value
if(!valor.checked){
    true
}else{
    false
}
9.Radio Button
!!!for--a lo bucles

*/



/*
 *Declaracion de variable, todas en estructura  
 */
var nombre = "", apellido = "", email = "", telefono = "", direccion = "", ciudad = "", codigoPostal = "", edad = "", dni = "", sexo = "";
/*

            =========================
            METODO .addEventListener
            ========================
    
        Es un escuchador, recepcionador de eventos, que indica al navegador que esté atento a la interaccion del usuario.
        Con una ventaja añadida mas, que es referenciada totalmente en js, sin necesidad de intervenir en el HTML.

        En definitiva no es mas que una escucha al evento indicado por el primer parametro, y en el caso de true, ocurra, se ejecuta
        la funcion asociada indica el segundo parámetro, y además un tercer parámetro con ciertas opciones

        Sintaxis:

            desarrolloDelEvento.addEventListener('tipo de evento',funcion_a_ejecutar, boolean);
*/

                        enviar.addEventListener("click", capturarForm);

/* a.Captura de los datos del formulario
   b.Generamos una funcion en la cual:
   c.asociada a la escucha
   d.Recogida de datos
   e.otra funcion que valida dichos datos */

function capturarForm() {
    nombre = document.getElementById('inputNombre').value;
    apellido = document.getElementById('inputApellido').value;
    email = document.getElementById('inputEmail').value;
    telefono = document.getElementById('inputTelefono').value;
    direccion = document.getElementById('inputDireccion').value;
    ciudad = document.getElementById('inputCiudad').value;
    codigoPostal = document.getElementById('inputCodigoPostal').value;
    edad = document.getElementById('inputEdad').value;
    dni = document.getElementById('inputDni').value;
    sexo = document.getElementById('inputSexo').selectedIndex;

    validDatos();
}


//la funcion asociada o subordinada
function validDatos() {
    if (nombre == "") {
       showError('inputNombre');
    }
    if (apellido == "") {
        showError('inputApellido');
    }
    if (email == "") {
        showError('inputEmail');
    }
    if (telefono == "") {
        showError('inputTelefono');
    }
    if (direccion == "") {
        showError('inputDireccion');
    }
    if (ciudad == "") {
        showError('inputCiudad');
    }
    if (codigoPostal == "") {
        showError('inputCodigoPostal');
    }
    if (edad == "") {
        showError('inputEdad');
    }
    if (dni = "") {
        showError('inputDni');
    }
    if (sexo == null || sexo == 0) {
        showError('inputSexo');
    }


    //Funcion independiente, ejecutada en la accion del boton

}



//Otra funcion subordinada a la condicion, llama al elemento
function  showError(id) {//*2error
    document.getElementById(id).value = "🔑 ⚠ obligatorio"
    document.getElementById(id).classList.add = "warningLabel"//una propia o una que conozcamos nativas(bootstrap)
    // class, de bootstrap .is-invalid
    swal("Faltan campos por rellenar");


}
 function exito() {
    swal("Formulario enviado correctamente");
} 