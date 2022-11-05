// Variable para el botón del tema
const btnTema = document.querySelector( '#btn-tema' );

// Capturar evento: Agregar clase al presionar el botón
btnTema.addEventListener( 'click', function() {
  document.body.classList.toggle( 'modo-drk' );
})