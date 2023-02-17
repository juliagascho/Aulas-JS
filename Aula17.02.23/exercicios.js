//Exercício I: Faça a tabuada do 5
//1 x 5 = 5
//...
//10 x 5 = 50

let numero = 1

while (numero <= 10) {
    console.log(numero * 5);
    numero++;
    }

console.log("------------------------");

let mult = 1

while (mult <= 10) {
   let resultado = mult * 5;
   console.log(`${mult} x 5 = ${resultado}`);
   mult++;
    }

console.log("------------------------");

//Exercício II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE).

let numeroimpar = 3

while (numeroimpar <= 99) {
    if(numeroimpar %2 !== 0){
        console.log(`O número ${numeroimpar} é ímpar.`);
        }
    numeroimpar++;
    }

console.log("\n");

let num = 1;
while(num <=99){
        console.log(num);
        num+=2;
    }

console.log("------------------------");

    //Exercícios III: Conte de 50 até 75.

let numero2 = 50

while (numero2 <= 75) {
  console.log(numero2);
  numero2++; 
}