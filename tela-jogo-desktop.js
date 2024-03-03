let slideIndex = 0;

function moverCarrossel(direction) {
  const carrossel = document.querySelector('.carrossel');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  slideIndex += direction;

  if (slideIndex < 0) {
    slideIndex = slides.length - 3;
  } else if (slideIndex >= slides.length - 2) {
    slideIndex = 0;
  }

  const translateValue = -slideIndex * slideWidth;
  carrossel.style.transform = `translateX(${translateValue}px)`;
}

document.addEventListener('DOMContentLoaded', function(){
    var minhaImagem = document.getElementById('img-do-jogo');
    var minhaDivParagrafoAvaliacao = document.getElementById('div-do-texto-e-da-avaliacao-do-jogo');
    var meuParagrafo = document.getElementById('div-do-paragrafo-do-jogo');
    var meuTitulo = document.getElementById('div-do-titulo-do-jogo');
    var minhaAvaliacao = document.getElementById('div-avaliacao-e-botao-download');

    var alturaImagem = minhaImagem.offsetHeight;
    var alturaTitulo = meuTitulo.offsetHeight;
    var alturaAvaliacao = minhaAvaliacao.offsetHeight;
    var alturaParagrafo = alturaImagem - (alturaTitulo + alturaAvaliacao + 30);

    minhaDivParagrafoAvaliacao.style.maxHeight = alturaImagem + 'px';    
    meuParagrafo.style.maxHeight = alturaParagrafo + 'px';
});