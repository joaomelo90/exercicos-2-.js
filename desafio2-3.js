//faça um programa que gere um numero aleatorio entre 1 e 10, esse numero e o numero 'ganhador'.
//então ele tambem ira gerar um numero aleatorio entre 1 e 10, e verifica se a pessoa ganhou ou não.
//em caso de ter ganhado, mostre o premio, se não ganhou, mpstre outra mensagem.
// Gera um número aleatório entre 1 e 10 como o número ganhador
const numeroGanhador = Math.floor(Math.random() * 10) + 1;

// Gera um número aleatório entre 1 e 10 como o número escolhido pela pessoa
const numeroEscolhido = Math.floor(Math.random() * 10) + 1;

// Verifica se a pessoa ganhou ou não
if (numeroEscolhido === numeroGanhador) {
  console.log(`Parabéns, você ganhou! O número ganhador era ${numeroGanhador}.`);
  // mostrar o prêmio aqui
} else {
  console.log(`Que pena, você não ganhou. O número ganhador era ${numeroGanhador}.`);
  // mostrar outra mensagem ou agradecimento aqui
}



//este eu coloquei o numero
// Gera um número aleatório entre 1 e 10 como o número ganhador
const numeroGanhador1 = Math.floor(Math.random() * 10) + 1;

// Solicita que o usuário insira um número entre 1 e 10 como o número escolhido
const numeroEscolhido1 = parseInt(5);

// Verifica se a pessoa ganhou ou não e mostra o número ganhador em caso de vitória
if (numeroEscolhido1 === numeroGanhador1) {
  console.log(`Parabéns, você ganhou! O número ganhador era ${numeroGanhador1}.`);
  // mostrar o prêmio aqui
} else {
  console.log(`Que pena, você não ganhou. O número ganhador era ${numeroGanhador1}.`);
  // mostrar outra mensagem ou agradecimento aqui
}

//Neste exemplo, utilizamos a função Math.random() para gerar dois números aleatórios: o numeroGanhador (entre 1 e 10) e o numeroEscolhido (também entre 1 e 10). 
//Em seguida, comparamos esses números utilizando a estrutura de controle if. Se o número escolhido pela pessoa for igual ao número ganhador, a mensagem "Parabéns, você ganhou! O número ganhador era [numeroGanhador].
//será impressa na tela. Se não, a mensagem "Que pena, você não ganhou. O número ganhador era [numeroGanhador]." será exibida. Você pode inserir uma mensagem personalizada de prêmio ou agradecimento no lugar dos comentários indicados no código.

//segundo exemplo colocamos o numero 5 como o numero escolhido
//Neste exemplo, utilizamos a função parseInt() para converter a entrada do usuário (que é uma string) em um número inteiro.
