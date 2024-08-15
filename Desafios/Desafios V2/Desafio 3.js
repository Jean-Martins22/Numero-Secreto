/*
1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
Para isso, considere a cotação do dólar igual a R$4,80.

4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. 
Considere Pi = 3,14.

6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

//1
function calcularIMC(altura, peso) {
    return peso / Math.pow(altura, 2);
}

let imc = calcularIMC(1.87, 80);
console.log(imc.toFixed(2));

//2
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = numero;
    numero--;
    while (numero > 0){
        resultado = resultado * numero;
        numero--;
    }
    return resultado;
}

let fatorial = calcularFatorial(5);
console.log(fatorial);

//3
function conversorDolarReal(dinheiro) {
    return dinheiro * 4.80;
}

let dolar = conversorDolarReal(10);
console.log(dolar.toFixed(2));

//4
function calcularAreaPerimetroRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}
  
let altura = 3;
let largura = 5;
calcularAreaPerimetroRetangular(altura, largura);

  
//5
function calcularAreaPerimetroCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
        
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}
  
let raio = 4;
calcularAreaPerimetroCircular(raio);  

//6
function calcularTabuada(numero) {
    if (numero <= 0){
        return console.log('Não existe');
    }
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

numero = 5;
calcularTabuada(numero);