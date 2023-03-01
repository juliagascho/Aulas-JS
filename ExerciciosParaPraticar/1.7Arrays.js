// 1. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

function exercicio1(){

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
        }

        for (let numero of numeros){
            console.log(numero)
        }

        // 9:
        numeros.forEach(numero => console.log(numero));

}

// exercicio1()

// 2. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.

function exercicio2(){

    let strings = ["Emma", "Chloe", "Julia", "Leonardo"];

    let strings5 = strings.filter((str) => str.length > 5);
    
    console.log(strings5);

        // ou:

    let nomes = ["Emma", "Chloe", "Julia", "Leonardo"];

    function strings5c (strings){

        let strings5c = strings.filter((str) => str.length > 5);
            
        return strings5c  
    }

    console.log(strings5c(nomes));

        // ou:

    function filtrarString (array){
        let novoArray = [];

        for (let i = 0; i < array.length; i++){
            let string = array[i];
            if(string.length > 5){
                novoArray.push(string)
            }
        }
        return novoArray
    }
    console.log(filtrarString(["abacate", "uva", "mamão"]))
  
} 
 
// exercicio2()

// 3. Crie uma função que recebe um array de números e retorna um novo array com apenas os números que são maiores que a média do array do parâmetro.

function exercicio3(){

    // let numeros = [1, 2, 3, 4, 5];
    // let soma = 0;
    
    // numeros.forEach((numero) => {soma += numero});

    // let media = soma / numeros.length;
    
    // let maiorQueMedia = numeros.filter ((numero) => numero > media);

    // console.log(maiorQueMedia);

    // // ou

    let numeros = [1, 2, 3, 4, 5];
    
    function maiorQueMedia(numeros){
    
    let soma = 0;
    
    numeros.forEach((numero) => {soma += numero});

    let media = soma / numeros.length;
    
    let maiorQueMedia = numeros.filter ((numero) => numero > media);
    
    return maiorQueMedia
    }

    console.log(maiorQueMedia(numeros));

    // // ou

    // function filtrarNumerosMaioresQueMedia (array){

    //     let soma = 0;
    //     for (i = 0; i < array.length; i++){
    //         soma += array[i];
    //     }

    //     let media = 0;
    //     for (i = 0; i < array.length; i++){
    //         media = soma / array.length;
    //     }

    //     let novoArray = [];

    //     for (let i = 0; i < array.length; i++){
    //         let numero = array[i];
    //         if(numero > media){
    //             novoArray.push(numero)
    //         }
    //     }
    //     return novoArray
    // }

    // let resultado = filtrarNumerosMaioresQueMedia([1, 2, 3, 4, 5]);
    // console.log(resultado)

    // por que não dá certo fazendo:
    // console.log(filtrarNumerosMaioresQueMedia([1, 2, 3, 4, 5]))

}
             
// exercicio3()

// 4. Crie um array de booleans e realize um OU de todas os valores.

function exercicio4(){

    let booleans = [true, false, true, true, false];
    let resultado = false;

    for (let i = 0; i < booleans.length; i++) {
        resultado = resultado || booleans[i];

        console.log(resultado);
    }

    console.log(resultado); // true

}

// exercicio4()

// 5. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Indique quais alunos faltaram.

function exercicio5(){

    let listaAlunos = ["João", "Maria", "José"];
    let presencaAlunos = ["João", "José"];
    let faltantes = [];

    function alunosFaltantes(alunos, presenca){

        for (let aluno of alunos){
            if(!presenca.includes(aluno)){
                faltantes.push(aluno)
            }
        }
        return faltantes
    }

    console.log(alunosFaltantes(listaAlunos, presencaAlunos))

    // ou

    let faltantes2 = listaAlunos.filter((num) => {

        if (!presencaAlunos.includes(num)) {
          return true
        } else {      
          return false
        }})
      
        console.log(faltantes2)

}

// exercicio5()

// 6. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

function exercicio6(){

    let numeros = [1, 2, 3, 4, 5];

    function quadrados (numeros){
        let numerosAoQuadrado = numeros.map((numero) => {return numero ** 2});

        return numerosAoQuadrado
    }
    
    console.log(quadrados(numeros));

// ou

    function quadrados2 (valores){
    
        let resultado = [];

        for(i = 0; i < valores.length; i++){
            resultado[i] = valores[i] ** 2
        }
        return resultado
    }

    console.log(quadrados2(numeros));

}

 // exercicio6()

 // 7. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

 function exercicio7(){

    function arquivosPorExtensao (arquivos, extensao){
        let resultado = [];

        for (let arquivo of arquivos){
            if(arquivo.endsWith(`${extensao}`)){
                resultado.push(arquivo)
            }
        }
        return resultado
    }

    let arquivos = ["foto.png", "planilha.pdf", "livro.pdf"];
    let extensao = ["pdf"];
    console.log(arquivosPorExtensao(arquivos, extensao));


    // ou


    function filtrarArquivosPorExtensao(array, extensao) {
        return array.filter(arquivo => arquivo.endsWith(extensao));
        }
    console.log(filtrarArquivosPorExtensao(arquivos, extensao));
}

  // exercicio7()

  // 8. Crie uma função que recebe um número, em seguida retorne um array de números aleatórios com o tamanho especificado pelo número.

  function exercicio8(){

    function arrayNumeros (quantidade){
        
        let array = [];

        for (i = 0; i < quantidade; i++){
            array.push(Math.floor(Math.random() * 100));
        }

        return array;
    }
 
    console.log(arrayNumeros(5));

}

 // exercicio8()
