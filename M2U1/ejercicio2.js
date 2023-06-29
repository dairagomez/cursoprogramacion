var texto = document.getElementById('texto');
var contar = document.getElementById('contar');


texto.addEventListener('keyup', function(){
    contar.innerText = texto.value.length;
    
})