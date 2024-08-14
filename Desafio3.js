/*
1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

//1
let cont = 1;

while (cont <= 10){
    console.log(cont);
    cont++;
}


//2
let conta = 10;

while (conta >= 1){
    console.log(conta);
    conta--;
}

//3
let contad = prompt('Digite um número');
while (contad >= 0){
    console.log(contad);
    contad--;
}

//4
let numero = prompt('Digite um número');
let contador = 0;
while (contador <= numero){
    console.log(contador);
    contador++;
}