// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc (peso, altura){
    let resultado = peso / (altura * altura);
    console.log(`O IMC é ${resultado}`);
    return resultado
}
let imcBatata = imc(52, 1.65);
let imcCenoura = imc(70, 1.74);
let imcLeo = imc(67, 1.72);
console.log(imcLeo);

console.log("------------------------"); 

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem (numero){
    let calculo = numero * 100
    return `${calculo.toFixed(1)}`;
}

let valorFormatado = porcentagem(0.456);
console.log (valorFormatado);

console.log("------------------------"); 

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function sinal (num){

    if(num < 0){
        console.log(`É negativo`)
        return true;
    } else {
        console.log(`Não é negativo`)
        return false;
    }
}

sinal(5);


console.log("\n"); 

function ehNegativo(num){  // poderia fazer apenas return < 0
    if (num < 0){
        return true;
    } else {
        return false;
    } 
}

console.log(ehNegativo(200));

console.log("------------------------"); 

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat


const number = 123456.789;

console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number));

console.log("\n"); 

function formataBRL (number){
    const reais = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
    return reais;
}
console.log(formataBRL(2354));

console.log("\n"); 

function dinheiro(n3) {
    return n3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
var val3 = dinheiro(100)
console.log(val3);

console.log("------------------------"); 

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

function contar(maximo){
    for(let i = 1; i <= maximo; i++) {
        console.log(i);
    }    
}
contar(100);
// se fizer console.log (contar(100)) ele devolve undefined, porque não tem return

console.log("------------------------"); 

//Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.


function nomeCompleto (nome, sobrenome){
    return nome + " " + sobrenome
}

console.log(nomeCompleto("Julia", "Gascho"))


console.log("------------------------"); 

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

function areaCirculo(raio){
    return Math.PI * (raio * raio)
}

//ou:
/*function(area(raio)){ 
     return(Math.PI*raio*raio).toFixed(2) 
    } 
    var res2 = area(5) 
    console.log(res2);
    */


// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido


function nivelCirculo(area){
    if(area >= 1 && area <= 20){
        return 'Nível I'
    }else if(area >= 21 && area <= 40){
        return 'Nivel II'
    }else{
        return 'Nivel Inválido'
    }
}

console.log(nivelCirculo(areaCirculo(3)))

console.log(areaCirculo(3))

//ou:
/* function nivel(n5) { 
        if (n5>=1 && n5<=20) { 
            return "Nível I" 
        } else if(n5>=21 && n5<=40){ 
            return "nivel II" 
        } else { 
            return "Nível Inválido" 
        } 
    } 
    console.log(nivel(area(3))) */