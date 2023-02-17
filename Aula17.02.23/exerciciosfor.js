//Exercício I: Faça a tabuada do 5
//1 x 5 = 5
//...
//10 x 5 = 50


for(let mult = 1; mult <= 10; mult++){
    let resultado = mult * 5;
    console.log(`${mult} x 5 = ${resultado}`);
    }
    
console.log("\n ou \n")  

for(let i = 1; i <= 10; i++){
    console.log(`${i} x 5 = ${i * 5}`);
    }

console.log("------------------------");    

//Exercício II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE).

for(let numeroimpar = 1; numeroimpar <= 99; numeroimpar++){
    if(numeroimpar %2 !== 0) {
        console.log(`O número ${numeroimpar} é ímpar.`); 
        }
    }

console.log("\n ou \n")  

for (let numero = 1; numero <= 99; numero++) {
    if (numero % 2 === 1){
        console.log("Impar: " + numero);
    }
    }

console.log("------------------------");    

 //Exercícios III: Conte de 50 até 75.

 for(let i = 50; i <= 75; i++){
    console.log(i)
    }