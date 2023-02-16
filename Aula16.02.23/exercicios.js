// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

let idade = 19;
let dinheiro = 2;
let troco = dinheiro - 20;

if(idade >= 18 && dinheiro >= 20){
    console.log(`Você pode comprar a bebida e agora possui R$${troco}.`);
} else{
    console.log(`Você não pode comprar bebida.`);
}

console.log("\n");


// Outra maneira de fazer:

let idade2 = 19;
let dinheiro2 = 200;

if(idade2 >= 18 && dinheiro2 >= 20){
    console.log(`Você pode comprar a bebida.`);
    dinheiro3 = dinheiro2 - 20;
    console.log(`Você agora possui R$${dinheiro3}.`);
} else{
    console.log(`Você não pode comprar bebida.`)
}


console.log("\n");


// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let salario = 300
let expressao1 = salario + 50
let expressao2 = salario + 25

if(salario < 500){
    console.log(`Você recebeu um aumento de R$ 50,00 e seu salario atual é de ${expressao1} reais.`)
} else if(salario >= 500 && salario <= 1000){
    console.log(`Você recebeu um aumento de R$ 25,00 e seu salario atual é de ${expressao2} reais.`)
} else{
    console.log(`Você não recebeu aumento e seu salario atual é de ${salario} reais.`)
}

console.log("\n");


// Correção exercício 2:

let salario2 = 80;

if(salario2 < 500){
    salario2 = salario2 + 50; // ou salario += 50
} else if(salario2 >= 500 && salario2 <= 1000){
    salario2 = salario2 + 25
} else{
    console.log("Não houve aumento de salário.")
}
    console.log(salario2);

console.log("\n");
console.log("-----------------------------");
console.log("\n");

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let numero = 5; // se aqui for declarada uma variavel numero, nos cases tem que estar também como número. Se declarar como string (texto), tem que estar entre aspas, e nos cases também vai ter que colocar o valor entre aspas.

switch(numero) {
    case 1:
        console.log("Domingo");
        break; 
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break; 
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default: 
        console.log(`Este dia da semana não existe!`);
}

console.log("\n");
console.log("-----------------------------");
console.log("\n");

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = "sanduíche";

if(comida === "batata" || comida === "carne" || comida === "chocolate"){
    console.log("Humm, adoro!")
} else if(comida === "pizza" || comida === "sanduíche"){
    console.log("Às vezes.")
} else {
    console.log("Quero não!")
}

console.log("\n");

switch(comida) {
    case "batata":
        console.log("Humm, adoro!");
        break; 
    case "carne":
        console.log("Humm, adoro!");
        break;
    case "chocolate":
        console.log("Humm, adoro!");
        break;
    case "pizza":
        console.log("Às vezes.");
        break; 
    case "sanduíche":
        console.log("Às vezes.");
        break;
    default: 
        console.log("Quero não!");
}


console.log("\n");

switch(comida) {
    case "batata":
    case "carne":
    case "chocolate":
        console.log("Humm, adoro!");
        break; 
    case "pizza":
    case "sanduíche":
        console.log("Às vezes.");
        break; 
    default: 
        console.log("Quero não!");
}

console.log("\n");

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let numeropar = 13

if(numeropar %2 === 0){
    console.log("O número é par.")
} else {
    console.log("O número é ímpar.")
}