// Variables para las teclas y la pantalla
var pantalla = document.querySelector('#pantalla');
const teclas = document.querySelectorAll('.tecla-mostrar');
const teclaBorrar = document.getElementsByName('data-borrar')[0];
const teclaResetear = document.getElementsByName('data-resetear')[0];
const teclaIgual = document.getElementsByName('data-igual')[0];

// Variables para las operaciones
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;

// Capturar evento: Teclado numérico y operadores
teclas.forEach( function( tecla ) {
  tecla.addEventListener('click', function(){
    agregarTecla(tecla.innerText);
  });
});

// Función para agregar el valor de la tecla seleccionada
function agregarTecla( valor ) {
  operacionActual = operacionActual.toString() + valor.toString();

  actualizarPantalla();
}

// Función para actualizar la pantalla
function actualizarPantalla() {
  pantalla.textContent = operacionActual;
}