// faça um programa onde leia um numero e diga se ele e par ou impar.

let numero = parseInt(6);                                      //const number =10
                                                               //if(number % 2 ===0) console.log("e par")
if (numero % 2 === 0) {                                        //else console,log("e impar")
  console.log(`${numero} é um número par.`);
} else {                                               //todo numero dividido por 2 que não sobra resto e par
  console.log(`${numero} é um número ímpar.`);
}
