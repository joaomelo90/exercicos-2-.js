//crie 5 objetos neste formato{nome:"idade" sexo:"profissão","nacionalidade"}
//ao rodar o programa, deve imprimir se a pessoa deve ser maior de idade e brasileirapara ser aprovada.
//faça um programa onde on jurados vão dar explicaçõ para cada nota dada.
//são permitidas notas de 0 a 10.
//cada nota deve conter uma mensagem diferente

// Cria 5 objetos com informações de pessoas
const pessoa1 = {nome: "João", idade: 25, sexo: "Masculino", profissao: "Engenheiro", nacionalidade: "Brasileira"};
const pessoa2 = {nome: "Maria", idade: 19, sexo: "Feminino", profissao: "Estudante", nacionalidade: "Brasileira"};
const pessoa3 = {nome: "Pedro", idade: 30, sexo: "Masculino", profissao: "Médico", nacionalidade: "Argentino"};
const pessoa4 = {nome: "Lucas", idade: 17, sexo: "Masculino", profissao: "Estudante", nacionalidade: "Brasileira"};
const pessoa5 = {nome: "Ana", idade: 28, sexo: "Feminino", profissao: "Advogada", nacionalidade: "Espanhola"};

// Função que verifica se a pessoa é maior de idade e brasileira
function verificaAprovacao(pessoa) {
  if (pessoa.idade >= 18 && pessoa.nacionalidade === "Brasileira") {
    console.log(`${pessoa.nome} está aprovado.`);
  } else {
    console.log(`${pessoa.nome} está reprovado.`);
  }
}

// Verifica a aprovação de cada pessoa criada
verificaAprovacao(pessoa1);
verificaAprovacao(pessoa2);
verificaAprovacao(pessoa3);
verificaAprovacao(pessoa4);
verificaAprovacao(pessoa5);



// Define as mensagens para cada nota


const nota = 7
switch (nota){
    case 0:
        console.log("Desempenho muito ruim.")
        break;
        case 1:
        console.log("Desempenho muito ruim.")
        break;
        case 2:
        console.log("Desempenho muito ruim.")
        break;
        case 3:
        console.log("Desempenho ruim.")
        break;
        case 4:
        console.log("Desempenho ruim.")
        break;
        case 5:
        console.log("Desempenho razoável.")
        break;
        case 6:
        console.log("Desempenho bom.")
        break;
        case 7:
        console.log("Desempenho bom.")
        break;
        case 8:
        console.log("Desempenho excelente.")
        break;
        case 9:
        console.log("Desempenho excelente.")
        break;
        case 10:
        console.log("Desempenho excelente.")
        break;
}