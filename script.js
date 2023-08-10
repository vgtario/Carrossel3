let count = 1; //variavel 1 //let para "especificar melhor a count"
document.getElementById("radio1").checked  = true; //(true) ativo/verdadeiro// 
// chamando o elemento id//

setInterval( function() { //intervalo da animação//
    nextImage(); //função que vai emitir o intervalo//
}, 5000) // o intervalo dura 2s (2000mls)//

function nextImage() {
    count++; //aumentar a variavel
    if(count>4){  // Se 'count' exceder o número total de imagens (4 no seu caso)
        count = 1; // Reseta 'count' para 1 para voltar ao início do carrossel
    }
//aqui o codigo retorna para o  id:radio, mas continua apartir da primeira imagem
    document.getElementById("radio" +count).checked  = true; 
//marca(seleciona) os botões correspondentes as imagens
}

var imagem = document.getElementById("m1"); //variavel imagem

imagem.addEventListener("click", function() { //evento clicar (click)
    alert("Parabens! Você acaba de adiquirir um TROJAM"); //alerta de mensagem
});

var imagem = document.getElementById("m2");

imagem.addEventListener("click", function() {
    alert("AMoungs!!!");
});

var imagem = document.getElementById("m3");

imagem.addEventListener("click", function() {
    alert("SUS!!!");
});

var imagem = document.getElementById("m4");

imagem.addEventListener("click", function() {
    alert("Dentro, dentro, dentro, dentro");
});