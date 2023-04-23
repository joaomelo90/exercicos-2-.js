//faca um programa qu everifique se uma pessoa e brasileira ou não, deve ser um objeto.


// Define um objeto com as informações da pessoa
const pessoa = {
    nome: "João",
    idade: 30,
    nacionalidade: "Brasileiro",
    // outros dados pessoais...
  };
  
  // Verifica se a pessoa é brasileira
  if (pessoa.nacionalidade === "Brasileiro") {
    console.log(`${pessoa.nome} é brasileiro.`);
  } else {
    console.log(`${pessoa.nome} não é brasileiro.`);
  }

  //Neste exemplo, definimos um objeto pessoa com as informações da pessoa, incluindo o seu nome, idade e nacionalidade. 
  // Em seguida, utilizamos a estrutura de controle if para verificar se a nacionalidade da pessoa é "Brasileiro".
  //Se for o caso, a mensagem ${pessoa.nome} é brasileiro. será impressa na tela. 
  //Caso contrário, ou seja, se a nacionalidade da pessoa for diferente de "Brasileiro", a mensagem ${pessoa.nome} não é brasileiro. será exibida.

//objeto
  const pessoa2 = {
    nome : "miguel",
    idade: 6,
    nacionalidade: "Alemão",

  };

if (pessoa2.nacionalidade === "Brasileiro") {//se nacionalidade for igual a brasileiro
console.log(`${pessoa2.nome} é Brasileira`);
}

else{
    console.log(`${pessoa2.nome} não é Brasileiro`);
}