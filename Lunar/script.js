window.onload = function(){
    const gatilho = document.getElementById('gatilhoMenu');
    const menu = document.getElementById('menuOffCanvas');
    gatilho.addEventListener('click', ()=>{
        menu.classList.toggle('ativarOffCanvas');
    })
}