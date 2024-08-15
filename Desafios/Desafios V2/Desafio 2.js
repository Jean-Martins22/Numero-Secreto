/*
1 - Criar uma função que exibe "Olá, mundo!" no console.

2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

//1
function olaMundo() {
    console.log('Ola Mundo');
}

olaMundo();

//2
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('Junin');

//3
function dobro(numero) {
    return numero * 2;
}

let resultadoDobro = dobro(2);
console.log(resultadoDobro);

//4
function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

let resultadoMedia = media(10, 8, 9);
console.log(resultadoMedia);

//5
function maior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let resultadoMaior = maior(5, 10);
console.log(resultadoMaior);

//6
function multiplicacao(x) {
    return x * x;
}

let resultadoMultiplicacao = multiplicacao(10);
console.log(resultadoMultiplicacao);