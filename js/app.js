// Variables para las teclas y la pantalla
var pantalla = document.querySelector('#pantalla');
const teclas = document.querySelectorAll('.tecla-mostrar');
const teclaBorrar = document.getElementsByName('data-borrar')[0];
const teclaResetear = document.getElementsByName('data-resetear')[0];
const teclaIgual = document.getElementsByName('data-igual')[0];

// Variables para las operaciones
var operacionActual = '';

/*
  * EVENTOS
*/

// Capturar evento: Teclado numérico y operadores
teclas.forEach( function( tecla ) {
  tecla.addEventListener('click', function(){
    agregarTecla(tecla.innerText);
  });
});

// Captuar evento: Mostrar resultado con la tecla =
teclaIgual.addEventListener( 'click', function(){
  calcular();
  actualizarPantalla();
});

// Capturar evento: Borrar todo el contenido de la pantalla
teclaResetear.addEventListener( 'click', function() {
  resetear();
  actualizarPantalla();
});

// Capturar evento: Borrar un valor de la pantalla
teclaBorrar.addEventListener( 'click', function() {
  borrar();
});


/*
  * FUNCIONES
*/

// Función para agregar el valor de la tecla seleccionada
function agregarTecla( valor ) {
  operacionActual = operacionActual.toString() + valor.toString();

  actualizarPantalla();
}

// Función para mostrar el resultado en pantalla
function calcular() {
  var calculo;

  calculo = eval(pantalla.textContent);

  operacionActual = calculo;
}

// Función para pi
function pi() {
  pantalla.textContent = 3.14159265359;
}

// Función para la raíz cuadrada
function raiz() {
  pantalla.textContent = Math.sqrt(pantalla.textContent, 2);
}

// Función trigonometrica: Coseno
function coseno() {
  pantalla.textContent = Math.cos(pantalla.textContent);
}

// Función trigonometrica: Seno
function seno() {
  pantalla.textContent = Math.sin(pantalla.textContent);
}


// Función para borrar todo el contenido de la pantalla
function resetear() {
  operacionActual = '';
}

// Función para borrar un valor de la pantalla
function borrar() {
  pantalla.textContent = pantalla.textContent.substring(0, pantalla.textContent.length - 1);

  resetear();
}

// Función para actualizar la pantalla
function actualizarPantalla() {
  pantalla.textContent = operacionActual;
}

// Resetear la aplicación al recargar la página
resetear();