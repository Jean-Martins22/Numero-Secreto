/*
1 - Crie uma lista vazia, com o nome listaGenerica.
2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes 
elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
3 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
*/

//1
let listaGenerica = [];

//2
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//4
let listaDeNomes = ['Gerald', 'Triss', 'Dandelion'];
console.log(listaDeNomes[0]);

//5
console.log(listaDeNomes[1]);

//6
console.log(listaDeNomes[2]);