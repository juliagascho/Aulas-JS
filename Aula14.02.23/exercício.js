// Exercício 1:

let peso = 50;
let altura = 1.65;
let IMC = peso / (altura * altura);
console.log(`Meu IMC é ${IMC}.`);

//ou:
let IMCnovo = peso / (altura ** 2);
console.log(`Meu IMC é ${IMCnovo.toFixed(2)}.`);

// .toFixed(2) entre as chaves, para utilizar apenas 2 casas após a vírgula.


// Exercício 2:
console.log("\n")
let raio = 2;
const pi = 3.14;
let area = pi * raio * raio;
console.log(`A área do círculo é ${area}.`);

// Exercício 3:
console.log("\n")
let circunferencia = 2 * pi * raio;
console.log(`A CIRCUNFERÊNCIA do círculo é ${circunferencia}.`);

// ou:

let circ = 2 * pi * raio
console.log(`O valor do raio é ${raio} e do pi ${pi}.
Logo a circuferencia é: ${circ}.`);

// Exercício 4:
console.log("\n")
let celsius = 25;
let fahrenheit = celsius * 1.8 * 32
console.log(`25 graus celsius é igual a ${fahrenheit} fahrenheit.`)