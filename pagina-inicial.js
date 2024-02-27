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
