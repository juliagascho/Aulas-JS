// Estrutura de repetição: FOR
// é mais usado do que o while, por ser mais simplificado

/*
    for(inicializacao; condicao; atualizacao) {
        // o codigo a se repetir
    }
*/

// 1 até 10:

for(let contador = 1; contador <= 10; contador++){
    console.log(contador);
}

console.log("------------------------");

// 10 até 1:

for(let contador = 10; contador >= 1; contador--){
    console.log(contador);
}

console.log("------------------------");

//1 + 2 + 3 ... 10:

let soma = 0;

for(let i = 1; i <= 100; i++){
    soma = soma + i;
}
console.log(soma); // se colocar o console dentro do for, ele vai mostrar os valores de4 cada soma. Assim ele mostra apenas o valor final.