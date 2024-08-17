/*
1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, 
armazene a resposta em uma variável e mostre no console do navegador.

5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log 
para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor 
de idade, exibindo uma mensagem apropriada no console.

8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
Use if-else para imprimir a respectiva mensagem.

9 - Use um loop while para imprimir os números de 1 a 10 no console.

10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba 
"Aprovado" ou "Reprovado" no console.

11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

//1
let bemVindo = 'Seja bem Vindo';
console.log(bemVindo);

//2
let nome = 'Jean Martins';
console.log(`Olá ${nome}`);

//3
alert(`Olá ${nome}`);

//4
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

//5
let valor1 = 2;
let valor2 = 4;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

//6
let resultadoSubtracao = valor1 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSubtracao}`);

//7
let idade = prompt('Qual a sua idade?');
if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

//8
let numero = prompt('Digite um número');
if (numero > 0) {
    console.log(`O número ${numero} é positivo`);
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo`);
} else {
    console.log('Seu número é um zero');
}

//9
let cont = 1;
while (cont <= 10) {
    console.log(cont);
    cont++
}

//10
let nota = 6;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//11
let numeroAleatorio1 = Math.random();
console.log(`O número aleatório é ${numeroAleatorio1}`);

//12
let numeroAleatorio2 = Math.random() * 10 + 1;
console.log(`O número aleatório é ${numeroAleatorio2}`);

//13
let numeroAleatorio3 = Math.random() * 1000 + 1;
console.log(`O número aleatório é ${numeroAleatorio3}`);