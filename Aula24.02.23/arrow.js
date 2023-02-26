/*
https://developer.mozilla.org/pt-BR/docs/web/javascript/reference/functions/arrow_functions

arrow = flecha

arrow function  possui uma sintaxe mais curta


(a, b) => {
    console.log ...
    return a + b
}

*/

// function ola(){
// console.log("Hello")
// }

// funções são tratadas como valor, ou seja, pode ser guardada dentro de uma variável
// posso passar a função como parâmetro de outra função
// posso retornar uma função dentro de outra função

const ola = () => {
    console.log("Hello");
}

ola();


console.log("------------------------"); 

// function soma (a, b){
// console.log(`A soma é ${a + b}`); 
// return a + b;   
// }


const soma = (a, b) => {
    console.log(`A soma é ${a + b}`); 
    return a + b;  
}

console.log(soma);
let resultadodaSoma = soma(1, 2);


console.log("------------------------"); 

// Exercício: Transforme as funções abaixo em arrow
/*
function criarNomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
function contar(maximo) {
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
  }
}
function imc(peso, altura) {
  let calculo = peso / (altura * altura);
  console.log(`O IMC é ${calculo}`);

  return calculo;
}
https://codeshare.io/8plnkv
*/

/*
const nomeCompleto = (nome, sobrenome) => {
    console.log(`O nome completo é ${nome + " " + sobrenome}`)
    return nome + " " + sobrenome;
}
*/

//ou:

const nomeCompleto = (nome, sobrenome) => nome + " " + sobrenome;

console.log(nomeCompleto("Julia", "Gascho"));


const contar = (maximo) => {
    for (let i = 1; i <= maximo; i++) {
        console.log(i);
    } 
}

contar(20);


const imc = (peso, altura) => {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);
    return calculo;
  }

  imc(50, 1.65);