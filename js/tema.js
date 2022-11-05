// Variable para el botón del tema
const btnTema = document.querySelector( '#btn-tema' );

// Variables para los elementos que tendrán el tema oscuro
const header = document.querySelector( '#header' );
const display = document.querySelector( '.display' );
const teclado = document.querySelector( '#teclado' );

// Teclas numéricas
const tecla1 = document.querySelector( '#num1' );
const tecla2 = document.querySelector( '#num2' );
const tecla3 = document.querySelector( '#num3' );
const tecla4 = document.querySelector( '#num4' );
const tecla5 = document.querySelector( '#num5' );
const tecla6 = document.querySelector( '#num6' );
const tecla7 = document.querySelector( '#num7' );
const tecla8 = document.querySelector( '#num8' );
const tecla9 = document.querySelector( '#num9' );
const tecla0 = document.querySelector( '#num0' );

// Teclas operadores
const opeParenA = document.querySelector( '#opeParenA' );
const opeParenC = document.querySelector( '#opeParenC' );
const opeMod = document.querySelector( '#opeMod' );
const opeC = document.querySelector( '#opeC' );
const opeBorrar = document.querySelector( '#opeBorrar' );
const opeDiv = document.querySelector( '#opeDiv' );
const opeMult = document.querySelector( '#opeMult' );
const opeSum = document.querySelector( '#opeSum' );
const opeDec = document.querySelector( '#opeDec' );
const opeRes = document.querySelector( '#opeRes' );

// Capturar evento: Agregar clases del modo oscuro al presionar el botón
btnTema.addEventListener( 'click', function() {
  document.body.classList.toggle( 'modo-drk' );
  header.classList.toggle( 'header-drk' );
  display.classList.toggle( 'pantalla-drk' );
  teclado.classList.toggle( 'teclado-drk' );

  // Teclas numéricas
  tecla1.classList.toggle( 'tecla-drk' );
  tecla2.classList.toggle( 'tecla-drk' );
  tecla3.classList.toggle( 'tecla-drk' );
  tecla4.classList.toggle( 'tecla-drk' );
  tecla5.classList.toggle( 'tecla-drk' );
  tecla6.classList.toggle( 'tecla-drk' );
  tecla7.classList.toggle( 'tecla-drk' );
  tecla8.classList.toggle( 'tecla-drk' );
  tecla9.classList.toggle( 'tecla-drk' );
  tecla0.classList.toggle( 'tecla-drk' );

  // Teclas operadores
  opeParenA.classList.toggle( 'tecla-operador-drk' );
  opeParenC.classList.toggle( 'tecla-operador-drk' );
  opeMod.classList.toggle( 'tecla-operador-drk' ); 
  opeC.classList.toggle( 'tecla-operador-drk' );
  opeBorrar.classList.toggle( 'tecla-operador-drk' );
  opeDiv.classList.toggle( 'tecla-operador-drk' );
  opeMult.classList.toggle( 'tecla-operador-drk' );
  opeSum.classList.toggle( 'tecla-operador-drk' ); 
  opeDec.classList.toggle( 'tecla-operador-drk' ); 
  opeRes.classList.toggle( 'tecla-operador-drk' ); 
});