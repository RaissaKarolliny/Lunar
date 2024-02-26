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


