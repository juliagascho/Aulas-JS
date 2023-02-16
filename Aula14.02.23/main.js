//Dia 14.02:
//Variáveis e operadores

// para criar uma variável, utiliza-se a palavra reservada let e coloca o nome dela na sequência = let (nome da variável)
// é necessário o uso de variáveis para guardar informações
// variável não pode começar com número e não tem espaço em nome de variável


let nomeCompleto; // camel case

nomeCompleto = "Julia Gascho"; //atribuição - dar um valor para a variável, quando for dados de texto usa aspas duplas

console.log(nomeCompleto);  // nome da variável, não vai aspas, o código procura a variável. porém se for texto, tem que colocar entre aspas duplas.

// console é como se fosse a variável escreva do portugol.



nomeCompleto = "Julia Lopes da Silva Gascho";  // reatribuição, redefini o valor da variável

console.log(nomeCompleto);

// o resultado do código vai mostrar os dois nomes na ordem em que foram atribuidos no código.



let idade = 33;
// nesse caso declarei a variável (idade) e já atribuí um valor para ela (32)
idade = 32;

console.log(idade);
// como eu reatribuí o valor antes de pedir para o código mostrar, ele vai mostrar apenass o último valor de idade atribuído.

//concatenação:
console.log("Meu nome é "+ nomeCompleto + ", e eu tenho " + idade + " anos.");

const cpf = "000.000.000-00";
// const faz com que a variável de nome cpf não possa ser reatribuída, o valor não muda, vai ser o mesmo valor em toda a vida do programa. Tanto let quanto const são declarações de variáveis, mas com let pode alterar o valor da variável depois, com o const não tem como aalterar o valor.


//Tipos:

let golsSofridos = 3; // número = number --> variável que guarda uma variável de tipo número (number) - dá para ver o que a variável tá guardando passando o mouse em cima do nome da variável
let chanceDerrota = 0.55; // número decimal 
let posseBola = 33.57; //33,57
let nomeTime = "PSG"; // tipo STRING --> uma cadeia de caracteres armazena esse texto, tudo que estiver dentrro de aspas é considerado texto pelo programa
let patrocinio; // esta variável esstá com valor não definido, por isso é do tipo ANY
patrocinio = "SoulCode"; 

// Variáveis do tipo boolean = 2 valores possíveis (true ou false)
let timeGanhou = true; // Lê: é verdade que o timeGanhou
let timePerdeu = false; // Lê: É falso que o timePerdeu

// Operadores aritméticos:
let soma = 200 + 100; // o programa vai guardar o número 300 dentro da variável
let sub = 100 - 55;
let mult = 5 * 7;
let div = 400 / 25;
let resto = 8 % 3;
console.log("A soma é " + soma); // pode-se usar a concatenação para colocar o texto.
console.log(`A subtração é ${sub}.`); // a concatenação também pode ser utilizada colocando o texto entre crases e utilizando ${NOME DA VARIÁVEL}. Isso facilita quando tiver que fazer muita concatenação, por não precisar ficar fazendo com o +. TEMPLATE STRINGS = interpolação de strings.
console.log(mult);
console.log(div);
console.log(resto);

let expressao = soma + sub * div;
console.log(expressao);
let expressao2 = (soma + sub) * div + "\n";
console.log(expressao2);


let i = 0; 
// i = i + 1; // retribuindo o valor da variável utilizando o valor anterior, ou seja, o novo valor de i = 0 + 1, i = 1
// i = i + 1; // o novo valor de i = 1 + 1 = 2.
// i = i + 1; // o novo valor de i = 2 + 1 = 3.
i++; // incrremento = i = 1 + 1
console.log(i);
i++; // o novo valor de i = 1 + 1 = 2
console.log(i);
i--; // decremento i = i - 1;
console.log(i);


// Operadores relacionais (>, <, >=, <=, ==, !=)
let a = 3;
let b = 5;

console.log(a > b); // como a não é maior que b, o programa dá a resposta FALSE
console.log(a < b); // como a é MENOR que b, o programa dá a resposta TRUE
console.log(a <= b); // como a é MENOR OU IGUAL que b, o programa dá a resposta TRUE
console.log(a == b); // como a não é igual a b, o programa dá a resposta FALSE
console.log(a === "3"); // a é esstritamente igual a 3? não é por causa das aspas. O operador === compara VALOR e TIPO, por isso é interessante usar.



