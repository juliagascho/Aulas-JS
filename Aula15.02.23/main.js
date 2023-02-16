// Operadores lógicos: NOT(!), AND(&&), OR(||)

// Operador NOT (!) = inverte o valor lógico que é sempre true ou false. Só pode ser utilizado em variáveis booleanas.
let ligado = true;
let desligado = !ligado;

console.log(ligado);
console.log("\n");

console.log(desligado);
console.log("\n");

/* 
    Tabela NOT
    !true = false
    !false = true
*/

// Operador AND (&&) = todas as expressões tem que ser true
let gasolinaTanque = 1;
let naReserva = gasolinaTanque < 5;
let podeAbastecer = desligado && naReserva; // se uma das expressões for falsa, tudo vira falso, porque é E
let podeViajar = ligado && !naReserva;
let ficaEmCasa = !podeViajar;

console.log(naReserva);
console.log("\n");

console.log(podeAbastecer);
console.log("\n");

console.log(podeViajar);
console.log("\n");

console.log(ficaEmCasa);
console.log("\n");

/* 
    Tabela Verdade AND - E (&&)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

// Operador OR (||) = basta uma das expressões ser true
let taPodendo = podeViajar || podeAbastecer;
console.log(taPodendo); // como as duas exprressões são falsas, taPodendo dá false também
console.log("\n");

/* 
    Tabela Verdade OR - OU (||)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

let idade = 30;
let podeBeber = idade >= 18 && idade <= 59; // De 18 até 59 anos
console.log(podeBeber);
let podeDirigir = idade >= 18 || idade <= 59; // Basta uma das duas ser verdadeira 
console.log(podeDirigir);
console.log("\n");

let media = 8.5;
let sabeIngles = true;
let aprovado = media >= 7;
console.log(aprovado || sabeIngles)
// o candidato será contratado caso esteja aprovado e saiba inglês.
let contratado = aprovado && sabeIngles;
console.log(contratado);
console.log("\n");

let x = 5;
let y = 10;
let expressao = (x > 3) && (y < 20); // true
let expressao2 = (y != 20) || (x >= 5); // true
let expressao3 = (y === 100) || (x < 10); //true
let expressao4 = !(x == 5); // false = !true

// Estruturas condicionais (IF-ELSE)

/*
    if(condicao) {
            // Faz algo se a condicao for verdadeira.
            }
*/

let idadeUsuario = 15;
if(idadeUsuario >= 18) { // executa o que tá aqui dentro se for true, se for false, não mostra nada, a não seer que use o else.
    console.log("Você é maior de idade!")
} else { // é o caso contrário
    console.log("Você é menor de idade!")
}
console.log("\n");

let nota = 8.5;
if(nota >= 7) {
    console.log(`Você está aprovado com nota ${nota}.`);
} else {
    console.log("Você está reprovado, tete novamente");
}
console.log("\n");

let numero = 0;
if(numero > 0) {
    console.log("O número é positivo.");
} else if(numero < 0){
    console.log("O número é negativo.")
} else {
    console.log("O número é zero.")
}
console.log("\n");

if(idadeUsuario >= 18 && idadeUsuario <= 59){
    console.log("Você pode beber! com moderação.")
} else {
    console.log("Você não pode beber!")
}
console.log("\n");


