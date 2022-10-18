
var nombre = "", apellido = "", email = "", telefono = "", direccion = "", ciudad = "", codigoPostal = "", edad = "", dni = "", sexo = "";

/*
                    El método addEventlistener,

 Es un escuchador que indica al navegador que este atento a la interacción del usuario.
La ventaja es que se escribe totalmente en el JS, sin necesidad de tocar el HTML.

Permite añadir una escucha del evento indicado (primer parámetro), y en el caso de que ocurra, 
se ejecutará la función asociada indicada (segundo parámetro). De forma opcional, 
se le puede pasar un tercer parámetro con ciertas opciones(true, false)
Su sintaxis:

target.addEventListener('tipo de evento',función_a_lanzar,booleano);
*/


enviar.addEventListener("click", capturarForm);

//Capturar datos del formularios en Variables
function capturarForm() {
  nombre = document.getElementById('inputNombre').value;
  apellido = document.getElementById('inputApellidos').value;
  direccion = document.getElementById('inputDireccion').value;
  ciudad = document.getElementById('inputCiudad').value;
  codigoPostal = document.getElementById('cp').value;
  email = document.getElementById('inputEmail').value;
  telefono = document.getElementById('inputTelefono').value;
  edad = document.getElementById('inputEdad').value;
  dni = document.getElementById('inputDni').value;
  sexo = document.getElementById('inputSexo').selectedIndex;;

  validDatos();



}
function exito() {
  swal("Enviado correctamente el formularior");
}

//Validar datos
function validDatos() {
  if (nombre == "") {

    showError("inputNombre");
  }
  if (apellido == "") {
    showError("inputApellidos");

  }
  if (direccion == "") {
    showError("inputDireccion");

  }
  if (ciudad == "") {
    showError("inputCiudad");

  }
  if (codigoPostal == "") {
    showError("cp");

  }
  if (email == "") {
    showError("inputEmail");

  }
  if (telefono == "") {
    showError("inputTelefono");

  }
  if (edad == "") {
    showError("inputEdad");


  }
  if (dni == "") {
    showError("inputDni");


  }
  if (sexo == null || sexo == 0) {
    showError("inputSexo");

  }



}

function showError(id) {


  document.getElementById(id).value = "⚠";//Valor añadido
  document.getElementById(id).classList.add("warningLabel");//Nos traemos una clase de bootstrap is-invalid
  swal("Faltan campos por rellenar en el formularior");


}
function exito() {
  swal("Enviado Correctamente");
}