function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

let numeroSecreto = gerarNumeroAleatorio();