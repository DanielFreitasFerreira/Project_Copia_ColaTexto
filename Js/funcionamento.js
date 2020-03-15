function copiar(){
    var texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    alert('Texto copiado! '+ texto.value);
    
}