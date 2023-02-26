// string - cadeia de caracteres

let meuPet = "Fred"; // "", '', ``
// caracteres ou índices: F r e d -> F(0)  r(1)  e(2)  d(3)
console.log(meuPet);

console.log(meuPet[0]); // acessando o caractere "F"

console.log(meuPet.length); // retorna o tamanho da string

// percorrendo string da posição 0 até length -1:
// a palavra tem 4 caracteres, mas o índice 4 não existe, se quiser acessar a ultima posição e colocar lenght, ele vai tentar acessar o caractere da posição 4, que não existe
// posição final da string é lenght - 1

for (let i = 0; i < meuPet.length; i++){
    console.log(meuPet[i])
}

console.log(meuPet.toLowerCase()); //retorna todos os caracteres em letra minuscula
console.log(meuPet.toUpperCase()); //retorna todos os caracteres em letra maiuscula

let arquivo = "batata.mp4";
console.log(arquivo.endsWith(".mp4")); // verifica se a string termina com a palavra
console.log(arquivo.startsWith("bata")); // verifica se a string inicia com a palavra

let frase = "Eu comi arroz, feijão e carne";
console.log(frase.includes("batata")); // buscar se uma frase inclui um trecho

console.log(frase.indexOf("c")); // busca a posição da primeira ocorrencia do caractere
console.log(frase.lastIndexOf("c")); // busca a posição da primeira ocorrencia do caractere da direita para a esquerda
console.log(frase.indexOf("x")); // resultado = -1, quer dizer que não encontrou

console.log(frase.replace("carne", "ovo"));

let palavra2 = "BATATA";
console.log(palavra2.slice(1)); // cortou do 1 até o final, o que ele corta é o que aparece
console.log(palavra2.slice(1, 4)); // corta do 1 até o 3
