/*
1.4 Estruturas de repetição
1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).
3. Use um laço for para imprimir na tela a sequência de Fibonacci até o décimo termo.
4. Mostre a seguinte figura com utilização de laços:
*
**
***
****
*****
5. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).
6. Mostre apenas os números ímpares de 1 até 1000.
*/

//1
let numero = 2;

while (numero <= 10) {
  console.log(numero);
  numero += 2;
}

console.log("------------------------"); 

//2

let mult = 1;

for(mult = 1; mult <= 10; mult++){
    let resultado = mult * 7
    console.log(`7 x ${mult} = ${resultado}`)
}

console.log("------------------------"); 

mult = 1

for(let i = 1; i <= 10; i++){
    let resultado = mult * 7
    console.log(`7 x ${mult} = ${resultado}`)
    mult += 1
}

console.log("------------------------"); 

//3

let primeiroTermo = 0;
let segundoTermo = 1;
for (let i = 1; i <= 10; i++) {
const proximoTermo = primeiroTermo + segundoTermo;
primeiroTermo = segundoTermo;
segundoTermo = proximoTermo;
console.log(primeiroTermo);
}

console.log("------------------------"); 

//4

let a = "*";

for(let i = 0; i < 6; i++){
    console.log(`${a}`)
    //a = a + "*"
    a += "*"
}

console.log("------------------------"); 

//5

for(let numero = 10; numero >= 1; numero--){
    console.log(numero)
}

console.log("------------------------"); 

//6

for(let i = 1; i <= 1000; i++){
    if(i % 2 != 0){
        console.log(i)
    }    
}