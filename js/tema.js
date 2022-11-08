// Variable para el botón del tema
const btnTema = document.querySelector( '#btn-tema' );

// Fondos
const header = document.querySelector( '#header' );
const display = document.querySelector( '.display' );
const teclado = document.querySelector( '#teclado' );

// Teclas numéricas
const teclaNumeros = document.querySelectorAll( '.tecla-numero' );

// Teclas operadores
const teclaOperadores = document.querySelectorAll( '.tecla-operador' );

// Teclas funciones
const teclaFunciones = document.querySelectorAll( '.tecla-funcion' );

// Capturar evento: Agregar clases del modo oscuro al presionar el botón
btnTema.addEventListener( 'click', function() {
  // Fondos
  document.body.classList.toggle( 'modo-drk' );
  header.classList.toggle( 'header-drk' );
  display.classList.toggle( 'pantalla-drk' );
  teclado.classList.toggle( 'teclado-drk' );

  // Teclas
  teclaNumeros.forEach(element => {
    element.classList.toggle( 'tecla-drk' );
  });

  teclaOperadores.forEach(element => {
    element.classList.toggle( 'tecla-operador-drk' );
  });

  teclaFunciones.forEach(element => {
    element.classList.toggle( 'tecla-funcion-drk' );
  });
});

