let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let tentativa = 1;
let numeroSecreto = gerarNumeroAleatorio();
mensagemInicial();

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let frase = `Você descobriu o número secreto! com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', frase);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
        } else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativa++;
        limparChute();
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoDaLista = listaDeNumerosSorteados.length;

    if (tamanhoDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); 
        return numeroEscolhido;
    }
}

function limparChute() {
    limpar = document.querySelector('input');
    limpar.value = '';
}

function novoJogo() {
    mensagemInicial();
    limparChute();
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}