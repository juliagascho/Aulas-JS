/*
1.5 Funções
1. Escreva uma função que receba um número e retorne seu dobro.
*/

function dobro(n1){
    return n1 * 2;
}
console.log(dobro(5));

console.log("------------------------"); 


// 2. Escreva uma função que receba um número e retorne seu quadrado.

function quadrado(n1){
    return n1 ** 2
}
console.log(quadrado(5));



console.log("------------------------"); 

// 3. Escreva uma função que receba nome, idade, endereço e retorne uma mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça uso da interpolação de strings.

function perfil(nome, idade, cidade){
    return `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
}

console.log(perfil("Julia", "32", "Curitiba"));

console.log("------------------------"); 

//4. Escreva uma função que receba dia, mês e ano e retorne a data por extenso no formato "DD/MM/AAAA".

function data(dia, mes, ano){
    if(dia < 10){
        dia = "0" + dia        
    }
    if(mes < 10){
        mes = "0" + mes
    }
    return `${dia}/${mes}/${ano}`;
}
console.log(data(26, 2, 2023));
console.log(data(6, 12, 2023));

console.log("------------------------"); 

// 5. Escreva uma função que receba um preço de um produto e um percentual. Retorne o valor aplicado ao desconto.

function desconto(preco, percentual){
    desconto = preco * (percentual/100)
    return preco - desconto
}

console.log(`O valor do produto com desconto é ${desconto(20, 10)}.`)

console.log("------------------------");


// 6. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetir(palavra, numero){
    let resultado = "";
    for(let i = 1; i <= numero; i++) {
    resultado += palavra
    } 
    return resultado; 
}
console.log(repetir("abacate", 10));


console.log("------------------------"); 

// 7. Escreva uma função que recebe outra função e invoca ela.

// funções dos exercícios 1 e 2
console.log(quadrado(dobro(2)));


console.log("------------------------"); 

// 8. Transforme os itens 1, 2 e 3 em arrow function expressions.*/

//1:
const cDobro = (n1) => n1 * 2;
console.log(cDobro(5));

console.log("\n");

//2: 
const cQuadrado = (n1) => n1 ** 2;
console.log(cQuadrado(5));

console.log("\n");

//3:
const cPerfil = (nome, idade, cidade) => `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(cPerfil("Julia", "32", "Curitiba"));