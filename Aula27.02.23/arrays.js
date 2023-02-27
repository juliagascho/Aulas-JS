// Aula 27.02 -> ARRAYS

let figuras = ["coracao", "estrela", "joinha"];
console.log(figuras); //representação em texto

let numeros = [3, 1, 5, 7, 2];
console.log(numeros);

console.log("------------------------"); 

// Acessando elementos:
console.log(figuras[2]);
console.log(figuras[0]);
console.log(numeros[2]);
console.log(numeros[0]);

console.log("------------------------"); 

numeros[2] = 21; // altera o valor armazenado no indice 2
console.log(numeros);
numeros[2]++;
console.log(numeros);

console.log("------------------------"); 

// Percorrer um array
console.log(numeros.length); // quantos elementos existem na array
console.log(figuras.length);

console.log("------------------------"); 

for(let i = 0; i < numeros.length; i++){
    console.log(i);
} // vai mostrar os índices de cada posição -> 0 1 2 3 4

console.log("------------------------"); 


for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
} // vai mostrar os elementos em cada posição

console.log("------------------------"); 


for(let i = 0; i < figuras.length; i++){
    console.log(`O valor do index ${i} é ${figuras[i]}.`)
}

console.log("------------------------"); 


// FOR-OF - funciona apenas para arrays

let nomes = ["josé", "carlos", "andré", "pedro"];

for(let nome of nomes){ // a variável nome assume um elemento diferente a cada laço
    console.log(nome);
}

let notas = [7.5, 8.7, 9.0, 10.0];

for(let notaAluno of notas){
    console.log(notaAluno);
}

for(let i = 0; i < notas.length; i++){
    notas[i]++; // para alterar o valor original, é necessário o index
}
console.log(notas);

console.log("------------------------"); 

// inserir/remover
let listaProdutos = [];
console.log(listaProdutos.length);

listaProdutos.push("Smart Band"); // adicionar um elemento ao final
listaProdutos.push("Bolo de cenoura"); 
listaProdutos.push("Batata");  
listaProdutos.push("banana", "abacate", "ovos"); // adiciona mais que um elemento por vez

console.log(listaProdutos);
console.log(listaProdutos.length);

listaProdutos.pop(); // remove o último elemento de uma array - só dá para remover 1 elemento por vez
console.log(listaProdutos);

console.log(listaProdutos.includes("Bolo de cenoura")); // verifica se existe um elemento igual na array