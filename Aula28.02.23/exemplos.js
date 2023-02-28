// AULA 28/02
// forEach e map

let numeros = [1, 2, 3];

function mostraValor(valor){
    console.log(valor);
}



//  for(let num of numeros) {
//    mostraValor(num);   // para cada elemento da array ele executa o que está aqui dentro
//  }

// for(let i = 0; i < numeros.length; i++){
//    mostraValor(numeros[i]);   // para cada elemento da array ele executa o que está aqui dentro
// }

// esses dois FOR acima fazem exatamente a mesma coisa.

// console.log("------------------------"); 

// forEach:
//   numeros.forEach(mostraValor);  // o parametro do forEach vai ser uma função
// o resultado vai ser o mesmo dos outros for, porém esse método é mais simplificado.


numeros.forEach((numero) => {
    console.log(numero);       // numero é apenas o nome, poderia ser item, elemento, batata, etc - vale apenas dentro dessa função.
});


console.log("------------------------"); 

// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let soma = 0;

numeros.forEach((numero) => {
    soma += numero;
});

console.log(`A soma é ${soma}.`)


console.log("------------------------"); 

let nomes = ["Pedro", "Paulo", "João", "Lucas"];
let nomesCaixaAlta = [];

//  for(let nome of nomes){
//    nomesCaixaAlta.push(nome.toUpperCase())
//  }
//  console.log(nomesCaixaAlta);

nomes.forEach((nome) => {
    nomesCaixaAlta.push(nome.toUpperCase())
})
console.log(nomesCaixaAlta);

console.log("------------------------"); 


// map -> aplica transformaço para cada elemento retornado, transforma e retorna em uma array nova
let nomesCaixaAlta2 = nomes.map((nome) => {   // declaramos outra variável aqui porque já existia a nomesCaixaAlta
    return nome.toUpperCase();
})

console.log(nomes);  // array original
console.log(nomesCaixaAlta2);  // array transformado


let nomesCaixaBaixa = nomes.map((nome) => {   
    return nome.toLowerCase();
})
console.log(nomesCaixaBaixa);


let nomesExclamacao = nomes.map((nome) => {   
    return nome + "!";
})
console.log(nomesExclamacao);

// parametro: genérico, representa qualquer coisa
// argumento: valor específico

console.log("------------------------"); 

let dados = [1, 2, 3, 4, 5];
let dadosPor100 =  dados.map((dado) => {return dado * 100} );
console.log(dadosPor100);

console.log("------------------------"); 


// Exercício I: Crie um array de palavras, para cada palavra verifique se o tamanho é menor que 5, se for transforme em BATATA. Caso contrário, retorne a palavra original em caixa alta.

let palavras = ["banana", "laranja", "maçã", "uva"];

let palavras2 = palavras.map((palavra) => {   
                    if(palavra.length < 5){
                         return "BATATA"
                    } else {
                        return palavra.toUpperCase()
                    }
})

console.log(palavras2)


console.log("------------------------"); 


// FILTER - aplica um teste em cada elemento e quem passar faz parte do novo array. A IDEA É TESTAR E NÃO TRANSFORMAR, COMO NO CASO DO MAP

//  let temps = [29, 5, 10, -4, 15, -20]; //celsius
//  let tempsPositivas = [];
//  
//  for (let t of temps){
//      if( t > 0){
//          tempsPositivas.push(t)
//      }
//  }
//  console.log(tempsPositivas);

let temps = [29, 5, 10, -4, 15, -20]; //celsius
let tempsPositivas = temps.filter((temp)=>{    // APLICA ESSA FUNÇÃO PARA TESTAR CADA ITEM
    if (temp> 0){
        return true   // temp pode fazer parte do novo array
    } else {
        return false   // temp não pode fazer parte do novo array
    }
})
console.log(tempsPositivas);


let tempsPositivas2 = temps.filter((temp) => temp > 0);
console.log(tempsPositivas2);


// RESUMO GERAL
// forEach: percorre cada elemento - NÃO GERA NOVO ARRAY - faz a mesma coisa que o FOR ou FOR OF
// filter: testa cada elemento e o que for verdadeiro vai pro novo array - GERA NOVO ARRAY
// map: percorre um por um e transforma elementos
