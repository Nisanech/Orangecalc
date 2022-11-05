// Variable para el botón del tema
const btnTema = document.querySelector( '#btn-tema' );

// Variables para los elementos que tendrán el tema oscuro
const header = document.querySelector( '#header' );
const display = document.querySelector( '.display' );
const teclado = document.querySelector( '#teclado' );


// Capturar evento: Agregar clases del modo oscuro al presionar el botón
btnTema.addEventListener( 'click', function() {
  document.body.classList.toggle( 'modo-drk' );
  header.classList.toggle( 'header-drk' );
  display.classList.toggle( 'pantalla-drk' );
  teclado.classList.toggle( 'teclado-drk' );
});