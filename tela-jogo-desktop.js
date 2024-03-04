let slideIndex = 0;

function moverCarrossel(direcao) {
  const carrossel = document.querySelector('.carrossel');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  if (direcao === 'direita' && slideIndex < slides.length - 1) {
    slideIndex++;
  } else if (direcao === 'esquerda' && slideIndex > 0) {
    slideIndex--;
  }


  console.log("slideIndex: " + slideIndex);

  let translateValue = -1 * slideIndex * slideWidth;
  carrossel.style.transform = `translateX(${translateValue}px)`;

  atualizarBotoes();
}

function atualizarBotoes() {
  const btnEsquerda = document.querySelector('.btn-carrossel-esquerda');
  const btnDireita = document.querySelector('.btn-carrossel-direita');
  const slides = document.querySelectorAll('.slide');

  if (slideIndex === 0) {
    btnEsquerda.disabled = true;
  } else {
    btnEsquerda.disabled = false;
  }

  if (slideIndex === slides.length - 1) {
    btnDireita.disabled = true;
  } else {
    btnDireita.disabled = false;
  }
}

function comentar(){
  const conteudo = document.getElementById('targgetComenta');
  conteudo.classList.toggle('comenta');
}