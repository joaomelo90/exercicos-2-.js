//faça um programa onde ele leia 4 numeros. em cada caso, ele deve retornar a mensagem condizente:
//todos on numeros são impares, todos os numeros são pares.
//em caso negativo dos casos e cima, colocar uma mensagem ha numeros,pares e impares
let numeros = [1,2,3,4];

for (let i = 1; i <= 4; i++) {
  numeros.push(parseInt(1,2,3,4))
}

let todosPares = true;
let todosImpares = true;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    todosImpares = false;
  } else {
    todosPares = false;
  }
}

if (todosPares) {
  console.log("Todos os números são pares.");
} else if (todosImpares) {
  console.log("Todos os números são ímpares.");
} else {
  console.log("Há números pares e ímpares.");
}





const numero1 = 34
const numero2 = 27
const numero3 = 20
const numero4 = 58

if(numero1 % 2 === 0 && numero2 % 2 ===0 && numero3 % 2 ===0 && numero4 % 2 ===0){
    console.log("todos são pares")
} else if(numero1 % 2 !== 0 && numero2 % 2 !==0 && numero3 % 2 !==0 && numero4 % 2 !==0)
console.log("todos são impares")
else{
    console.log("todos misturados")
}