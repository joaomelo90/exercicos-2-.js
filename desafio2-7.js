//faça um programa onde leia um numero e diga se ele é:impar, par, e um numero primo e impar e par e divisivel por 5.

let numero = parseInt(6);
let ehPrimo = true;

if (numero % 2 === 0) {
    console.log(`${numero} é um número par.`);
} else {
    console.log(`${numero} é um número ímpar.`);
}

if (numero === 2) {
    console.log(`${numero} é um número primo.`);
} else if (numero > 2) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}

if (numero % 5 === 0) {
    console.log(`${numero} é divisível por 5.`);
} else {
    console.log(`${numero} não é divisível por 5.`);
}

//logica do rodolfo devclub

const number = 10

if (number % 2 === 0) {
    if (number % 5 === 0) console.log("onumero e par e divisivel por 5")
    else console.log("o numero e par NÂO e DIVISIVEL por 5")

    for (let i = 2; i < number; i++)
        if (number % i === 0)
        break  
        console.log("ele e impar mas não e primo")
}
        else{ 
            if (i === number -1) console.log("ele e numero primo")
}

