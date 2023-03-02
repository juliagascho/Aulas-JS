/*
1.2 Estruturas condicionais
1. Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba qual destes números é o maior.
2. Crie três variáveis que representam os três lados de um triângulo. Aplica a seguinte regra para definir se o triângulo é possível: Se a soma de dois lados é maior que o terceiro lado.
3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 -Segunda, ... 7 -Sábado). Com base no valor indique se é final de semana ou dia de útil.
6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: Caso 1) É um número divisível por 4, mas não é divisível por 100. Caso 2) É um número divisível por 4, por 100 e por 400.
*/

//1

let a = 3;
let b = 8;
let c = 1;

if(a > b && a > c){
    console.log(`a é o maior número`);
} else if(b > a && b > c){
    console.log(`b é o maior número`);
} else{
    console.log(`c é o maior número`);
}

console.log("------------------------");  

//2

let lado1 = 2;
let lado2 = 3;
let lado3 = 4;

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado1 && lado2 + lado3 > lado1){
    console.log("O triângulo é possível.");
} else{
    console.log("O triângulo não é possível.");
}

console.log("------------------------");  

//3

let idade = -32;

if(idade < 0 || idade > 130){
    console.log("Idade inválida.");
}

console.log("------------------------"); 

//4

let salario = 3200;
let quantidadeDependentes = 6;
let salario30 = salario * 1.3;
let salario40 = salario * 1.4;

if(quantidadeDependentes === 0){
    console.log(`Você não teve aumento de salário e o mesmo continua R$ ${salario}.`);
} else if(quantidadeDependentes >= 1 && quantidadeDependentes <= 5){
    console.log(`Você teve aumento de salário de 30% e agora seu salário é de R$ ${salario30}.`);
} else {
    console.log(`Você teve aumento de salário de 40% e agora seu salário é de R$ ${salario40}.`);
}

//outra forma
console.log("\n"); 


if (quantidadeDependentes === 0) {
    console.log("Você não possui dependentes.");
    } else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5){
    salario += salario * 0.3;
    } else {
    salario += salario * 0.4;
    }
    console.log(`O salário é: ${salario.toFixed(2)}`);

console.log("------------------------"); 

//5

let diaDaSemana = 1


if(diaDaSemana === 1 || diaDaSemana === 1){
    console.log(`Hoje é final de semana`);
} else{
    console.log(`Hoje é dia útil`);
}

console.log("------------------------"); 

//6

let ano = 2023;

if(
    (ano % 4 == 0 && ano % 100 != 0) ||
    (ano % 4 == 0 && ano % 100 == 0 &&ano % 400 == 0 )
) {
    console.log(`O ano de ${ano} é bissexto.`);
} else{
    console.log(`O ano de ${ano} não é bissexto.`);
}


// ou


let ano2 = 2023

function exercicio2(ano2){
    if((ano2 % 4 == 0 && ano2 % 100 != 0) || (ano2 % 4 == 0 && ano2 % 100 == 0 && ano2 % 400 == 0)) {
        console.log(`O ano ${ano2} é bissexto.`);
    }else{
        console.log(`O ano ${ano2} não é bissexto.`);
    }
}

// exercicio2(ano2);