/*
1.3 Estruturas de seleção
1. Defina uma variável para armazenar um caractere e determine se é uma vogal ou uma consoante. Use um switch-case para implementar a lógica.
2. Defina uma variável para armazenar um mês do ano (em número) e imprima o nome do mês correspondente. Use um switch-case para implementar a lógica.
3. Defina uma variável para armazenar um número de 1 a 12 e imprima o número de dias correspondente ao mês. Use um switch-case para implementar a lógica. Considere que fevereiro tem 28 dias em anos não bissextos.
4. Defina uma variável para armazenar um número de 1 a 4 e imprima o nome da estação do ano correspondente. Use um switch-case para implementar a lógica.
5. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a menção correspondente. Use um switch-case para implementar a lógica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.
*/

//1
let letra = "j";
switch(letra.toLowerCase()){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("A letra é uma vogal.");
        break;
        default:
            console.log("A letra é uma consoante.");
} 

console.log("------------------------"); 

//2

let mes = 3;

switch(mes) {
    case 1:
        console.log("Janeiro");
        break; 
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break; 
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break; 
    case 7:
        console.log("Julho");
        break; 
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break; 
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;   
    default: 
    console.log(`Este mês não existe: ${mes}!`);
}

console.log("------------------------"); 

//3


switch(mes){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`O mês ${mes} tem 31 dias.`);
        break;
    case 2:
        console.log(`O mês ${mes} tem 28 dias em anos não bissextos.`)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`O mês ${mes} tem 30 dias.`);
        break;        
}

console.log("------------------------"); 

//4

let estacao = 4;

switch(estacao) {
    case 1:
        console.log("Primavera");
        break; 
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default: 
        console.log(`Só existem 4 estações.`);
}

console.log("------------------------"); 

//5

let nota = 6.5

switch(Math.floor(nota)){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Insuficiente");
        break; 
    case 5:
    case 6:
        console.log("Regular");
        break; 
    case 7:
    case 8:
        console.log("Bom");
        break; 
    case 9:
    case 10:
        console.log("Excelente");
        break; 
        default: 
            console.log(`Nota inválida`);
}

