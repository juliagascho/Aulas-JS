// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

let nota1 = 5;
let nota2 = 4;
let nota3 = 8;
let media = (5 + 4 + 8) / 3;
if(media >= 7){
    console.log(`Você está aprovado com nota ${media.toFixed(2)}.`)
} else if(media >= 5 && media < 7){
    console.log(`Você tem nota ${media.toFixed(2)} e precisa de aulas de reforço.`)
} else if(media < 5){
    console.log(`Você foi reprovado com nota ${media.toFixed(2)}.`)
}
console.log("\n");

// Exercício II
// Simule a tabela do IMC com base no valor calculado no exercício anterior. E indique o status com base no valor do IMC.

let peso = 52;
let altura = 1.65;
let IMC = peso / (altura * altura);

if(IMC < 18.5){
    console.log(`Seu IMC é ${IMC.toFixed(2)} e você está abaixo do peso.`);
} else if(IMC >= 18.5 && IMC < 25) {
    console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com peso normal.`);
} else if(IMC >= 25 && IMC < 30){
    console.log(`Seu IMC é ${IMC.toFixed(2)} e você está no sobrepeso.`);
} else if(IMC >= 30 && IMC < 35){
    console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com obesidade grau I.`);
} else if(IMC >= 35 && IMC <= 40){
    console.log(`Seu IMC é ${IMC.toFixed(2)} e você está no com obesidade grau II.`);
} else if(IMC >= 40){
    console.log(`Seu IMC é ${IMC.toFixed(2)} e você está com obesidade grau III ou obesidade mórbida.`);
}
console.log("\n");

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

let a = 5;
let b = 10;

if (a > b) {
  console.log("a é maior do que b");
} else if (a < b) {
  console.log("b é maior do que a");
} else {
  console.log("a e b são iguais");
}