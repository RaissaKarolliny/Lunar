window.onload = function () {
    const gatilho = document.getElementById('gatilhoMenu');
    const menu = document.getElementById('menuOffCanvas');
    gatilho.addEventListener('click', () => {
        menu.classList.toggle('ativarOffCanvas');
    });

}
function substituirFoto(imagem) {
    var foto = document.getElementById("upLoadPhoto").getElementsByTagName("img")[0];
    foto.src = imagem;
}
function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var imagem = event.target.result;
        substituirFoto(imagem);
    };
    reader.readAsDataURL(file);
}
function openFileInput() {
    document.getElementById('fileInput').click();
}
function handleUploadClick() {
    document.getElementById('uparArquivo').click();
}
function description(event) {
    const btnCarrossel = event.currentTarget; // Botão atual
    const jogoContainer = btnCarrossel.closest('.jogo-container'); // Encontra o elemento pai com a classe .jogo-container
    const descricao = jogoContainer.querySelector('.descricao'); // Encontra a descrição dentro do elemento pai
    descricao.classList.toggle('description-active'); // Ativa ou desativa a classe para mostrar ou esconder a descrição
}
document.addEventListener('click', function (event) {
    var campoPesquisa = document.getElementById("campoPesquisa");
    var iconePesquisa = document.getElementById("iconePesquisa");
    var fadePreto = document.getElementById("fadePreto");

    if (event.target !== campoPesquisa && !campoPesquisa.contains(event.target) && event.target !== iconePesquisa) {
        campoPesquisa.classList.remove("ativo");
        iconePesquisa.style.opacity = "1";
        fadePreto.style.display = "none";
    }
});

function togglePesquisa() {
    var campoPesquisa = document.getElementById("campoPesquisa");
    var iconePesquisa = document.getElementById("iconePesquisa");
    var fadePreto = document.getElementById("fadePreto");

    campoPesquisa.classList.toggle("ativo");
    iconePesquisa.style.opacity = campoPesquisa.classList.contains("ativo") ? "0" : "1";
    fadePreto.style.display = campoPesquisa.classList.contains("ativo") ? "block" : "none";

    
    if (campoPesquisa.classList.contains("ativo")) {
        fadePreto.style.opacity = "1";
    } else {
        fadePreto.style.opacity = "0";
    }
}


function realizarPesquisa() {
    var termoPesquisa = document.getElementById("inputPesquisa").value;
    
    console.log("Pesquisar por: " + termoPesquisa);
}
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