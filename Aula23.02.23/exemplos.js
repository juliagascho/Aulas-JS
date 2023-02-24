// Aula 23.02
// Tópicos: funções

// Função = procedimento = método (depende do contesto).
// nos permite diminuir a repetição de códigos

// Sintaxe básica:
function dizOla() { //declaração de função / função de nome dizOla
    console.log("Hello world!")
}

// Invocação = chamada:
dizOla(); // após a invocação vai rodar o Hello world!


console.log("------------------------"); 

function exemplo01(){
    let a = 1;
    let b = 4;
    console.log(`A soma é ${a + b}`);
}
exemplo01();

console.log("------------------------"); 

let num1 = 3;
let num2 = 5;

function exemplo02(){
    console.log(`A soma é ${num1 + num2}`);
}

exemplo02();

console.log("------------------------"); 

num1 = 10;
num2 = 15;
exemplo02();

console.log("------------------------"); 

// Parâmetros = entrada = o que a função precisa para executar
// parâmetros são informações dinâmicas

// parâmetros a e b:
function soma(a, b){
    console.log(`A soma de ${a} + ${b} é igual a ${a + b}`);
}

soma(20, 75);

console.log("------------------------"); 

function calculadora(a, b, c){
    console.log(`A soma é ${a + b + c}`);
    console.log(`A multiplicação é ${a * b * c}`);
}
calculadora(2, 3, 4);


console.log("------------------------"); 

let numero1 = 50;
let numero2 = 25;
let numero3 = 40;
calculadora(numero1, numero2, numero3) // argumentos = valores passados para os parâmetros


console.log("------------------------"); 


// Declare uma função que recebe 3 notas e mostra a média entre elas.



function media (nota1, nota2, nota3){
    let resultado = (nota1 + nota2 + nota3)/3
    console.log(`A média é ${resultado}`);
    return resultado;
}

//let nota1 = 5
//let nota2 = 6
//let nota3 = 8
//media(nota1, nota2, nota3);


console.log("------------------------"); 

// return resultado; // indica que o valor da variavel será extrnalizado


let medBiologia = media(7, 6, 5);
let medMatematica = media(8, 10, 5);
let medPortugues = media(5, 4, 7);

console.log (`Biologia = ${medBiologia}`);
console.log (`Matematica = ${medMatematica}`);
console.log (`Português = ${medPortugues}`);

// Função ENTRADA(parametro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x)
// f = função
// x = parametro
// y = resultado/retorno

console.log("------------------------"); 

function estaAprovado(nota1, nota2, nota3){
    let med = media(nota1, nota2, nota3);

    
    if(med >= 7){
        console.log(`Aprovado`)
        return true;
    } else {
        console.log(`Reprovado`)
        return false;
    }
}
let statusAluno = estaAprovado(8, 7, 9);
console.log(statusAluno)
