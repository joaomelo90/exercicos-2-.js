//faça um programa que receba 3 numeros inteiros, e deve imprimir qual e o maior,e o menor.

// Recebe 3 números inteiros do usuário
const num1 = parseInt(10);//const num1 = 10
const num2 = parseInt(5);//const num2 = 5
const num3 = parseInt(3);//const num3 = 3

// Inicializa as variáveis maior e menor com o valor do primeiro número
let maior = num1;//não faz
let menor = num1;

// Verifica se o segundo número é maior ou menor que o atual maior/menor
if (num2 > maior) {//if(num1 > num2 && num1 > num3)
  maior = num2;    //console.log("este numero e maior")
} else if (num2 < menor) {//if(num1 < num2 && num1 < num3)
  menor = num2;            //console.log("este numero e menor")
}

// Verifica se o terceiro número é maior ou menor que o atual maior/menor
if (num3 > maior) {
  maior = num3;
} else if (num3 < menor) {
  menor = num3;
}

// Imprime o maior e o menor número
console.log(`O maior número é ${maior} e o menor número é ${menor}.`);

//Neste exemplo, utilizamos a função parseInt() para converter as entradas do usuário (que são strings) em números inteiros. 
// Em seguida, inicializamos as variáveis maior e menor com o valor do primeiro número digitado.
//Em seguida, comparamos os outros dois números com o maior e o menor, atualizando as variáveis caso necessário.
//Por fim, imprimimos o maior e o menor número utilizando a função console.log().