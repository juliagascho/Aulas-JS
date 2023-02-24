/*
1 Exercícios
1.1 Variáveis e operadores

1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é:

C = F − 32  / 1.8

2. Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada nomeCompleto e realize a concatenação de nome e sobrenome com template strings.

3. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

4. Crie duas variáveis que representam as dimensões (em km) de um terreno: comprimento e largura. Calcule a área deste terreno, em seguida converta para hectares. Nota: 1 km2 equivale a 100 hectares.

5. Crie uma variável que armazena uma temperatura em Kelvin. Converta para Celsius. A equação é:
C = K − 273
*/

//1

let tempF = 90;
let tempC = (tempF - 32)/1.8
console.log(`A temperatura ${tempF} Fahrenheit é igual a ${tempC.toFixed(2)} graus Celsius.`)

console.log("------------------------");   

//2

let nome = "Julia"
let sobrenome = "Gascho"
let nomeCompleto = nome + " " + sobrenome
console.log(`Meu nome completo é ${nomeCompleto}.`)

console.log("------------------------");   

//3

let nota1 = 8;
let nota2 = 9;
let nota3 = 6;
let nota4 = 7;
let nota5 = 5;
let mediaPonderada = ((nota1 * 3) + (nota2 * 2) + (nota3 * 1) + (nota4 * 4) + (nota5 * 5)) / 15
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`)

console.log("------------------------");  

//4

let largura = 0.02
let comprimento = 0.1
let areaEmKm2 = largura * comprimento
let areaEmHa = areaEmKm2 * 100
console.log(`A área do terreno é ${areaEmHa} Ha.`)

console.log("------------------------");  

//5

let tempK = 289
tempC = tempK - 273
console.log(`A temperatura ${tempK} K é equivalente a ${tempC}°C.`) 