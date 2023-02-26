// 1. Escreva uma função que receba uma string e retorne o número de caracteres contidos nela.

function caracteres(palavra){
    return palavra.length
}

//console.log(caracteres("abacate"))

let minhaString = "abacate"
console.log(`A palavra ${minhaString} tem ${caracteres(minhaString)}.`)

minhaString = "batata"
console.log(`A palavra ${minhaString} tem ${caracteres(minhaString)}.`)

console.log("------------------------"); 

//2. Escreva uma função que receba uma string e retorne a mesma string em letras maiúsculas.

function maiuscula(palavra){
    return palavra.toUpperCase()
}

console.log(maiuscula(minhaString));

console.log(maiuscula("Emma"));

console.log("------------------------"); 

//3. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function minuscula(palavra){
    return palavra.toLowerCase()
}

minhaString = "CHLOE"
console.log(minuscula(minhaString));

console.log(minuscula("CHLOE"));

console.log("------------------------"); 

//4. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function igualdade (p1, p2){
    if(p1 === p2){
        return true
    } else { 
        return false
    }
}

console.log(igualdade("banana", "banana"));
console.log(igualdade("banana", "abacate"));

console.log("------------------------"); 

// 5. Escreva uma função que receba uma string e um número e retorne os últimos caracteres da string de acordo com o número informado.

function slice (palavra, numero){
    if(numero > palavra){
        return palavra
    } else {
        return palavra.slice(-numero)
    }    
}

console.log(slice("batata", 3));

console.log("------------------------"); 


// 6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase com as ocorrências da palavra censuradas/trocadas por ***. Exemplo: censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo *** e valorant, mas *** é melhor". Dica: use a função replaceAll.

function censurar(palavra, frase) {
    return frase.replaceAll(palavra, "***");
    }
console.log(censurar("batata", "Eu gosto muito de batata"));

console.log("------------------------"); 


// 7. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function contarCaractere(str, caractere) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caractere) {
        contador++;
        }
    }
        return contador;
}
    console.log(contarCaractere("batata", "a")); 